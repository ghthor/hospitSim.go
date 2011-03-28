package main

import (
    "os"
	"fmt"
    "log"
    "container/list"
    "math"
    "http"
    "io"
    "strings"
    "strconv"
	//"flag"
    //"os"
    //"io/ioutil"
    "rand"
)

const (
    HIGH = iota
    MEDM
    LOOW
    NUM_PRIORITIES
)

type Date float64

func (d Date) OccursDuring(ts TimeSpan) bool {
    return (ts.Began<= d && d <= ts.Ended)
}

type TimeSpan struct {
    Began, Ended Date
    IsLive bool
    TimeLine *TimeLine
}

func (t *TimeSpan) Total() float64 {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return float64(t.Ended - t.Began);
}

func (t *TimeSpan) ElapsedTime() float64 {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return float64(t.Ended - t.Began);
}

func (t *TimeSpan) DateOccursDuring(date Date) bool {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return (t.Began <= date && date <= t.Ended)
}

func (t *TimeSpan) String() string {
    return fmt.Sprintf("{\"TimeSpan\": {\"Began\" : %f, \"Ended\" %f } }", t.Began, t.Ended)
}

type Event interface {
    Type() string
    Date() Date
    Execute(*Hospital)
}

func LogEvent(e Event, p string) string {
    return fmt.Sprintf("Event: %8.2f \t\t\t%s\t\t%s",float64(e.Date()), e.Type(), p)
}

// Type = [Busy, Idle]
type State struct {
    Status string
    *TimeSpan
}

func (s *State) String() string {
    return fmt.Sprintf("{\"State\" : { \"Status\" : \"%s\", \"TimeSpan\": %v } }", s.Status, s.TimeSpan)
}

func (s *State) Finalize() {
    s.IsLive = false
    s.Ended = s.TimeLine.Now
    if s.ElapsedTime() < 0 {
        log.Println("ERROR: Elasped Time of 0")
    }
}

type Sim struct {
    *State
    History *list.List
}

func (s *Sim) SetNextState(status string) {
    s.State.Finalize()
    //Add the old state to the History
    s.History.PushFront(s.State)
    s.State = &State{status, &TimeSpan{Began: s.State.Ended, Ended: s.State.Ended, TimeLine: s.TimeLine}}
}

func (s *Sim) TotalUp() (map[string]float64) {
    //log.Println("LOG: Totaling the State's Elapsed Time for\n-History:", s)
    totals := make(map[string]float64)
    for e := s.History.Front(); e != nil; e = e.Next() {
        state := e.Value.(*State)
        n, ok := totals[state.Status]
        if ok {
            totals[state.Status] = n + state.ElapsedTime()
        } else {
            totals[state.Status] = state.ElapsedTime()
        }
    }
    //log.Println("LOG: Totaling Completed for")
    return totals
}

type Staff struct {
    *Sim
    PatientsProcessed uint
}

type Nurse Staff
func NewNurse(h *Hospital) *Nurse {
    n := &Nurse{ &Sim{ &State{"Idle", &TimeSpan{Began: h.Now(), TimeLine: h.TimeLine}}, list.New()}, 0}
    return n
}
type Doctor Staff
func NewDoctor(h *Hospital) *Doctor {
    n := &Doctor{ &Sim{ &State{"Idle", &TimeSpan{Began: h.Now(), TimeLine: h.TimeLine}}, list.New()}, 0}
    return n
}

type Patient struct {
    *Sim
    Hospital *Hospital
    ProcessingTime float64
    Priority int
    Id int
}

func (s *Patient) TotalUp() (map[string]float64) {
    if s.Status != "Finished" {
        log.Println("ERROR: Patient never Processed", s.String())
        panic("ERROR: A Patient was never Processed")
    }
    totals := make(map[string]float64)
    for e := s.History.Front(); e != nil; e = e.Next() {
        state := e.Value.(*State)
        n, ok := totals[state.Status]
        if ok {
            totals[state.Status] = n + state.ElapsedTime()
        } else {
            totals[state.Status] = state.ElapsedTime()
        }
    }
    return totals
}

func NewPatient(arrivalDate Date, hospital *Hospital) *Patient {
    p := &Patient{ &Sim{ &State{"Arriving", &TimeSpan{ Began: arrivalDate, TimeLine: hospital.TimeLine}}, list.New()}, hospital, rand.Float64() * 60 + 1, rand.Intn(NUM_PRIORITIES), len(hospital.Patients)}
    return p
}

func (p *Patient) String() string {
    return fmt.Sprintf("{\"Patient\":{\"Id\": %4d, \"Priority\":%d,\"State\":\"%v\"}}",p.Id , p.Priority, p.Status)
}

type PatientArrives Date
const PatientArrivesEvent = "PatientArrives"
func (e PatientArrives) Type() string { return PatientArrivesEvent; }
func (e PatientArrives) String() string {
    return LogEvent(e, "Unknown")
}
func (e PatientArrives) Date() Date { return Date(e); }
func (e PatientArrives) Execute(h *Hospital) {
    p := NewPatient(Date(e), h)
    p.Id = len(h.Patients)
    h.Patients = append(h.Patients, p)
    h.WaitingRoom.AddPatient(p, h)
    //fmt.Println(LogEvent(e, p.String())) //LOG
}

type NurseFreed struct {
    Nurse *Nurse
    Patient *Patient
    date Date
}
const NurseFreedEvent = "NurseFreed"

// Nurse Processing Logic
func NewNurseFreed(n *Nurse, p *Patient, now Date) *NurseFreed {
    n.SetNextState("Busy")
    p.SetNextState("WithNurse")
    return &NurseFreed{n, p, Date(float64(now) + (p.ProcessingTime*.75))}
}
func (e NurseFreed) Type() string { return NurseFreedEvent; }
func (e NurseFreed) Date() Date { return e.date; }
func (e NurseFreed) Execute(h *Hospital) {
    //Check WaitingRoom and assign a Nurse
    h.AssignDoctorToPatient(e.Patient)
    h.NurseFreed(e.Nurse)
    //fmt.Println(LogEvent(e, e.Patient.String())) //LOG
}
func (e NurseFreed) String() string {
    return LogEvent(e, e.Patient.String())
}

//
type DoctorFreed struct {
    Doctor *Doctor
    Patient *Patient
    date Date
}
const DoctorFreedEvent = "DoctorFreed"
// Nurse Processing Logic
func NewDoctorFreed(d *Doctor, p *Patient, now Date) *DoctorFreed {
    d.SetNextState("Busy")
    p.SetNextState("WithDoctor")
    return &DoctorFreed{d, p, Date(float64(now) + (p.ProcessingTime*.25))}
}
func (e DoctorFreed) Type() string { return DoctorFreedEvent; }
func (e DoctorFreed) Date() Date { return e.date; }
func (e DoctorFreed) Execute(h *Hospital) {
    e.Patient.SetNextState("Finished")
    h.DoctorFreed(e.Doctor)
    //fmt.Println(LogEvent(e, e.Patient.String())) //LOG
}
func (e DoctorFreed) String() string {
    return LogEvent(e, e.Patient.String())
}

type TimeLine struct {
    Event *EventNode
    History *list.List
    Now Date
}

func (tl *TimeLine) String() string {
    history := ""
    for s := tl.History.Front(); s.Next() != nil; s = s.Next() {
        history += fmt.Sprintf("%v\n", s.Value)
    }
    return fmt.Sprintf("\"TimeLine History\"\n%s", history)
}

// Optimize These Numbers
const (
    FreeListMax = 20
    DeferMax = 1000
)

var FreeList chan *EventNode = make(chan *EventNode, FreeListMax)

type EventNode struct {
    Id int64
    next *EventNode
    Next chan *EventNode
    deferredEvents chan Event
    finalizeValue chan chan Event
    isFree chan bool
    value Event
    get func(*EventNode) Event
    set func(*EventNode, Event)
}

func (n *EventNode) DeferEvent(e Event) {
    if n == nil {
        log.Println("ERROR: An event is being created after the event chain has completed")
        panic("ERROR: Attemped Defer when EventNode == nil")
    }
    n.deferredEvents <- e
}

func (n *EventNode) Get() Event {
    return n.get(n)
}

func (n *EventNode) makeNext(e Event) {
    if n.next != nil {
        panic("ERROR: n.next isn't nil during makeNext")
    }
    n.next = newEventNode(true)
    if n.next == nil {
        panic("ERROR: n.next is still nil after calling newEventNode")
    }
    n.next.deferredEvents <- e
}

// Condtional getters
func getFinalValue(n *EventNode) Event {
    return n.value
}

func getAndFinalize(n *EventNode) Event {
    // I want to defer this
    n.get = getFinalValue
    return <-(<-n.finalizeValue)
}

type TurnCompleted int
func (t TurnCompleted) Date() Date { return math.MaxFloat64; }
func (t TurnCompleted) Type() string { return "TurnCompleted"; }
func (t TurnCompleted) Execute(h *Hospital) { return; }

func (n *EventNode) free() {
    n.deferredEvents <- TurnCompleted(n.Id)
    go func() { FreeList <- n; }()
}

func (e *EventNode) wipeClean() *EventNode {
    e.newChannels()
    e.value = nil
    e.next = nil

    e.set = setNormal
    e.get = getAndFinalize
    return e
}

func (e *EventNode) newChannels() {
    e.deferredEvents = make(chan Event, DeferMax)
    e.finalizeValue = make(chan chan Event)
    e.Next = make(chan *EventNode)
}

var totalEventNodes int64

func newEventNode(force bool) (e *EventNode) {
    //log.Println("LOG: New Node Requested")
    select {
    case e = <-FreeList:
    default:
        if force {
            //log.Println("LOG: EventNode forced Creation")
            e = &EventNode{}
            e.isFree = make(chan bool, 1)
            e.isFree <- true
        } else {
            //log.Println("LOG: Waiting for a free EventNode")
            e = <-FreeList
        }
    }
    if e.Id == 0 {
        // This is a new Unseen EventNode, Tag it
        totalEventNodes++
        //log.Println("LOG: TotalEvent Nodes Existing =", totalEventNodes)
        e.Id = totalEventNodes
    }
    isFree := <-e.isFree
    if !isFree {
        // Something is wrong, Clean this node up, or ditch is entirely
        panic("ERROR: Node didn't complete it's Cycle")
    }
    e.wipeClean()
    go e.Listen()
    return
}

// Conditional Setters
func setNormal(n *EventNode, e Event) {
    n.set = setAndCreateNextNode
    n.value = e
}

func setAndCreateNextNode(n *EventNode, e Event) {
    n.set = setAndDefer
    if !(e.Date() > n.value.Date()) {
        temp := n.value
        n.value = e
        e = temp
    }
    //log.Println("LOG: Next node is being created during a set operation")
    n.makeNext(e)
}

func setAndDefer(n *EventNode, e Event) {
    if !(e.Date() > n.value.Date()) {
        temp := n.value
        n.value = e
        e = temp
    }
    n.next.deferredEvents <- e;
}

// I don't new if this is needed at all
func (n *EventNode) Listen() {
    valueCh := make(chan Event)
    for {
        select {
        case e := <-n.deferredEvents:
            n.set(n, e)
        case n.finalizeValue <- valueCh:
            // Value only ever gets check once
            for {
                select {
                case e := <-n.deferredEvents:
                    n.set(n, e)
                default:
                    // This Go Routine's purpose has been completed
                    //Theoretically Process all events that were created before
                    // n.value.Date()
                    valueCh <- n.value

                    // Now we must handle events that n.value could create
                    for e := range n.deferredEvents {
                        if e.Type() == "TurnCompleted" {
                            // This is the signal that no new events can be generated on n.value.Date() which is Now
                            //log.Printf("LOG: Node %d Shutting Down and being Freed\n", n.Id)
                            if (n.next == nil) {
                                // This should mean the simulation has completed
                                //log.Println("LOG: Simulation Completed?")
                            }
                            break
                        } else {
                            // n.value's Event has generated a new event
                            // Because we KNOW that n.value HAS to generate an event that occurs after n.value.Date()
                            // We can pass this event off to n.next
                            // We can also assume that n.set(n, e) will always pass e onto n.next
                            n.set(n, e)
                        }
                    }
                    // Now that the turn is completed we can pass off the value of n.next
                    n.Next <- n.next
                    n.isFree <- true
                    return
                }
            }
        }
    }
}

func (tl *TimeLine) TickForward(h *Hospital) bool {
    if tl.Event == nil {
        log.Println("LOG: Simulation Completed")
        return false
    }
    e := tl.Event.Get()

    tl.Now = e.Date()
    e.Execute(h)
    tl.History.PushBack(e)

    tl.Event.free()
    tl.Event = <-tl.Event.Next
    return true
}

func (tl *TimeLine) SpawnFutureEvent(futureEvent Event) {
    tl.Event.DeferEvent(futureEvent)
}

//const WAITING_ROOM_Q_MAX_LENGTH = 300
type WaitingRoom struct {
    q [NUM_PRIORITIES]*list.List
}

func NewWaitingRoom() *WaitingRoom {
    w := &WaitingRoom{}
    for i := 0; i < len(w.q); i++ {
        w.q[i] = list.New()
    }
    return w
}

func (w *WaitingRoom) TotalWaiting() int {
    var totalWaiting int
    for i := 0; i < len(w.q); i++ {
        totalWaiting += w.q[i].Len()
    }
    return totalWaiting
}

func (w *WaitingRoom) AddPatient(p *Patient, h *Hospital) {
    for i := 0; i < NUM_PRIORITIES; i++ {
        if w.q[i].Len() == 0 && i == p.Priority {
            // Check and Assign this Patient to a Nurse
            if !h.AssignNurse(p) {
                // No Nurse Available
                w.enque(p)
            }
            return
        } else if w.q[i].Len() > 0 && i <= p.Priority {
            // Queue in a Higher Priority already has a Patient Waiting
            // Just Enque this poor Sucker
            w.enque(p)
            return
        }
    }
}

func (w *WaitingRoom) enque(p *Patient) {
    p.SetNextState("WaitingForNurse")
    w.q[p.Priority].PushBack(p)
}

func (w *WaitingRoom) Next() *Patient {
    for i := 0; i < NUM_PRIORITIES; i++ {
        if w.q[i].Len() > 0 {
            pEle := w.q[i].Front()
            w.q[i].Remove(pEle)
            return pEle.Value.(*Patient)
        }
    }
    return nil
}

type Hospital struct {
    Patients []*Patient
    Nurses []*Nurse
    Doctors []*Doctor
    WaitingRoom *WaitingRoom
    WaitingForDoctor *list.List
    TimeLine *TimeLine
}

func (h *Hospital) Now() Date {
    return h.TimeLine.Now
}

func NewHospital(spawnTime float64, nurses, doctors int) *Hospital {
    span := TimeSpan{0, 10*60, false, nil}
    totalPatients := int(math.Floor(float64(span.Ended)/spawnTime))
    h := &Hospital{make([]*Patient, 0, totalPatients), make([]*Nurse, 0, nurses), make([]*Doctor, 0, doctors), NewWaitingRoom(), list.New(), &TimeLine{Event: newEventNode(false), History: list.New()}}

    // Create the Patient Spawn Times
    for i := 0; i < totalPatients; i++ {
        h.TimeLine.Event.DeferEvent(PatientArrives(float64(i)*spawnTime))
    }

    // Create the Nurses
    for i := 0; i < nurses; i++ {
        h.Nurses = append(h.Nurses, NewNurse(h))
    }

    // Create the Doctors
    for i := 0; i < doctors; i++ {
        h.Doctors = append(h.Doctors, NewDoctor(h))
    }

    return h
}

func (h *Hospital) String() string {
    return fmt.Sprintf("\"Hospital\" : {\n\t\"Patients\":%d,\n\t\"Nurses\":%d,\n\t\"Doctors\":%d\n\t \"Events\":%v\n}", len(h.Patients), len(h.Nurses), len(h.Doctors), h.TimeLine.Event)
}

func (h *Hospital) TickForward() bool {
    return h.TimeLine.TickForward(h)
}

func (h *Hospital) StartSimulation() chan *Hospital {
    simCompleted := make(chan *Hospital)
    go func() {
        for h.TickForward() {}
        simCompleted <- h
    }()
    return simCompleted
}

func (h *Hospital) FreeDoctors() []*Doctor {
    idleDocs := make([]*Doctor, 0, len(h.Doctors))
    for _, doc := range h.Doctors {
        if doc.Status == "Idle" {
            idleDocs = append(idleDocs, doc)
        }
    }
    return idleDocs
}

func (h *Hospital) FreeDoctor() *Doctor {
    idleDocs := h.FreeDoctors()
    if len(idleDocs) > 0 {
        return idleDocs[rand.Intn(len(idleDocs))]
    }
    return nil
}

func (h *Hospital) FreeNurses() []*Nurse {
    idleNurses := make([]*Nurse, 0, len(h.Nurses))
    for _, nurse := range h.Nurses {
        if nurse.Status == "Idle" {
            idleNurses = append(idleNurses, nurse)
        }
    }
    return idleNurses
}

func (h *Hospital) FreeNurse() *Nurse {
    idleNurses := h.FreeNurses()
    if len(idleNurses) > 0 {
        return idleNurses[rand.Intn(len(idleNurses))]
    }
    return nil
}

func (h *Hospital) AssignDoctorToPatient(p *Patient) {
    now := h.TimeLine.Now
    if doc := h.FreeDoctor(); doc != nil {
        doc.SetNextState("Busy")
        p.SetNextState("WithDoctor")
        futureEventDate := float64(now) + (p.ProcessingTime*.25)
        h.TimeLine.SpawnFutureEvent(&DoctorFreed{doc, p, Date(futureEventDate)})
    } else {
        // Put the Patient in Waiting
        p.SetNextState("WaitingForDoctor")
        h.WaitingForDoctor.PushBack(p)
    }
}

func (h *Hospital) DoctorFreed(d *Doctor) {
    if h.WaitingForDoctor.Len() > 0 {
        //There is a Patient Waiting
        idleDoctors := h.FreeDoctors()
        idleDoctors = append(idleDoctors, d)
        doc := idleDoctors[rand.Intn(len(idleDoctors))]
        if doc != d {
            // If the Random Doctor from the Idle Pool wasn't
            // The newly Freed one we must put it in Idle state
            d.SetNextState("Idle")
        }
        ele := h.WaitingForDoctor.Front()
        // Get the Next Patient
        p := ele.Value.(*Patient)
        h.WaitingForDoctor.Remove(ele)
        h.TimeLine.SpawnFutureEvent(NewDoctorFreed(doc, p, h.TimeLine.Now))
    } else {
        // No Patients Waiting, idleing Doctor d
        d.SetNextState("Idle")
    }
}

func (h *Hospital) NurseFreed(n *Nurse) {
    // There is a Free Nurse, Pull the Next Patient Out of Q
    if p := h.WaitingRoom.Next(); p != nil {
        // Add any other Idle Nurses into the Lottery
        // This isn't Round Robin
        idleNurses := h.FreeNurses()
        idleNurses = append(idleNurses, n)
        nurse := idleNurses[rand.Intn(len(idleNurses))]
        if nurse != n {
            // If the Random Nurse from the Idle Pool wasn't
            // The newly Freed one we must put it in Idle state
            n.SetNextState("Idle")
        }
        h.TimeLine.SpawnFutureEvent(NewNurseFreed(nurse, p, h.TimeLine.Now))
    } else {
        // NO Patients waiting, this nurse is freed to play minecraft
        n.SetNextState("Idle")
    }
}

func (h *Hospital) Report() (r map[string]string) {
    //TODO: Report Some Useful Data
    return nil
}

func (h *Hospital) AssignNurse(p *Patient) bool {
    if n := h.FreeNurse(); n != nil {
        h.TimeLine.SpawnFutureEvent(NewNurseFreed(n, p, h.TimeLine.Now))
        return true
    }
    return false
}

func init() {
    // Allocate EventNodes
    go func() {
        for i := 0; i < FreeListMax/2; i++ {
            n := &EventNode{isFree: make(chan bool, 1)}
            n.isFree <- true
            FreeList <- n
        }
    }()
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, homepage)
}

func SimulationHandler(w http.ResponseWriter, r *http.Request) {
    vars := strings.Split(r.URL.Path[5:], "/", 3)
    if len(vars) != 3 {
        io.WriteString(w, "Invalid Simulation Parameters")
        return
    }

    //TODO: Help user realize their errors
    spawnTime, err := strconv.Atof64(vars[0])
    if err != nil { spawnTime = 60; }
    numNurse, err := strconv.Atoi(vars[1])
    if err != nil { numNurse = 1; }
    numDoc, err := strconv.Atoi(vars[2])
    if err != nil { numDoc = 1; }

    fmt.Println("Running Requested Simulation....")
    fmt.Println(spawnTime, numNurse, numDoc)
    h := NewHospital(spawnTime, numNurse, numDoc)
    h = <-h.StartSimulation()
    fmt.Println("Simulation Completed....")
    io.WriteString(w, compilePage(h.Patients))
}

var homepage string

func main() {
    err := loadTemplates()
    if err != nil { fmt.Println(err); return; }

    homepage = "<a href=\"/sim/10/1/1\">Basic Simulation</a><br /><table><tr><td>SpawnTime</td><td>10 mins</tr><tr><td># Nurses</td><td>1</td></tr><tr><td># Doctors</td><td>1</td></tr></table>"

    // Simulation
    wd, err := os.Getwd();
    if err != nil { log.Println("ERROR: Failed to get Working Directory", err); return }

    //indexHtml, err := ioutil.ReadFile(wd + "/assets/index.html")
    //if err != nil { fmt.Println("ERROR:", err); return; }

    http.Handle("/assets/", http.FileServer(wd, ""))
    http.HandleFunc("/sim/", http.HandlerFunc(SimulationHandler))
    http.HandleFunc("/", http.HandlerFunc(HomeHandler))

    err = http.ListenAndServe(":6060", nil);
    log.Println("LOG: Server Shutting Down")

    if err != nil { log.Println("ERROR:", err); }

}

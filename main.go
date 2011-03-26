package main

import (
    "os"
	"fmt"
    "container/list"
    "math"
    "http"
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

type Event interface {
    Type() string
    Date() Date
    Execute(*Hospital)
}

func LogEvent(e Event) string {
    return fmt.Sprintf("Event: %8.2f \t\t\t%s",float64(e.Date()),e.Type())
}

// Type = [Busy, Idle]
type State struct {
    Status string
    *TimeSpan
}

func (s *State) Finalize() *State {
    s.IsLive = false
    s.Ended = s.TimeLine.Now
    return s
}

type Sim struct {
    *State
    History *list.List
}

func (s *Sim) SetNextState(status string) {
    s.State = s.State.Finalize()
    //Add the old state to the History
    s.History.PushFront(s.State)
    s.State = &State{status, &TimeSpan{Began: s.State.Ended, Ended: s.State.Ended, TimeLine: s.TimeLine}}
}

func (s *Sim) TotalUp() (map[string]float64) {
    totals := make(map[string]float64)
    for e := s.History.Front(); e.Next() != nil; e = e.Next() {
        state := e.Value.(*State)
        totals[state.Status] = totals[state.Status] + state.ElapsedTime()
    }
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
}

func NewPatient(arrivalDate Date, hospital *Hospital) *Patient {
    p := &Patient{ &Sim{ &State{"Arriving", &TimeSpan{ Began: arrivalDate, TimeLine: hospital.TimeLine}}, list.New()}, hospital, rand.Float64() * 60 + 1, rand.Intn(NUM_PRIORITIES)}
    return p
}

func (p *Patient) String() string {
    return fmt.Sprintf("{\"Patient\":{\"Priority\":%d,\"State\":\"%v", p.Priority, p.Status)
}

type PatientArrives Date
const PatientArrivesEvent = "PatientArrives"
func (e PatientArrives) Type() string { return PatientArrivesEvent; }
func (e PatientArrives) String() string {
    return LogEvent(e)
}
func (e PatientArrives) Date() Date { return Date(e); }
func (e PatientArrives) Execute(h *Hospital) {
    p := NewPatient(Date(e), h)
    //fmt.Println("New Patient", p)
    h.WaitingRoom.AddPatient(p, h)
    h.Patients = append(h.Patients, p)
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
    //e.Nurse.SetNextState("Idle")
    h.AssignDoctorToPatient(e.Patient)
    h.NurseFreed(e.Nurse)
}
func (e NurseFreed) String() string {
    return LogEvent(e)
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
}
func (e DoctorFreed) String() string {
    return LogEvent(e)
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
    FreeListMax = 100
    DeferMax = 100
)

var FreeList chan *EventNode = make(chan *EventNode, FreeListMax)

type EventNode struct {
    Id uint
    next *EventNode
    deferredEvents chan Event
    deferFull chan bool
    finalizeValue chan chan Event
    isFinalized bool
    value Event
    get func(*EventNode) Event
    set func(*EventNode, Event)
}

func (n *EventNode) DeferEvent(e Event) {
    if n.isFinalized {
        if n.next == nil {
            // This shouldn't ever happen?
            // But just in case
            n.makeNext(e)
        } else {
            n.next.deferredEvents <- e
        }
    } else {
        n.deferredEvents <- e
    }
}

func (n *EventNode) Get() Event {
    return n.get(n)
}

func (n *EventNode) makeNext(e Event) {
    select {
        case n.next = <-FreeList:
            n.next.wipeClean()
            n.next.Id = n.Id + 1
            go n.next.Listen()
            n.next.deferredEvents <- e
        default:
            // Create a new One???
            fmt.Printf("ERROR: 0 Free EventNodes")
    }
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

func (e *EventNode) free() {
    //e.wipeClean()
    FreeList <- e
}

func (e *EventNode) wipeClean() *EventNode {
    e.Id = 0
    // TODO: See if this is nessacary
    e.newChannels()
    e.value = nil
    e.next = nil

    e.set = setNormal
    e.get = getAndFinalize
    return e
}

func (e *EventNode) newChannels() {
    e.deferredEvents = make(chan Event, DeferMax)
    e.deferFull = make(chan bool, 1)
    e.finalizeValue = make(chan chan Event)
}

func newEventNode(force bool) (e *EventNode) {
    select {
    case e = <-FreeList:
        return e
    default:
        if force {
            return ( &EventNode{} ).wipeClean()
        } else {
            return <-FreeList
        }
    }
    return nil
}

func NewEventNodeList(events []Event) *EventNode {
    // Log how many times this is called
    if events == nil {
        return newEventNode(false)
    }
    // Create a Group of nodes
    return nil
}

// Conditional Setters
func setNormal(n *EventNode, e Event) {
    n.set = setAndCreateNextNode
    n.value = e
}

func setAndCreateNextNode(n *EventNode, e Event) {
    n.set = setAndDefer
    n.makeNext(e)
}

func setAndDefer(n *EventNode, e Event) {
    if !(e.Date() > n.value.Date()) {
        temp := n.value
        n.value = e
        e = temp
    }
    select {
    case n.next.deferredEvents <- e:
    default:
        // Hey... Hey... Hey Listen, n.next get your shit together
        select {
        case n.next.deferFull <- true:
        default:
            // Need this to log wait times
            go func() { n.next.deferredEvents <- e; }()
        }
    }
}

// I don't new if this is needed at all
func (n *EventNode) setAndCheckFull(e Event) {
    n.set(n, e)
    select {
    case imFull := <-n.deferFull:
        if imFull {}
        select {
        case e := <-n.deferredEvents:
            n.set(n, e)
        default:
            // Currently the previous node doesn't listen for this
            //n.deferFull <- false
        }
    default:
    }
}

func (n *EventNode) Listen() {
    valueCh := make(chan Event)
    for {
        select {
        case e := <-n.deferredEvents:
            n.set(n, e)
        case imFull := <-n.deferFull:
            if imFull {}
            // Drain n.deferredEvents
        case n.finalizeValue <- valueCh:
            // Value only ever gets check once
            for {
                select {
                case e := <-n.deferredEvents:
                    n.set(n, e)
                default:
                    // This Go Routine's purpose has been completed
                    n.isFinalized = true
                    valueCh <- n.value
                    //n.free()
                    return
                }
            }
        }
    }
}

func (tl *TimeLine) TickForward(h *Hospital) bool {
    if tl.Event == nil {
        return false
    }
    e := tl.Event.Get()
    tl.Now = e.Date()
    e.Execute(h)
    fmt.Println(e)
    tl.History.PushBack(e)

    lastEvent := tl.Event
    defer lastEvent.free()
    tl.Event = tl.Event.next
    return true
}

func (tl *TimeLine) PeekNextEvent() Event {
    if tl.Event.next != nil {
        return tl.Event.next.Get()
    }
    return nil
}

func (tl *TimeLine) PushFutureEvent(futureEvent Event) {
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
                p.SetNextState("WaitingForNurse")
                w.q[p.Priority].PushBack(p)
            }
        } else if i < p.Priority && w.q[i].Len() == 0 {
            // Queue in a Lower Priority already has a Patient Waiting
            continue
        } else if i == p.Priority {
            // Just Enque this poor Sucker
            p.SetNextState("WaitingForNurse")
            w.q[p.Priority].PushBack(p)
        }
    }
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
    go h.TimeLine.Event.Listen()
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
        h.TimeLine.PushFutureEvent(&DoctorFreed{doc, p, Date(futureEventDate)})
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
        h.TimeLine.PushFutureEvent(NewDoctorFreed(doc, p, h.TimeLine.Now))
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
        h.TimeLine.PushFutureEvent(NewNurseFreed(nurse, p, h.TimeLine.Now))
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
        h.TimeLine.PushFutureEvent(NewNurseFreed(n, p, h.TimeLine.Now))
        return true
    }
    return false
}

func init() {
    // Allocate EventNodes
    go func() {
        for i := 0; i < FreeListMax; i++ {
            FreeList <- new(EventNode).wipeClean()
        }
    }()
}

func main() {
    h := NewHospital(60, 1, 1)

    fmt.Println("Running the Sim....")
    simComplete := h.StartSimulation()
    h = <-simComplete
    fmt.Println("Simulation Completed....")

    cdata := make([](map[string]float64), len(h.Patients))
    for i := 0; i < len(h.Patients); i++ {
        cdata[i] = h.Patients[i].TotalUp()
    }

    fmt.Println(cdata)

    wd, err := os.Getwd();
    if err != nil { fmt.Println("Errored when getting Working Directory", err); return }

    //indexHtml, err := ioutil.ReadFile(wd + "/assets/index.html")
    //if err != nil { fmt.Println("ERROR:", err); return; }

    http.Handle("/assets/", http.FileServer(wd, ""))
    http.Handle("/", http.FileServer(wd, ""))
    //http.HandleFunc("/", http.HandlerFunc(HandleIndex))

    //err = http.ListenAndServe(":6060", nil);

    if err != nil { fmt.Println("ERROR:", err); }

}

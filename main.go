package main

import (
	"fmt"
    "container/list"
    "math"
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

func (t TimeSpan) Total() float64 {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return float64(t.Ended - t.Began);
}

func (t TimeSpan) ElapsedTime() float64 {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return float64(t.Ended - t.Began);
}

func (t TimeSpan) DateOccursDuring(date Date) bool {
    if t.IsLive { t.Ended = t.TimeLine.Now; }
    return (t.Began <= date && date <= t.Ended)
}

type Event interface {
    Type() string
    Date() Date
    Execute(*Hospital)
}

// Type = [Busy, Idle]
type State struct {
    Status string
    TimeSpan
}

func (s State) Finalize() State {
    s.IsLive = false
    s.Ended = s.TimeLine.Now
    return s
}

type Sim struct {
    State
    History *list.List
}

func (s Sim) SetNextState(status string) {
    s.State = s.State.Finalize()
    //Add the old state to the History
    s.History.PushFront(s.State)
    s.State = State{status, TimeSpan{Began: s.State.Ended, Ended: s.State.Ended, TimeLine: s.TimeLine}}
}

type Staff struct {
    Sim
    PatientsProcessed uint
}

type Nurse Staff
type Doctor Staff

func (n Nurse) Proccess(p Patient) Event {
    //TODO
    return nil;
}

func (d Doctor) Proccess(p Patient) Event {
    //TODO
    return nil;
}

type Patient struct {
    Sim
    Hospital *Hospital
    ProcessingTime float64
    Priority int
}

//
type PatientArrives Date
const PatientArrivesEvent = "PatientArrives"
func (e PatientArrives) Type() string { return PatientArrivesEvent; }
func (e PatientArrives) String() string {
    return fmt.Sprintf("Event: %v \t\t\t%s",float64(e),e.Type())
}
func (e PatientArrives) Date() Date { return Date(e); }
func (e PatientArrives) Execute(h *Hospital) {
    p := NewPatient(Date(e), h)
    h.WaitingRoom.AddPatient(p)
    h.Patients = append(h.Patients, p)
}

//
type NurseFreed struct {
    Nurse *Nurse
    Patient *Patient
    date Date
}
const NurseFreedEvent = "NurseFreed"
func (e NurseFreed) Type() string { return NurseFreedEvent; }
func (e NurseFreed) Date() Date { return e.date; }
func (e NurseFreed) Execute(h *Hospital) {}

//
type DoctorFreed struct {
    date Date
    Patient *Patient
    Doctor *Doctor
}
const DoctorFreedEvent = "DoctorFreed"
func (e DoctorFreed) Type() string { return DoctorFreedEvent; }
func (e DoctorFreed) Date() Date { return e.date; }

//var events [...]string = ["Patient_Arrives", "Nurse_Idle", "Nurse_Process", "Doctor_Process", "Patient_Processed"]

func NewPatient(arrivalDate Date, hospital *Hospital) *Patient {
    p := &Patient{ Sim{ State{"Arriving", TimeSpan{ Began: arrivalDate, TimeLine: hospital.TimeLine}}, list.New()}, hospital, rand.Float64() * 60 + 1, rand.Intn(NUM_PRIORITIES)}
    return p
}

func (p Patient) String() string {
    return fmt.Sprintf("Patient {\n\tProcessingTime:%f\n\tPriority:%d\n}", p.ProcessingTime, p.Priority)
}

type TimeLine struct {
    Event *EventNode
    History *list.List
    Now Date
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
    Defer chan Event
    DeferFull chan bool
    finalizeValue chan chan Event
    value Event
    get func(*EventNode) Event
    set func(*EventNode, Event)
}

func (n *EventNode) Get() Event {
    return n.get(n)
}

func (n *EventNode) makeNext(e Event) {
    select {
        case n.next = <-FreeList:
            n.next.Id = n.Id + 1
            go n.next.Listen()
            n.next.Defer <- e
        default:
            // Create a new One???
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
    e.wipeClean()
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
    e.Defer = make(chan Event, DeferMax)
    e.DeferFull = make(chan bool, 1)
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
    case n.next.Defer <- e:
    default:
        // Hey... Hey... Hey Listen, n.next get your shit together
        select {
        case n.next.DeferFull <- true:
        default:
            // Need this to log wait times
            go func() { n.next.Defer <- e; }()
        }
    }
}

// I don't new if this is needed at all
func (n *EventNode) setAndCheckFull(e Event) {
    n.set(n, e)
    select {
    case imFull := <-n.DeferFull:
        if imFull {}
        select {
        case e := <-n.Defer:
            n.set(n, e)
        default:
            // Currently the previous node doesn't listen for this
            //n.DeferFull <- false
        }
    default:
    }
}

func (n *EventNode) Listen() {
    valueCh := make(chan Event)
    for {
        select {
        case e := <-n.Defer:
            n.set(n, e)
        case imFull := <-n.DeferFull:
            if imFull {}
            // Drain n.Defer
        case n.finalizeValue <- valueCh:
            // Value only ever gets check once
            for {
                select {
                case e := <-n.Defer:
                    n.set(n, e)
                default:
                    // This Go Routine's purpose has been completed
                    valueCh <- n.value
                    //n.free()
                    return
                }
            }
        }
    }
}

func (tl *TimeLine) ExecuteNextEvent(h *Hospital) {
    e := tl.Event.Get()
    e.Execute(h)
}

func (tl *TimeLine) TickForward() {
    tl.History.PushBack(tl.Event.Get())
    lastEvent := tl.Event
    defer lastEvent.free()
    tl.Event = tl.Event.next
}

func (tl *TimeLine) PeekNextEvent() Event {
    if tl.Event.next != nil {
        return tl.Event.next.Get()
    }
    return nil
}

func (tl *TimeLine) PushFutureEvent(futureEvent Event) {
    tl.Event.Defer <- futureEvent
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

func (w *WaitingRoom) AddPatient(p *Patient) {
    w.q[p.Priority].PushBack(p)
}

func (w *WaitingRoom) NextWaitingPatient(date Date) (nextWaiting *Patient) {
    for i := NUM_PRIORITIES; i >= 0; i-- {
        if w.q[i].Len() > 0 {
            ele := w.q[i].Front()
            p := ele.Value.(*Patient)
            if p.Status == "WaitingForNurse" {
                if p.DateOccursDuring(date) {
                    w.q[i].Remove(ele)
                    if nextWaiting != nil {
                        w.q[i].PushFront(nextWaiting)
                    }
                    nextWaiting = p
                }
            }
        }
    }
    return
}

type Hospital struct {
    Patients []*Patient
    Nurses []*Nurse
    Doctors []*Doctor
    WaitingRoom *WaitingRoom
    TimeLine *TimeLine
}

func NewHospital(spawnTime float64, nurses, doctors int) *Hospital {
    span := TimeSpan{0, 10*60, false, nil}
    totalPatients := int(math.Floor(float64(span.Ended)/spawnTime))
    h := &Hospital{make([]*Patient, 0, totalPatients), make([]*Nurse, 0, nurses), make([]*Doctor, 0, doctors), NewWaitingRoom(), &TimeLine{Event: newEventNode(false), History: list.New()}}

    for i := 0; i < totalPatients; i++ {
        h.TimeLine.Event.Defer <- PatientArrives(float64(i)*spawnTime)
    }
    return h
}

func (h *Hospital) String() string {
    return fmt.Sprintf("\"Hospital\" : {\n\t\"Patients\":%d,\n\t\"Nurses\":%d,\n\t\"Doctors\":%d\n\t \"Events\":%v\n}", len(h.Patients), len(h.Nurses), len(h.Doctors), h.TimeLine.Event)
}

func (h *Hospital) ExecuteNextEvent() {
    h.TimeLine.ExecuteNextEvent(h)
}

func (h *Hospital) CheckAndAssignNurse() {
    now := h.TimeLine.Now
    idleNurses := make([]*Nurse, 0, len(h.Nurses))
    for _, nurse := range h.Nurses {
        if nurse.Status == "Idle" {
            idleNurses = append(idleNurses, nurse)
        }
    }
    if len(idleNurses) > 0 {
        nurse := idleNurses[rand.Intn(len(idleNurses))]
        // Nurse Takes the Patient and generates the Lazy List Event
        //nurse.Sim.State
        if p := h.WaitingRoom.NextWaitingPatient(now); p != nil {
            nurse.SetNextState("Busy")
            p.SetNextState("WithNurse")
            futureEventDate := float64(now) + (p.ProcessingTime*.75)
            h.TimeLine.PushFutureEvent(&NurseFreed{nurse, p, Date(futureEventDate)})
        }
    }
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
    e := newEventNode(false)
    go e.Listen()

    fmt.Println("Generating Events....")

    //go func() {
    for i := 0; i < 20; i++ {
        temp := PatientArrives(rand.Float64() * 10000)
        fmt.Println(temp)
        e.Defer <- temp
    }

    fmt.Println("Done")
    //}()
    val := e.get(e)
    fmt.Println(val)
    for  ;e.next != nil; e = e.next {
        val := e.get(e)
        fmt.Println(val)
    }
    //h := NewHospital(10, 1, 1)
}

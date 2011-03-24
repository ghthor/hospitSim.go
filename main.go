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
    Type string
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

func (s Sim) SetNextState(state State) {
    //Add the old state to the History
    s.History.PushFront(s.State.Finalize())
    s.State = state
}

type Staff struct {
    Sim
    PatientsProcessed uint
}

type Nurse Staff
type Doctor Staff

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
func (e PatientArrives) Date() Date { return Date(e); }
func (e PatientArrives) Execute(h *Hospital) {
    p := NewPatient(Date(e), h)
    h.WaitingRoom.AddPatient(p)
    h.Patients[len(h.Patients)] = p
}

//
type NurseFreed struct {
    date Date
    Patient *Patient
    Nurse *Nurse
}
const NurseFreedEvent = "NurseFreed"
func (e NurseFreed) Type() string { return NurseFreedEvent; }
func (e NurseFreed) Date() Date { return e.date; }

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
    p := &Patient{ Sim{ State{"Arriving", TimeSpan{ Began: arrivalDate}}, list.New()}, hospital, rand.Float64() * 60 + 1, rand.Intn(NUM_PRIORITIES)}
    return p
}

func (p Patient) String() string {
    return fmt.Sprintf("Patient {\n\tProcessingTime:%f\n\tPriority:%d\n}", p.ProcessingTime, p.Priority)
}

type TimeLine struct {
    Events *list.List
    Now Date
}

func (tl *TimeLine) ExecuteNextEvent() {
    e := tl.Events.Front().Value.(Event)
    tl.Now = e.Date()
}

func (tl *TimeLine) PeekNextEvent() *Event {
    return nil
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

func (w *WaitingRoom) HasAvailablePatient(date Date) bool {
    return false
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
    h := &Hospital{make([]*Patient, totalPatients), make([]*Nurse, nurses), make([]*Doctor, doctors), NewWaitingRoom(), &TimeLine{Events: list.New()}}

    for i := 0; i < totalPatients; i++ {
        h.TimeLine.Events.PushBack(PatientArrives(float64(i)*spawnTime))
    }
    return h
}

func (h *Hospital) String() string {
    return fmt.Sprintf("\"Hospital\" : {\n\t\"Patients\":%d,\n\t\"Nurses\":%d,\n\t\"Doctors\":%d\n\t \"Events\":%v\n}", len(h.Patients), len(h.Nurses), len(h.Doctors), h.TimeLine.Events)
}

func (h *Hospital) ExecuteNextEvent() {
    h.TimeLine.ExecuteNextEvent()
}

func (h *Hospital) CheckAndAssignNurse() {
    if h.WaitingRoom.HasAvailablePatient(h.TimeLine.Now) {
    }
    idleNurses := make([]*Nurse, 0, len(h.Nurses))
    for _, nurse := range h.Nurses {
        if nurse.Type == "Idle" {
            idleNurses = append(idleNurses, nurse)
        }
    }
    if len(idleNurses) > 0 {
        //nurse := idleNurses[rand.Intn(len(idleNurses))]
        // Nurse Takes the Patient and generates the Lazy List Event
        //nurse.Sim.State
    }
}

func init() {
}

func main() {
    h := NewHospital(10, 1, 1)
    fmt.Println(h)
}

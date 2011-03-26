package main

import (
    "os"
    "template"
    "bytes"
    "fmt"
)

var PatientsTable *template.Template
var PatientsPage *template.Template

type PatientsOutput struct {
    Patients []string
    WaitingForDoctor []float64
    WithDoctor []float64
    WaitingForNurse []float64
    WithNurse []float64
}

func loadTemplates() (err os.Error) {
    PatientsTable, err = template.ParseFile("assets/patients.tpl", nil)
    if err != nil { fmt.Println("ERROR: Loading patients.tpl", err); return err}
    fmt.Println("LOG: patients.tpl Loaded")

    PatientsPage, err = template.ParseFile("assets/page.tpl", nil)
    if err != nil { fmt.Println("ERROR: Loading page.tpl", err); return err}
    fmt.Println("LOG: page.tpl Loaded")
    return nil
}

type Table struct {
    Table string
}

func compilePage(patients []*Patient) string {

    fmt.Println("LOG: Totaling the Patients Information")
    cdata := make([](map[string]float64), len(patients))
    for i := 0; i < len(patients); i++ {
        cdata[i] = patients[i].TotalUp()
    }

    fmt.Println("LOG: Coupling Data for the Template")
    n := len(cdata)
    tplData := &PatientsOutput{make([]string, n), make([]float64, n), make([]float64, n), make([]float64, n), make([]float64, n)}
    for i := 0; i < len(cdata); i++ {
        tplData.Patients[i] = fmt.Sprintf("P:%d",i)
        tplData.WaitingForDoctor[i] = cdata[i]["WaitingForDoctor"]
        tplData.WithDoctor[i] = cdata[i]["WithDoctor"]
        tplData.WaitingForNurse[i] = cdata[i]["WaitingForNurse"]
        tplData.WithNurse[i] = cdata[i]["WithNurse"]
    }

    fmt.Println("LOG: Executing the Table Template")
    b := bytes.NewBuffer(make([]uint8,0,4096))
    err := PatientsTable.Execute(b, tplData)
    if err != nil { fmt.Println("ERROR: Applying PatientsTable template", err); return ""; }


    fmt.Println("LOG: Executing the Page")
    Table := map[string]string { "Table": b.String() }
    b = bytes.NewBuffer(make([]uint8,0,4096))
    err = PatientsPage.Execute(b, Table)
    if err != nil { fmt.Println("ERROR: Applying PatientsPage template", err); return ""; }

    return b.String()
}


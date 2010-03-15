


package main

import (
	"fmt"
)

// Define a Simple interface
type RectPrism interface {
	Volume() float
	//SurfaceArea() float
}

// Contains the Fields for defining a Rectangular Prism in 3d space
type RectPrismStruct struct {
	l, w, h float
}

// RectPrismStruct implements the interface RectPrism
func (this *RectPrismStruct) Volume() float{
	return(this.l * this.w * this.h)
}

// This Class is going to inherit the Volume function
// From RectPrismStruct
type CardboardBox struct {
	// Anonymous Field that aggregates the RectPrismStruct
	// into our CardboardBox
	RectPrismStruct
	isSoggy bool
}

func main() {

	cbox := new(CardboardBox)
	cbox.l = 2
	cbox.w = 4
	cbox.h = 2
	cbox.isSoggy = true

	// CardboardBox implements the RectPrism interface
	// through the anonymous field RectPrismStruct
	// This Aggregates the RectPrismStruct into CardboardBox
	var rprism RectPrism = cbox
	//rprism = cbox
	fmt.Printf("Volume: %f\n", rprism.Volume())
}

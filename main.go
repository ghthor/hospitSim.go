package main

import (
	"fmt"
	"flag"
)

func init() {
}

func main() {

	// Flag Parsing
	flag1 := flag.String("s", "tacos", "Temp Flag")
	flag.Parse()

	fmt.Printf("\n\n");
	fmt.Println("flag1", *flag1)
	fmt.Printf("\n\n");
}

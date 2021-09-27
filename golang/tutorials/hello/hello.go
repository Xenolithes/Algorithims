package main

// a package is a way to group functions and it is made up all the files in the same directory

import (
	"fmt"

	"rsc.io/quote"
) // A package functions for formatting text

func main() {
	// fmt.Println("Hello, World!")
	fmt.Println(quote.Go())
}

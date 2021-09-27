package main

import "fmt"

// A struct is a collection of fields.
type Vertex struct {
	X int
	Y int
}

//Struct Fields are accessed using a dot.
func accessFields(input Vertex) {
	fmt.Println(input.X)
	fmt.Println(input.Y)
}

// Struct fields can also be accessed using a pointer.
func accessFieldsPointer(input *Vertex) {
	input.X = 800
	fmt.Println(input.X)
}

func showSubset() {
	vertOne := Vertex{6, 8}
	vertTwo := Vertex{X: 77}
	vertThree := Vertex{}
	vertFour := &Vertex{5, 7}
	fmt.Println(vertOne, vertTwo, vertThree, vertFour)

}

func main() {
	vert := Vertex{1, 2}
	accessFields(vert)
	input := &vert
	accessFieldsPointer(input)
	fmt.Println(vert.X)
	showSubset()
}

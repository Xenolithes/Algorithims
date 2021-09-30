package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

//Go does not have classes, but you can define methods on types.
// A method is a function with a special receiver argument.
// The receiver appears in its own argument list between the func keyword and the method name.
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

// Methods are still functions as proven here
func Absolute(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

//You can declare a method on non-struct types as well.
type Integers int

func (i Integers) Double() int {
	return int(2 * i)
}

// Pointer and Receivers for Methods
// You can declare methods with pointer receivers
// This means the receiver type has the literal syntax *T for some type T
// (Also, T cannot itself be a pointer such as *int)
// Methods with pointer receivers can modify the value to which the receiver points
// Since methods often need to modify their receiver, pointer receivers are more common than value receivers.

type Address struct {
	Street, City string
}

func (a *Address) changeCity(newCity string) {
	a.City = newCity
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
	fmt.Println(Absolute(v))
	z := Integers(5)
	fmt.Println(z.Double())
	addr := Address{"111 Smith Street", "Boston"}
	fmt.Println(addr)
	addr.changeCity("New York")
	fmt.Println(addr)

}

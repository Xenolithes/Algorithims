package main

import "fmt"

// The type [n]T is an array of n values of type T.
var a = [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
var b = [2]string{"There be", "Goblins round here"}

// Declares a variable a as an array of 10 integers.
// Arrays cannot be resized once declared.

// A slice s formed by the expression [low:high]
func getASlice(input *[10]int) []int {
	var s []int = input[1:5]
	return s
}

func changeUnderlyingArray(input *[]int) {
	toChange := *input
	toChange[0] = 100
	fmt.Println(a)
}

//Slice Literals
// A slice literal is like an array literal without the length.
var sl = [5]int{1, 2, 3, 4, 5}

//This creates the same array as above, but then builds a slice to reference it.
var sl2 = []int{1, 2, 3, 4, 5}

func checkSliceLiterals() {
	// A slice literal is like an array literal without the length.
	fmt.Println(sl)
	fmt.Println(sl2)
}

// Slice Defaults
// Left is the starting index, right is the ending index.
func sliceDefaults() {
	fmt.Println("Slice Defaults, these are all the same")
	fmt.Println(a[0:10])
	fmt.Println(a[:10])
	fmt.Println(a[0:])
	fmt.Println(a[:])
}

// A slice has bot a length and capcity
// The length is the number of elements it contains.
// The capacity is the number of elements in the underlying array.

func sliceLengthAndCapacity() {
	fmt.Println("Slice Length and Capacity")
	slc := a[2:5]
	fmt.Println(len(slc))
	fmt.Println(cap(slc))
}

// Nil Slices
// A nil slice has a length and capacity of 0 and has no underlying array.
func nilSlice() {
	var s []int
	fmt.Println(s, len(s), cap(s))
	if s == nil {
		fmt.Println("Nil slice")
	}
}

//Creating slices with make
// Slices cna be created with built-in make function; This is how one creates dynamically-sized arrays.
func makeSlice() {
	onlyLength := make([]int, 5)
	fmt.Println(onlyLength, len(onlyLength), cap(onlyLength))
	withCapacity := make([]int, 5, 10)
	fmt.Println(withCapacity, len(withCapacity), cap(withCapacity))
}

//Slices can contain other slices.
func slicesOfSlices() {
	fmt.Println("Slices of Slices")
	twoD := make([][]int, 3)
	for i := 0; i < 3; i++ {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d:", twoD)
}

//Appending to slices
// The built-in append function appends elements to a slice.
// The return value is a slice containing all the elements of the original slice plus the new elements.
func appendToSlice() {
	var s []int
	s = append(s, 0)
	fmt.Println(s, len(s), cap(s))
	s = append(s, 1)
	fmt.Println(s, len(s), cap(s))
	s = append(s, 2, 3, 4)
	fmt.Println(s, len(s), cap(s))
}

func main() {
	fmt.Println(b[0], b[1])
	//Slices are like references to arrays.
	c := getASlice(&a)
	fmt.Println(c)
	// By changing the value of a slice it will change the value of the underlying array.
	changeUnderlyingArray(&c)
	sliceDefaults()
	checkSliceLiterals()
	sliceLengthAndCapacity()
	nilSlice()
	makeSlice()
	slicesOfSlices()
	appendToSlice()
}

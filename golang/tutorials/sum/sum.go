package main

import "fmt"

func sum(x int, y int) int {
	return x + y
}

func short_sum(x, y int) int {
	return x + y
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

var x = 10

func read_x() {
	fmt.Println(x)
}

// Var statements can be declared at a package or function level
// If a var statement is named again at a funciton level it will overwrite the previous value
// However it will not change the value at the package context level

// If an initializer value is present you don't have to specific the type
// Inside of a func you can use the short hand assignment state which is :=
// However outside fo the function you have to specify the type
func main() {
	read_x()
	var x = 30
	read_x()
	var y int = 20
	fmt.Println("Sum of two numbers", sum(x, y))
	fmt.Println("Sum of two numbers", short_sum(x, y))
	fmt.Println(split(50))
}

// Variable Types

// Numbers
// int numsbers that are numbers without a decimal point
// Signed Integers
// int8, int16, int32, int64
// Unsigned Integers -- Only positive numbers
// uint8, uint16, uint32, uint64
// Two alias types
// byte which is an alias for uint8
// rune which is an alias for int32

// In general you should just use the int type

// Floating Point Numbers
// float32, float64
// float32 is a 32 bit floating point number
// float64 is a 64 bit floating point number
// Complex Numbers ( numbers with real and imaginary parts)
// complex64, complex128

// In general stick to float64 unless you have a specific reason to use a different type

// Values declared without an explicit literal are given their zero value
// The zero value for a numeric type is 0
// The zero value for a string type is the empty string
// The zero value for a boolean type is false

// To change the type you have to use the type conversion
// The type conversion is done using the built in function "type"
// float32(x) converts x to a float32
// float64(x) converts x to a float64
// int(x) converts x to an int
//etc

// Constants
// Constants are declared using the const keyword
// Constants can be character, string, boolean, or numeric values
// Constants cannot be declated using the := syntax

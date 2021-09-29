package main

import "fmt"

func compute(fn func(int) int) int {
	return fn(3)
}

//Function Closures, Go functions may be closures. A closure is a funciton value that
// References  variables from outside its body.
// The function may access and assign to the referenced variables;
//  in this sense ht efunction is bound to the variables.

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

// Function Values, functions can be assigned to variables and passed as arguments
func main() {

	square := func(x int) int {
		return x * x
	}

	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-1*i),
		)
	}

	fmt.Println(compute(square))

}

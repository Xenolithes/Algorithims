package main

import "fmt"

// Show for loop
func printUpTo(x int) {
	for i := 0; i <= x; i++ {
		fmt.Println(i)
	}
}

// Show optional parameters in for loop
func optionalPrintUpTo(x int) {
	y := 0
	// The init and post statements are optional.
	for y <= x {
		fmt.Println(y)
		y++
	}
}

// Show if statement
func showIf(x int) {
	if x > 0 {
		fmt.Println("x is positive")
	} else {
		fmt.Println("x is negative")
	}
}

// Variables declared in scope are only avaliable in that scope.
func showScope() {
	var x int = 10
	if true {
		x := 20
		fmt.Println(x)
	}
	fmt.Println(x)
}

// Variable decared in the if scope can be used in the else statement
func showScopeElse(x int) {
	if v := x > 0; v {
		fmt.Println(v)
	} else {
		fmt.Println(v)
	}
}

//Show the switch statement
//The swith statement in go does not need break like in other languages.
func showSwitch(x int) {
	switch x {
	case -1:
		fmt.Println("x is negative one")
	case 0:
		fmt.Println("x is zero")
	case 1:
		fmt.Println("x is one")
	default:
		fmt.Println("x is unknown")
	}
}

// A conditional switch statement is declared without a variable.
func showConditionalSwitch(x int) {
	switch {
	case x < 0:
		fmt.Println("x is negative")
	case x == 0:
		fmt.Println("x is zero")
	case x > 0:
		fmt.Println("x is positive")
	default:
		fmt.Println("x is unknown")
	}
}

func showDefer() {
	defer fmt.Println("world")
	fmt.Println("hello")
}

// Stacking Defers follow a last in first out order.
func showDeferStack() {
	defer fmt.Println("world")
	defer fmt.Println("hello the second")
}

func main() {
	printUpTo(10)
	optionalPrintUpTo(5)
	showIf(10)
	showIf(-10)
	showScope()
	showScopeElse(10)
	showScopeElse(-10)
	showSwitch(10)
	showSwitch(-1)
	showSwitch(1)
	showSwitch(0)
	showConditionalSwitch(10)
	showConditionalSwitch(-1)
	showConditionalSwitch(0)
	showDefer()
	showDeferStack()
}

package main

import "fmt"

var integers = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

func square(input *[]int) {
	// i is the index, and v is a copy of the value at that index
	for i, v := range *input {
		(*input)[i] = v * v
	}
	fmt.Println(*input)
}

func skipValueAndIndex(input *[]int) {
	for _, v := range *input {
		fmt.Println(v)
	}
	for i, _ := range *input {
		fmt.Println(i)
	}
}

func main() {
	square(&integers)
	skipValueAndIndex(&integers)
}

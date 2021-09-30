package twoNumberSum

import "fmt"

func TwoNumberSum(array []int, target int) []int {
	// Write your code here.
	hash := make(map[int]int)
	for _, num := range array {
		_, ok := hash[num]
		if ok {
			adder := []int{num, target - num}
			fmt.Println(adder)
			return adder
		} else {
			hash[target-num] = num
		}
	}
	var output = []int{}
	return output
}

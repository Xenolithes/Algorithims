package sortedSquaredArray

import "sort"

func SortedSquaredArray(array []int) []int {
	for index, value := range array {
		array[index] = value * value
	}
	sort.Ints(array)
	return array
}

//With negatives the problem becomes more difficult to achieve in O(n) time
//Having to do another sort at the end of the algo would introduce another linear loop
//Turning the solution into 2O(n)

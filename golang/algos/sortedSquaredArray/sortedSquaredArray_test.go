package sortedSquaredArray

import (
	"testing"
)

func TestSortedSquaredArray(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5}
	want := []int{1, 4, 9, 16, 25}
	output := SortedSquaredArray(arr)
	for index, value := range output {
		if want[index] != value {
			t.Fatalf("Was looking for %v at index %v", want[index], index)
		}
	}
}
func TestSortedSquaredArrayWithNegatives(t *testing.T) {
	arr := []int{-3, -2, -1}
	want := []int{1, 4, 9}
	output := SortedSquaredArray(arr)
	for index, value := range output {
		if want[index] != value {
			t.Fatalf("Was looking for %v at index %v", want[index], index)
		}
	}
}

package twoNumberSum

import (
	"fmt"
	"testing"
)

func TestTwoNumberSum(t *testing.T) {
	arr := []int{3, 5, -4, 8, 11, 1, -1, 6}
	want := []int{-1, 11}
	value := TwoNumberSum(arr, 10)
	fmt.Println(want[0], value[0])
	il := want[0] != value[0] && want[1] != value[1]
	ir := want[0] != value[1] && want[1] != value[0]
	fmt.Println(il, ir)
	if il && ir {
		t.Fatalf("Was looking for %v", want)
	}
}

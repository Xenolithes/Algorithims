package isValidSubsequence

import (
	"testing"
)

func TestIsValidSubsequence(t *testing.T) {
	arr := []int{5, 1, 22, 25, 6, -1, 8, 10}
	swq := []int{1, 6, -1, 10}
	value := IsValidSubsequence(arr, swq)
	answer := true
	if value != answer {
		t.Fatalf("Was looking for true")
	}
}

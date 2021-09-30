package isValidSubsequence

func IsValidSubsequence(array []int, sequence []int) bool {
	si := 0
	sl := len(sequence)
	for i := 0; i < len(array); i++ {
		if array[i] == sequence[si] {
			si++
			if si == sl {
				return true
			}
		}
	}
	return false
}

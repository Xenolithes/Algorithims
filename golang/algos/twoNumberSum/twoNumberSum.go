package twoNumberSum

func TwoNumberSum(array []int, target int) []int {
	// Write your code here.
	hash := make(map[int]int)
	for _, num := range array {
		_, ok := hash[num]
		if ok {
			tuple := []int{num, target - num}
			return tuple
		} else {
			hash[target-num] = num
		}
	}
	var output = []int{}
	return output
}

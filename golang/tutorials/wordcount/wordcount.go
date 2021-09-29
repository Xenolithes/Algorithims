package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	var words = map[string]int{}
	ss := strings.Split(s, " ")
	for _, v := range ss {
		_, ok := words[v]
		if ok {
			key := string(v)
			words[key]++
		} else {
			key := string(v)
			words[key] = 1
		}
	}
	return words
}

func main() {
	wc.Test(WordCount)
}

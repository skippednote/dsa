package main

import "fmt"

// solution1
func isValidSubsequence1(array []int, sequence []int) bool {
	arrIdx := 0
	seqIdx := 0
	for arrIdx < len(array) && seqIdx < len(sequence) {
		if array[arrIdx] == sequence[seqIdx] {
			seqIdx += 1
		}
		arrIdx += 1
	}
	return seqIdx == len(sequence)
}

// solution2
func isValidSubsequence2(array []int, sequence []int) bool {
	seqIdx := 0
	for _, value := range array {
		if seqIdx == len(sequence) {
			break
		}
		if value == sequence[seqIdx] {
			seqIdx += 1
		}
	}
	return seqIdx == len(sequence)
}

func main() {
	result1 := isValidSubsequence1([]int{3, 5, 6, 2, 3, 5, 6, 7, 8}, []int{6, 3, 7})
	result2 := isValidSubsequence2([]int{3, 5, 6, 2, 3, 5, 6, 7, 8}, []int{6, 3, 7})
	fmt.Println(result1, result2)
}

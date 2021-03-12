package main

import (
	"fmt"
	"math"
	"sort"
)

func sortedSquaredArray1(array []int) []int {
	sortedSquares := make([]int, len(array))

	for idx, value := range array {
		sortedSquares[idx] = value * value
	}
	sort.Ints(sortedSquares)
	return sortedSquares
}

func sortedSquaredArray2(array []int) []int {
	sortedSquares := make([]int, len(array))
	smallerValueIdx := 0
	largerValueIdx := len(array) - 1

	for idx := len(array) - 1; idx >= 0; idx-- {
		smallerValue := array[smallerValueIdx]
		largerValue := array[largerValueIdx]

		if math.Abs(float64(smallerValue)) > math.Abs(float64(largerValue)) {
			sortedSquares[idx] = smallerValue * smallerValue
			smallerValueIdx += 1
		} else {
			sortedSquares[idx] = largerValue * largerValue
			largerValueIdx -= 1
		}
	}

	return sortedSquares
}

func main() {
	result1 := sortedSquaredArray1([]int{1, 5, 6, 7, 8})
	result2 := sortedSquaredArray2([]int{1, 5, 6, 7, 8})
	fmt.Println(result1, result2)
}

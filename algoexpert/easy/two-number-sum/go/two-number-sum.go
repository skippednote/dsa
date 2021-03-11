package main

import (
	"fmt"
	"sort"
)

// solution1
func twoNumberSum1(array []int, targetSum int) []int {
	for i := 0; i < len(array)-1; i++ {
		firstNum := array[i]
		for j := 1; j < len(array); j++ {
			secondNum := array[j]
			if firstNum+secondNum == targetSum {
				return []int{firstNum, secondNum}
			}
		}
	}
	return []int{}
}

func twoNumberSum2(array []int, targetSum int) []int {
	nums := map[int]bool{}
	for _, num := range array {
		potentialMatch := targetSum - num
		if _, found := nums[potentialMatch]; found {
			return []int{potentialMatch, num}
		}
		nums[num] = true
	}
	return []int{}
}

func twoNumberSum3(array []int, targetSum int) []int {
	sort.Ints(array)
	left, right := 0, len(array)-1
	for left < right {
		currentSum := array[left] + array[right]
		if currentSum == targetSum {
			return []int{array[left], array[right]}
		} else if currentSum < targetSum {
			left += 1
		} else if currentSum > targetSum {
			right -= 1
		}
	}
	return []int{}
}

func main() {
	result1 := twoNumberSum1([]int{1, 2, 3, 4, 6, 7, 8, 9, 10}, 10)
	result2 := twoNumberSum2([]int{1, 2, 3, 4, 6, 7, 8, 9, 10}, 10)
	result3 := twoNumberSum3([]int{1, 2, 3, 4, 6, 7, 8, 9, 10}, 10)
	fmt.Println(result1, result2, result3)
}

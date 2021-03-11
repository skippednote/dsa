# solution 1
# Time: O(n^2)
# Space: O(1)
def two_number_sum_sum_1(array, targetSum):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []

# solution 2
# Time: O(n)
# Space: O(n)
def two_number_sum_sum_2(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []

# solution 3
def two_number_sum_sum_3(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
        else:
            return []

result1 = two_number_sum_sum_1([1,2,3,4,5,6,7,8,9,10], 10)
result2 = two_number_sum_sum_2([1,2,3,4,5,6,7,8,9,10], 10)
result3 = two_number_sum_sum_3([1,2,3,4,5,6,7,8,9,10], 10)
print(result1, result2, result3)

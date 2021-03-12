# solution1
# Time: O(nlogn)
# Space: O(n)
def sortedSquaredArray1(array):
    sortedSquares = [0 for _ in array]

    for idx in range(len(array)):
        value = array[idx]
        sortedSquares[idx] = value * value
    sortedSquares.sort()
    return sortedSquares


# solution2
# Time: O(n)
# Space: O(n)
def sortedSquaredArray2(array):
    sortedSquares = [0 for _ in array]
    smallerValueIdx = 0
    largerValueIdx = len(array) - 1

    for idx in reversed(range(len(array))):
        smallerValue = array[smallerValueIdx]
        largerValue = array[largerValueIdx]

        if abs(smallerValue) > abs(largerValue):
            sortedSquares[idx] = smallerValue * smallerValue
            smallerValueIdx += 1
        else:
            sortedSquares[idx] = largerValue * largerValue
            largerValueIdx -= 1

    return sortedSquares


result1 = sortedSquaredArray1([-2, -1])
result2 = sortedSquaredArray2([-2, -1])
print(result1, result2)

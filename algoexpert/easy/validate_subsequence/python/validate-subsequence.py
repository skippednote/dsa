# solution1
# Time: O(n)
# Space: O(1)
def isValidSubsequence1(array, sequence):
    arrayIdx = 0
    seqIdx = 0
    while arrayIdx < len(array) and seqIdx < len(sequence):
        if array[arrayIdx] == sequence[seqIdx]:
            seqIdx += 1
        arrayIdx += 1
    return seqIdx == len(sequence)


# solution2
# Time: O(n)
# Space: O(1)
def isValidSubsequence2(array, sequence):
    seqIdx = 0
    for value in array:
        if seqIdx == len(sequence):
            break
        if sequence[seqIdx] == value:
            seqIdx += 1
    return seqIdx == len(sequence)


result1 = isValidSubsequence1([5, 6, 2, 3, 4], [6, 4])
result2 = isValidSubsequence2([5, 6, 2, 3, 4], [6, 4])
print(result1, result2)

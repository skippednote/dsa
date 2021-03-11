// solution 1
function twoNumberSum1(
  array: number[],
  targetSum: number
): [number, number] | [] {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNumber = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNumber = array[j];
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber];
      }
    }
  }
  return [];
}

// solution2
function twoNumberSum2(
  array: number[],
  targetSum: number
): [number, number] | [] {
  const nums: { [key: number]: true } = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// solution3
function twoNumberSum3(
  array: number[],
  targetSum: number
): [number, number] | [] {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

const result1 = twoNumberSum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
const result2 = twoNumberSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
const result3 = twoNumberSum3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
console.table({ result1, result2, result3 });

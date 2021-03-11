// solution1
function isValidSubsequence1(array: number[], sequence: number[]): boolean {
  let arrayIdx = 0;
  let seqIdx = 0;
  while (arrayIdx < array.length && seqIdx < sequence.length) {
    if (array[arrayIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrayIdx++;
  }
  return seqIdx === sequence.length;
}

// solution2
function isValidSubsequence2(array: number[], sequence: number[]): boolean {
  let seqIdx = 0;
  for (let value of array) {
    if (seqIdx === sequence.length) {
      break;
    }
    if (sequence[seqIdx] === value) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}

const result1 = isValidSubsequence1([4, 5, 2, 3, 4, 6], [5, 4, 6]);
const result2 = isValidSubsequence2([4, 5, 2, 3, 4, 6], [5, 4, 6]);
console.table({ result1, result2 });

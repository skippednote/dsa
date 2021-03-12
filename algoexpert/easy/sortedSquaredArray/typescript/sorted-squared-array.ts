// solution1
function sortedSquaredArray1(array: number[]): number[] {
  const sortedSquares = new Array<number>(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

// solution2
function sortedSquaredArray2(array: number[]): number[] {
  const sortedSquares = new Array<number>(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

const result1 = sortedSquaredArray1([1, 2, 4, 5, 7]);
const result2 = sortedSquaredArray2([9, 2, 4, 5, 7]);
console.table({ result1, result2 });

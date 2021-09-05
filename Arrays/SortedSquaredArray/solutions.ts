// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(nlogn) time | O(n) space - where n is the length of the input array
export function sortedSquaredArray(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);
  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n) time | O(n) space - where n is the length of the input array
export function sortedSquaredArraySecond(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);
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

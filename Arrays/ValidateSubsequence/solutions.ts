// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n) time | O(1) space - where n is the length of the array
export function isValidSubsequence(array: number[], sequence: number[]) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n) time | O(1) space - where n is the length of the array
export function isValidSubsequenceSecond(array: number[], sequence: number[]) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

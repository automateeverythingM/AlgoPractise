// Difficulty:Easy
// Category: Arrays
// Name: Validate Subsequence
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For
// instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4] . Note that a single number in an
// array and the array itself are both valid subsequences of the array.

export function ValidateSubsequence(array: number[], sequence: number[]) {
  let counter = 0;
  for (const number of array) {
    if (number === sequence[counter]) {
      counter++;
      if (counter === sequence.length) break;
    }
  }
  return counter === sequence.length;
}

export function ValidateSubsequenceSecond(array: number[], sequence: number[]) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
}

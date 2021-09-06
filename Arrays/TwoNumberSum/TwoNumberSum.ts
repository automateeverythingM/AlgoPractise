//* Difficulty: easy
// Category: Arrays
//! Name: Two Number Sum
//Text:
//? Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum,
//? the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
//? Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
//? You can assume that there will be at most one pair of numbers summing up to the target sum.

export function twoNumberSum(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    const numOne = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const numTwo = array[j];
      const currentSum = numOne + numTwo;

      if (currentSum === targetSum) return [numOne, numTwo];
    }
  }

  return [];
}

export function twoNumberSumHash(array: number[], targetSum: number) {
  const sums: { [key: number]: boolean } = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const potentialHit = targetSum - num;

    if (potentialHit in sums) {
      return [potentialHit, num];
    }

    sums[num] = true;
  }

  return [];
}

export function twoNumberSumPointers(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (targetSum === currentSum) return [array[left], array[right]];
    else if (currentSum > targetSum) right--;
    else if (currentSum < targetSum) left++;
  }

  return [];
}

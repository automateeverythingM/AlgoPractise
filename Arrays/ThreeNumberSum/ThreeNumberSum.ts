//* Difficulty: Easy
//! Name:  Three Number Sum
//? Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array
//? that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order,
//? and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
//? If no three numbers sum up to the target sum, the function should return an empty array.

type Triplet = [number, number, number] | [];

export function threeNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  const triplet: Triplet[] = [];

  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const leftNum = array[left];
      const rightNum = array[right];
      const currentSum = firstNum + leftNum + rightNum;

      if (currentSum > targetSum) {
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        triplet.push([firstNum, leftNum, rightNum]);
        left++;
        right--;
      }
    }
  }

  return triplet;
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n^2) time | O(1) space
export function twoNumberSum(array: number[], targetSum: number) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n) time | O(n) space
export function twoNumberSumSecond(array: number[], targetSum: number) {
  const nums: { [key: number]: boolean } = {};
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

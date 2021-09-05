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

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(nlog(n)) | O(1) space
export function twoNumberSumThird(array: number[], targetSum: number) {
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

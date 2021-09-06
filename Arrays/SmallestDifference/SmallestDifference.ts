//* Difficulty:Easy
// Category: Array
//! Name: Smallest Difference
//? Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero,
//? and returns an array containing these two numbers, with the number from the first array in the first position.
//? Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is
//? 10, and the absolute difference of -5 and -4 is 1.
//? You can assume that there will only be one pair of numbers with the smallest difference

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let firstPointer = 0;
  let secondPointer = 0;

  let smallestDifference = Infinity;
  let smallestPair: [number, number] | [] = [];

  while (firstPointer < arrayOne.length && secondPointer < arrayTwo.length) {
    let firstNum = arrayOne[firstPointer];
    let secondNum = arrayTwo[secondPointer];

    const currentDiff = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      firstPointer++;
    } else if (secondNum < firstNum) {
      secondPointer++;
    } else {
      return [firstNum, secondNum];
    }

    if (currentDiff < smallestDifference) {
      smallestDifference = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}

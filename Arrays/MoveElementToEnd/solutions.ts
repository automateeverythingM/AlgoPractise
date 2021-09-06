// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n) time | O(1) space - where n is the length of the array
export function moveElementToEnd(array: number[], toMove: number) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}
function swap(i: number, j: number, array: number[]) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

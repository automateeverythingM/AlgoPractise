//? Difficulty: Medium
// Move Element To End
//?You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the
//? array.
//? The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

export function moveElementToEnd(array: number[], toMove: number) {
  let j = array.length - 1;
  for (let i = 0; i < j; i++) {
    const first = array[i];
    while (i < j && array[j] === toMove) j--;
    if (first === toMove) swap(array, i, j);
  }

  return array;
}
function swap(array: number[], indexOne: number, indexTwo: number) {
  const temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}

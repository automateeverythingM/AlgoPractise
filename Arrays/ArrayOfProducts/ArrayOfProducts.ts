//? Difficulty: Medium
//? Array Of Products
//? Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the
//? product of every other number in the input array.
//? In other words, the value at output[i] is equal to the product of every number in the input array other than input[i] .
//? Note that you're expected to solve this problem without using division.

export function arrayOfProducts(array: number[]) {
  const productArray: number[] = [];

  for (let i = 0; i < array.length; i++) {
    let currProduct = 1;
    for (let j = 0; j < array.length; j++) {
      const num = array[j];
      if (i === j) continue;
      currProduct *= num;
    }

    productArray.push(currProduct);
  }

  return productArray;
}

export function arrayOfProductsSecond(array: number[]) {
  const products: number[] = new Array(array.length).fill(1);
  const leftArrayProducts: number[] = new Array(array.length).fill(1);
  const rightArrayProducts: number[] = new Array(array.length).fill(1);

  let leftRunningProducts = 1;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    leftArrayProducts[i] = leftRunningProducts;
    leftRunningProducts *= num;
  }

  let rightRunningProducts = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const num = array[i];
    rightArrayProducts[i] = rightRunningProducts;
    rightRunningProducts *= num;
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = rightArrayProducts[i] * leftArrayProducts[i];
  }

  return products;
}

export function arrayOfProductsThird(array: number[]) {
  let productsArray: number[] = new Array(array.length).fill(1);

  let runningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    productsArray[i] = runningProduct;
    runningProduct *= array[i];
  }

  runningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    productsArray[i] *= runningProduct;
    runningProduct *= array[i];
  }

  return productsArray;
}

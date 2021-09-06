// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n^2) time | O(n) space - where n is the length of the input array
export function arrayOfProducts(array: number[]) {
  const products: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n^2) time | O(n) space - where n is the length of the input array
export function arrayOfProductsSecond(array: number[]) {
  const products: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}

// Copyright © 2021 AlgoExpert LLC. All rights reserved.
// O(n^2) time | O(n) space - where n is the length of the input array
export function arrayOfProductsThird(array: number[]) {
  const products: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  return products;
}

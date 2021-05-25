'use strict';

let insertionSort = require('../insertionSort.js');

describe('Testing insertionSort', () => {
  test('should return the array in place, sorted from lowest to highest value', () => {
    let array = [9,4,23,32,13,12];
    insertionSort(array);
    expect(array).toEqual([4, 9, 12, 13, 23, 32]);
  });
  test('can sort negetive numbers', () => {
    let array = [-9,-4,23,32,13,12];
    insertionSort(array);
    expect(array).toEqual([-9, -4, 12, 13, 23, 32]);
  });
});


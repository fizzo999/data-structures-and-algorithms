'use strict';

const mergeSort = require('../merge-sort.js');

describe('Array test for merge-sort.js', () => {
  it('should return the array in place, sorted from lowest to highest value', () => {
    let array = [9,4,23,32,13,12];
    mergeSort(array);
    console.log(array);
    expect(array).toEqual([4, 9, 12, 13, 23, 32]);
  });
  it('can sort negetive numbers', () => {
    let array = [1,4,23,32,13,-9,12];
    mergeSort(array);
    expect(array).toEqual([-9, 1, 4, 12, 13, 23, 32]);
  });
});

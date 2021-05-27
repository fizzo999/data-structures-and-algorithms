'use strict';

const quickSort = require('../quick-sort.js');

describe('quick sort Array test', () => {
  it('should return the array in place, sorted from lowest to highest value', () => {
    let array = [9,4,23,32,13,12];
    let left = 0;
    let right = array.length - 1;
    quickSort(array, left, right);
    console.log(array);
    expect(array).toEqual([4, 9, 12, 13, 23, 32]);
  });
  it('can sort negetive numbers', () => {
    let array = [-9,4,23,32,13,12];
    let left = 0;
    let right = array.length - 1;
    quickSort(array, left, right);
    console.log(array);
    expect(array).toEqual([-9, 4, 12, 13, 23, 32]);
  });
});

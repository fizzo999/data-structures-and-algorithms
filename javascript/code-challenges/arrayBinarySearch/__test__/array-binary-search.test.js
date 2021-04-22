'use strict';

const binarySearch = require('../array-binary-search.js');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge binarySearch', () => {
  test('It should return the index Number of the searched for Number or -1 if it is not in the Array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
  test('It should return the index Number of the searched for Number or -1 if it is not in the Array', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});

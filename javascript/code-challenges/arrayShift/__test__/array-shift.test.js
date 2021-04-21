'use strict';

const insertShiftArray = require('../../../../code-challenges/arrayShift/array-shift.js');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge insertShiftArray', () => {
  test('It should return an array with 1 number added in the middle of the original array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });
  test('It should return an array with 1 number added in the middle of the original array', () => {
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});

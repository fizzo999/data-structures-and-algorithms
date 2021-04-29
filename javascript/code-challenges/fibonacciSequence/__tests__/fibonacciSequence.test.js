'use strict';

const fibonacciSequence = require('../fibonacciSequence.js');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge fibonacciSequence', () => {
  test('It should return the number 377 at position 14', () => {
    expect(fibonacciSequence(14)).toStrictEqual(377);
  });
  test('It should return the number 1134903170 at position 45', () => {
    expect(fibonacciSequence(45)).toStrictEqual(1134903170);
  });
});

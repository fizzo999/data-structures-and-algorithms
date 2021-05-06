'use strict';

let multiBracketValidation = require('../multi-bracket-validation.js');

describe('Testing multiBracketValidation', () => {
  test('It should return true', () => {
    expect(multiBracketValidation('({[test string](test [string])})')).toBe(true);
  });
  test('It should return false', () => {
    expect(multiBracketValidation('{()}]')).toBe(false);
  });
  test('It should return null', () => {
    expect(multiBracketValidation('')).toBe(null);
  });
});


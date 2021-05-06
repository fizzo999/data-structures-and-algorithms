'use strict';

function multiBracketValidation(input) {

  if (!input || !input.length) return null;

  var openingBR = ['(', '[', '{'];
  var closingBR = [')', ']', '}'];

  var stack = [];
  var lastIdx;
  for (let i=0; i < input.length; i++) {
    var openIdx = openingBR.indexOf(input[i]);
    var closingIdx = closingBR.indexOf(input[i]);
    console.log('===========', openIdx, closingIdx);

    if (openIdx > -1) {
      stack.push(openIdx)
    } else if (closingIdx > -1) {
      if(stack.length === 0) return false;
      lastIdx = stack.pop();
      if(lastIdx !== closingIdx) return false;
    }
  }
  if(stack.length !== 0) return false;
  return true;
}

module.exports = multiBracketValidation;

// console.log(multiBracketValidation('({[test string](test [string])})'));
// console.log(multiBracketValidation('{()}]'));
// console.log(multiBracketValidation(''));

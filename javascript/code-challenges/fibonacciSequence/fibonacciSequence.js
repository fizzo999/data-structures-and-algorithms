'use strict';

function fibonacciSequence(number) {
  if (number < 0 || !number || number === null) {
    return 'invalid input'
  } else {
  let arr = [0,1];
  for (let i=2; i< 100; i++){
  arr.push(arr[i-1]+arr[i-2]);
  }
  console.log(arr);
  return arr[number];
  }
}
// fibonacciSequence(99);

module.exports = fibonacciSequence;

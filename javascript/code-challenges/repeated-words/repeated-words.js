'use strict';

const findRepeatingWords = (inputString) =>{
  if(!inputString) return null;
  let newString = inputString.replace(/(,)+|(!)+|(-)+|(\.)|(\?)/g, '');
  let newArr = newString.toLowerCase().split(' ');
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (newArr[i] === result[j]) {
        return `${newArr[i]} is the first repeated word`;
      }
    }
    result.push(newArr[i]);
  }
  return 'no repeating words';
};

module.exports = findRepeatingWords;

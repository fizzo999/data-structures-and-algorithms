'use strict';

const binarySearch = (sortedArr, searchKey) => {
  //define start and end index for the search

  let startIdx = 0;
  let endIdx = sortedArr.length-1;

  while(startIdx <= endIdx) {

    let middleIdx = Math.floor((startIdx + endIdx) / 2);

    if(searchKey === sortedArr[middleIdx]) {
      console.log(`Searched for Number was located as the ${middleIdx + 1} number in the Array`);
      return middleIdx;
    }

    if(searchKey > sortedArr[middleIdx]) {
      startIdx = middleIdx + 1;
    }

    if(searchKey < sortedArr[middleIdx]) {
      endIdx = middleIdx - 1;
    }
  }

  console.log('searched for Number is not included in the Array');
  return -1;

}

module.exports = binarySearch;

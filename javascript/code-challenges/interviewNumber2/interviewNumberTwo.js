'use strict';

let DuckDuckGoose = (arr, k) => {
  let targetIndex = k;
  let leftOver;
  let times;
  console.log(arr);
  // while(arr.length > 1) {
  for(let j=arr.length; j > 1 ; j--) {
  console.log('inside the while loop', arr)
  times = Math.floor(arr.length / k)
  leftOver = (arr.length % k)
  console.log('=====times, leftOver======' ,times, leftOver)
  for (let i = 1; i <= times; i++) {
    arr.splice(((targetIndex*i)-1 -i +1), 1)
  };
  if (leftOver>0) targetIndex = k - leftOver;
  
  }
  
  return arr[0];
}

console.log('=============================',DuckDuckGoose([1,2,3,4,5,6,7,8,9,10], 3));
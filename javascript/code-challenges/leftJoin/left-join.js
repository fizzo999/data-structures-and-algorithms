'use strict';

const Hashmap = require('../../Data-Structures/hashtable/hashtable.js');

function joinLeft(hashMapA, hashMapB) {
  // let newHashmapArray = new Hashmap(hashMapA.size);
  let newHashmapArray = new Array();

  hashMapA.storage.map(bucket => {
    let key = bucket.head.val[0];
    let left = hashMapA.get(key);
    let right = '';

    if (hashMapB.contains(key)) {
      right = hashMapB.get(key);
    } else {
      right = 'NULL';
    }
    newHashmapArray.push([key, {left, right}]);
    console.log('WE ARE INSIDE OF leftJoin AND THE left IS =====>>>>>', left);
    console.log('WE ARE INSIDE OF leftJoin AND THE right IS =====>>>>>', right);
  });
  console.log('WE ARE INSIDE OF leftJoin AND THE ARRAY IS =====>>>>>', newHashmapArray);
  return newHashmapArray;
}
module.exports = joinLeft;

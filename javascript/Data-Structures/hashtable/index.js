'use strict';

const Hashmap = require('./hashtable.js');

let hashmap = new Hashmap(10);

hashmap.add('fizzo', 'pannosch');
hashmap.add('michelle', 'pannosch');
hashmap.add('dodo', 'pannosch');
hashmap.add('friedrich', 'pannosch');
hashmap.add('brigitte', 'pannosch');
hashmap.add('ernst', 'pannosch');
hashmap.add('karl', 'pannosch');
hashmap.add('sam', 'pannosch');

console.log('getting ...dodo', hashmap.get('dodo'));
console.log('getting ...john', hashmap.get('john'));
console.log(hashmap.contains('michelle'));
console.log(hashmap.contains('fizzo'));
console.log('this is the hash for fizzo', hashmap.hash('fizzo'));
console.log('this is the hash for dodo', hashmap.hash('dodo'));
console.log('this is the hash for michelle', hashmap.hash('michelle'));
// console.log('retrieving the getList method', hashmap[8].getList());

console.log(hashmap);

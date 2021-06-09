'use strict';

const Hashmap = require('../../Data-Structures/hashtable/hashtable.js');
const joinLeft = require('./left-join.js');

let left = new Hashmap(3);

left.add('fond', 'enamored');
left.add('wrath', 'anger');
left.add('diligent', 'employed');
left.add('outfit', 'garb');
left.add('guide', 'usher');


let right = new Hashmap(3);

right.add('fond', 'averse');
right.add('wrath', 'delight');
right.add('diligent', 'idle');
right.add('guide', 'follow');
right.add('flow', 'jam');


console.log('HERE IS OUR TWO NEW HASHMAPS',(left, right));
console.log(joinLeft(left, right));

'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

let pseudo = new PseudoQueue();

pseudo.enqueue(10);
pseudo.enqueue(20);
pseudo.enqueue(30);
pseudo.enqueue(40);
pseudo.enqueue(50);
console.log('this is pseudo with 5 elements', pseudo);
console.log(pseudo.peek());
console.log(pseudo);
pseudo.dequeue();
console.log(pseudo);
pseudo.toString();


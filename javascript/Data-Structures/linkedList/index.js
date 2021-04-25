'use strict';

const LL = require('./linked-list.js');

let ll = new LL();

console.log('empty list', ll);

ll.append(10);
// ll.append(20);
ll.append(30);

console.log('new list', ll);

ll.insert(100);
ll.insert(500);

console.log ('now with includes', ll);

let res = ll.includes(15);


console.log('YAYAYAYAYAYAY', res, ll);

ll.toString();
console.log('YAYAYAYAYAYA===================', ll);
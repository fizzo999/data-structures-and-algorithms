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


ll.insertBefore(10, 99999);
console.log('============ YAY HERE IS THE NEW LIST', ll);

ll.toString();
console.log('YAYAYAYAYAYA===================', ll);

ll.insertAfter(100, 55555);
console.log('============ YAY HERE IS THE NEW LIST', ll);

ll.toString();
console.log('YAYAYAYAYAYA===================', ll);

ll.insertAfter(30, 1010101);
console.log('============ YAY HERE IS THE NEW LIST', ll);

ll.toString();
console.log('YAYAYAYAYAYA===================', ll);

ll.kthFromEnd(5);
ll.toString();
console.log('YAYAYAYAYAYA===================', ll);

ll.kthFromEnd(3);
ll.toString();
console.log('YAYAYAYAYAYA===================', ll);

ll.kthFromEnd(0);
ll.kthFromEnd(-5);
console.log(ll.kthFromEnd(0));
console.log(ll.kthFromEnd(-5));
console.log(ll.kthFromEnd('abc'));


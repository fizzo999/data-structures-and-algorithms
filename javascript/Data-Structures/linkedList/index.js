'use strict';

const LL = require('./linked-list.js');

// const zipList = require('./llZip/ll-zip.js');

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

let ll2 = new LL();

console.log('empty list', ll2);

ll2.append(10);
// ll2.append(20);
ll2.append(30);

console.log('new list', ll2);

ll2.insert(100);
ll2.insert(500);

console.log ('now with includes', ll2);

let res2 = ll2.includes(15);


console.log('YAYAYAYAYAYAY', res2, ll2);


ll2.insertBefore(10, 99999);
console.log('============ YAY HERE IS THE NEW LIST', ll2);

ll2.toString();
console.log('YAYAYAYAYAYA===================', ll2);

ll2.insertAfter(100, 55555);
console.log('============ YAY HERE IS THE NEW LIST', ll2);

ll2.toString();
console.log('YAYAYAYAYAYA===================', ll2);

ll2.insertAfter(30, 1010101);
console.log('============ YAY HERE IS THE NEW LIST', ll2);

ll2.toString();
console.log('YAYAYAYAYAYA===================', ll2);

ll2.kthFromEnd(5);
ll2.toString();
console.log('YAYAYAYAYAYA===================', ll2);

ll2.kthFromEnd(3);
ll2.toString();
console.log('YAYAYAYAYAYA===================', ll2);
ll.toString();
console.log('YAYAYAYAYAYA===================', ll);


function zipList(list1, list2) {
  if(list1.head === null) return list2;
  if(list2.head === null) return list1;

  let newLinkList = new LL;
  let current = list1.head;
  newLinkList.head = current;
  let list1Counter = list1.head;
  let list2Counter = list2.head
  while(list1Counter && list2Counter) {
    list1Counter = list1Counter.next;
    current.next = list2Counter;
    list2Counter = list2Counter.next;
    current = current.next;
    current.next = list1Counter;
    current = current.next;
  }
  return newLinkList;
}




console.log(zipList(ll, ll2).toString());


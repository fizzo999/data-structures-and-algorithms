'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

let AS = new AnimalShelter();

console.log('this is AS', AS);

AS.enqueue({type:'cat', name: '1'});
AS.enqueue({type:'cat', name: '2'});
AS.enqueue({type:'cat', name: '3'});
AS.enqueue({type:'cat', name: '4'});
AS.enqueue({type:'cat', name: '5'});
AS.enqueue({type:'dog', name: '6'});
AS.enqueue({type:'dog', name: '7'});
AS.enqueue({type:'dog', name: '8'});
AS.enqueue({type:'dog', name: '9'});
AS.enqueue({type:'dog', name: '10'});
console.log('this is AS with 5 elements', AS);
console.log('===================now we are peeking=================', AS.peek('cat'));
console.log('===================now we are peeking=================', AS.peek('dog'));
console.log(AS);
AS.dequeue('cat');
console.log(AS);
AS.dequeue('dog');
console.log(AS);
AS.dequeue('cat');
console.log(AS);
AS.dequeue('dog');
console.log(AS);
AS.dequeue('cat');
console.log(AS);
AS.toString();

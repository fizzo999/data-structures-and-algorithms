'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

let AS = new AnimalShelter();

console.log('this is AS', AS);

AS.enqueue({type:'cat'});
AS.enqueue({type:'cat'});
AS.enqueue({type:'cat'});
AS.enqueue({type:'cat'});
AS.enqueue({type:'cat'});
console.log('this is AS with 5 elements', AS);
console.log(AS.peek());
console.log(AS);
AS.dequeue();
console.log(AS);
AS.toString();

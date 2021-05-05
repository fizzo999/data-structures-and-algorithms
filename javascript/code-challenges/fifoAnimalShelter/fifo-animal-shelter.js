'use strict';

const Queue = require('../../Data-Structures/stacksAndQueues/queue.js');

class AnimalShelter {
  constructor(){
    this.cat = new Queue();
    this.dog = new Queue();
  }
  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dog.enqueue(animal);
      return this.dog
    } else if (animal.type === 'cat') {
      this.cat.enqueue(animal);
      return this.cat
    } else {
      console.log('We only take cats and dogs')
      return 'We only take cats and dogs'
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dog.dequeue();
    } else if (pref === 'cat') {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
  peek(pref){
    if (pref === 'dog') {
      return this.dog.peek();
    } else if (pref === 'cat') {
      return this.cat.peek();
    } else {
      return null;
    }
  }
  
  isEmpty(){

  if(this.catstack1.length === 0) return true;
  return false; 
  }

  toString() {
    let solutionCat = ''
    if(this.catstack1.length === 0) {
      console.log('empty queue');
      return null;
    } else {
      let current = this.catstack1;
      // console.log('CURRENT===============Current.next', current);
      let counter = 0;
      while(counter <= this.catstack1.length -1) {        
        solutionCat = solutionCat + `{${current[counter]}} -> `;
        counter++;
      }
      solutionCat = solutionCat + ` NULL`
    }
    console.log('===============CATS==============', solutionCat); 
    return solutionCat;
  }
}
module.exports = AnimalShelter;
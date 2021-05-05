'use strict';

const Queue = require('../../Data-Structures/queueWithStacks/queue-with-stacks.js');

class AnimalShelter {
  constructor(){
    this.catstack1 = new Stack();
    this.catstack2 = new Stack();
    this.dogstack1 = new Stack();
    this.dogstack2 = new Stack();
  }
  enqueue(animal){
    // first check that animal is only cat OR dog
    if(animal.toLowerCase() !== 'dog' &&  animal.toLowerCase() !== 'cat') {
      console.log('Not a cat or a dog - sorry we only take those');
      return null;
    } else if (animal.toLowerCase() === 'dog') {
      while(this.dogstack1.length > 0) {
        this.dogstack2.push(this.dogstack1.pop());
      }
      this.dogstack1.push(value);
      while (this.dogstack2.length > 0) {
        this.dogstack1.push(this.dogstack2.pop());
      }
      return this.dogstack1;
    } else if (animal.toLowerCase() === 'cat') {
      while(this.catstack1.length > 0) {
        this.catstack2.push(this.catstack1.pop());
      }
      this.catstack1.push(value);
      while (this.catstack2.length > 0) {
        this.catstack1.push(this.catstack2.pop());
      }
      return this.catstack1;
    }
  }

  dequeue(pref) {
    if(pref.toLowerCase() !== 'dog' &&  pref.toLowerCase() !== 'cat') {
      console.log('Not a cat or a dog - sorry you need to specify');
      return null;
    } else if (pref.toLowerCase() === 'dog') {
      if(this.dogstack1.length === 0) {
        console.log('Sorry we are out of dogs today. Please leave your name and phone number and we will call you when we get the next dog in.');
        return null;
      }
      let result = this.dogstack1.peek();
      this.dogstack1.pop();
      return result;
    } else if(pref.toLowerCase() === 'cat') {
      if(this.catstack1.length === 0) {
        console.log('Sorry we are out of cats today. Please leave your name and phone number and we will call you when we get the next cat in.');
        return null;
      }
      let result = this.catstack1.peek();
      this.catstack1.pop();
      return result;
    }
  }
  peek(){
    return this.catstack1.peek();
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
'use strict';

const Stack = require('../stacksAndQueues/stack.js');

class PseudoQueue {
  constructor(){
    // this.length = 0;
    // this.next = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    while(this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
    return this.stack1;
  }

  dequeue() {
    if(this.stack1.length === 0) {
      // return 'Queue is EMPTY';
      return null;
    }
    let result = this.stack1.peek();
    this.stack1.pop();
    return result;
  }
  peek(){
    return this.stack1.peek();
  }

  isEmpty(){
    if(this.stack1.length === 0) return true;
    return false;
  }

  toString() {
    let solution = '';
    if(this.stack1.length === 0) {
      console.log('empty queue');
      return null;
    } else {
      let current = this.stack1;
      // console.log('CURRENT===============Current.next', current);
      let counter = 0;
      while(counter <= this.stack1.length -1) {        
        solution = solution + `{${current[counter]}} -> `;
        counter++;
      }
      solution = solution + ` NULL`;
    }
    console.log('=============================', solution);
    return solution;
  }
}
module.exports = PseudoQueue;
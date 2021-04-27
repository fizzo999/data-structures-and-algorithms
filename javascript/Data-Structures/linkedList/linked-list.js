'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let brandNewNode = new Node(value);
    if(!this.head) {
      this.head = brandNewNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = brandNewNode;
    }
    // the whole list
    return this;
  }

  insert(value) {
    let brandNewHeadNode = new Node(value);
    if(!this.head) {
      this.head = brandNewHeadNode;
    } else {
      brandNewHeadNode.next = this.head;
      this.head = brandNewHeadNode;
    }
    return this;
  }

  includes(value) {
    if(!this.head) {
      console.log('empty list');
      return('empty list');
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value) {
          console.log('WE FOUND IT', current);
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

  toString() {
    let solution = ''
    if(!this.head) {
      console.log('empty list');
      return null;
    } else {
      let current = this.head;
      while(current.next) {
        solution = solution + `{${current.value}} -> `;
        current = current.next;
      }
      solution = solution + `{${current.value}} -> NULL`
    }
    console.log('=============================', solution); 
    return solution;
  }

  insertBefore(value, newVal) {
    let brandNewNode = new Node(newVal);
    if(!this.head) {
      console.log('empty list');
      return('empty list');
    } else if(this.head.value === value) {
      brandNewNode.next = this.head;
      this.head = brandNewNode;
      return 'BRAND NEW HEAD NODE CREATED', this;
    } else {
      let current = this.head;
      while(current.next) {
        if(current.next.value === value) {
          console.log('WE FOUND THE ONE BEFORE INSERTION', current);
          brandNewNode.next = current.next;
          current.next = brandNewNode;
          return 'WE INSERTED THE NEW NODE', this;
        }
        current = current.next;
      }
      return 'NO SUCH VALUE FOUND', this;
    }

  }

  insertAfter(value, newVal) {
    let brandNewNode = new Node(newVal);
    if(!this.head) {
      console.log('empty list');
      return('empty list');
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value) {
          console.log('WE FOUND THE ONE WE WANT TO INSERT AFTER', current);
          brandNewNode.next = current.next;
          current.next = brandNewNode;
          return 'WE INSERTED THE NEW NODE after THE VALUE FOUND', this;
        }
        current = current.next;
        if(current.next === null) {
          current.next = brandNewNode;
          return 'WE FOUND THE VALUE AT THE VERY END AND APPENDED THE VALUE', this;
        }
      }
      return 'NO SUCH VALUE FOUND', this;
    }
  }


  // findMiddle() {
   
  //   return this;
  // }
  // reverse() {
   
  //   return this;
  // }
}

module.exports = LinkedList;

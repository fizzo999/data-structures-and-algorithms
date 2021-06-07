'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  // you can see below that the add method takes in a value and creates a new Node. If the head of the linked list is empty (ie empty ll) then set it as the head; otherwise take the head and put it as the next and take the new Node and set it as the new head of the ll. That means we are inserting in the front.

  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if(!this.head) return 'no-list';

    let current = this.head;
    let counter = 1;
    let resultsArr = [];

    while(current) {
      console.log(`\n here is the value of the ll at ${counter}th position in the linkedlist`, current.val);
      resultsArr[counter-1] = current.val;
      current = current.next;
      counter++;
    }

    return resultsArr;
  }
}

class Hashmap {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, curr) => {
      return acc + curr.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val) {
    let hash = this.hash(key);
    let getListResult;

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
      getListResult = this.storage[hash].getList();
      console.log(`\n already an entry at hashmap position ${hash} ====>>>>>`, getListResult);
    }
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      console.log('\n no value for that key !!!');
      return null;
    } else {
      let node = this.storage[hash];
      let thisNode = node.head;
      let result = [];

      while(thisNode) {
        if(thisNode.val[0] === key) {
          result.push(`for the key '${key}' we found ${thisNode.val[0]}: ${thisNode.val[1]}`);
        }
        thisNode = thisNode.next;
      }
      return result.length > 0 ? result : `nothing found for key:${key}`;
    }
  }

  contains(key) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      console.log(`\n empty at position ${hash} and therefore nothing found for ${key}`);
      return false;
    } else {
      let node = this.storage[hash];
      let thisNode = node.head;

      while(thisNode) {
        if (thisNode.val[0] === key) {
          console.log(`\n we found ${thisNode.val[1]} at position ${hash} for the key: ${key}`);
          return true;
        }
        thisNode = thisNode.next;
      }
      console.log(`\n we found nothing for the key: ${key}`);
      return false;
    }
  }
}

module.exports = Hashmap;

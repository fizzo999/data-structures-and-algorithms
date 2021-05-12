'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value){
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } 
    let current = this.root;

    let _addNode = (nodePosition) => {
      if(!current[nodePosition]) {
        current[nodePosition] = newNode;
        return this;
      } 
      current = current[nodePosition];
    };
    while(true) {
      if (value === current.value) {
        return this;
      }
    if(value < current.value) _addNode('left');
    else  _addNode('right');


    // let previous = null;
    // let nodePlaced = false;
    // while(!nodePlaced){
    //   if(!current.left) {
    //     current.left = newNode;
    //     nodePlaced = true;
    //     return this;
    //   } else if (!current.right) {
    //     current.right = newNode;
    //     nodePlaced = true;
    //     return this;
    //   }
    //   previous = current;
    //   if(!current.left.left || !current.left.right) current = current.left;
    //   else if(!current.right.left || !current.right.right) current = current.right;
    // }
    // return this;

    }
    
  }

  contains(value) {
    if(!this.root) {
      console.log('it is empty');
      return null
    }
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value < current.value) current = current.left;
      else if(value > current.value) current = current.right;
      else found = true;
    }
    if (found === false) {
      console.log(`Unable to find ${value} in this tree`);
      return found ;
    }
    return found;
  }

  preOrder(){
    if(!this.root) {
      console.log('tree is empty');
      return null;
    } else {
      let results = [];
  
      let _walk = node => {
        results.push(node.value);
        if (node.left) _walk(node.left);
        if (node.right) _walk(node.right);
      }
      _walk(this.root);
      return results;
    }
  }

  inOrder(){
    if(!this.root) {
      console.log('tree is empty');
      return null;
    } else {
      let results = [];
      let _walk = node => {
        if(node.left) _walk(node.left);
        results.push(node.value);
        if(node.right) _walk(node.right);
      }
      _walk(this.root);
      return results;
    }
  }

  postOrder(){
    if(!this.root) {
      console.log('tree is empty');
      return null;
    } else {
      let results = [];
      let _walk = node => {
        if(node.left) _walk(node.left);
        if(node.right) _walk(node.right);
        results.push(node.value);
      }
      _walk(this.root);
      return results;
    }
  }

  findMaximumValue() {
    if(!this.root) return 'this tree is empty';
    let maxVal = this.root.value;
    let _walk = node => {
      if (node.value > maxVal) maxVal = node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
    return maxVal;
  }

  // Breath Traversal
  breadthFirstTraversal(){
    if (this.root == null) {
      console.log('this tree is empty');
      return 'this tree is empty';
    }
  
    let queue = [];
    queue.push(this.root);
    let result = [];
    console.log('here is just before the while loop', queue);
  
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      result.push(value);
      if (item.left == null && item.right == null) {
        continue
      }
      if (item.left != null) {
        queue.push(item.left);
        console.log('HERE IS ON THE LEFT SIDE', queue);
      }
      if (item.right != null) {
        queue.push(item.right);
        console.log('HERE IS ON THE right SIDE', queue);
      }
    }
    console.log('HERE IS BEFORE THE RETURN SO EMPTY', queue);
    return result;
  }



}

module.exports = BinaryTree;


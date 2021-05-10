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
}

module.exports = BinaryTree;

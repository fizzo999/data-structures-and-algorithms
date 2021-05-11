'use strict';

const BT = require('./binaryTree');
const BST = require('./binarySearchTree');

let binarySearchTree = new BST();
binarySearchTree.addNode(1);
binarySearchTree.addNode(2);
binarySearchTree.addNode(3);
binarySearchTree.addNode(4);
binarySearchTree.addNode(5);
binarySearchTree.addNode(6);
binarySearchTree.addNode(7);
binarySearchTree.addNode(8);
binarySearchTree.addNode(9);
binarySearchTree.addNode(10);
console.log(binarySearchTree.contains(9));
console.log(binarySearchTree.contains(33));
console.log(binarySearchTree.findMaximumValue());

console.log('THIS IS PRE ORDER',binarySearchTree.preOrder());
console.log('THIS IS IN ORDER',binarySearchTree.inOrder());
console.log('THIS IS POST ORDER',binarySearchTree.postOrder());
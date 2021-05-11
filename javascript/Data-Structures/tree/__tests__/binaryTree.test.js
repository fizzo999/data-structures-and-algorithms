'use strict';

const BT = require('../binaryTree.js');
const BST = require('../binarySearchTree.js');

describe('========== Binary Tree ==========', () => {
  it('should create a new Binary Tree', () => {
    let tree = new BT();
    expect(tree.inOrder()).toEqual(null);
  });

  it('should add new nodes to the Binary Tree', () => {
    let tree = new BT();
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.right.value).toEqual(10);
    expect(tree.root.left.value).toEqual(3);
  });

  it('should return proper preOrder, postOrder, and inOrder of the Binary Tree', () => {
    let binaryTree = new BT();
    binaryTree.addNode(1);
    binaryTree.addNode(2);
    binaryTree.addNode(3);
    binaryTree.addNode(4);
    binaryTree.addNode(5);
    binaryTree.addNode(6);
    binaryTree.addNode(7);
    binaryTree.addNode(8);
    binaryTree.addNode(9);
    binaryTree.addNode(10);

    expect(binaryTree.preOrder()).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]);
    expect(binaryTree.inOrder()).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]);
    expect(binaryTree.postOrder()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);

  });

  it('should return true when searching for a valid value in the Binary Tree or false when searching for an invalid value', () => {
    let binaryTree = new BT();
    binaryTree.addNode(1);
    binaryTree.addNode(2);
    binaryTree.addNode(3);
    binaryTree.addNode(4);
    binaryTree.addNode(5);
    binaryTree.addNode(6);
    binaryTree.addNode(7);
    binaryTree.addNode(8);
    binaryTree.addNode(9);
    binaryTree.addNode(10);

    expect(binaryTree.contains(9)).toEqual(true);
    expect(binaryTree.contains(15)).toEqual(false);


  });
});

describe('========== Binary Search Tree ==========', () => {
  it('should create a new Binary Search Tree', () => {
    let tree = new BST();
    expect(tree.postOrder()).toEqual(null);
  });

  it('should add new nodes to the Binary Tree', () => {
    let tree = new BST();
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.right.value).toEqual(10);
    expect(tree.root.left.value).toEqual(3);
  });

  it('should return proper preOrder, postOrder, and inOrder of the Binary Tree', () => {
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

    expect(binarySearchTree.preOrder()).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]);
    expect(binarySearchTree.inOrder()).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10]);
    expect(binarySearchTree.postOrder()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);

  });

  it('should return true when searching for a valid value in the Binary Tree or false when searching for an invalid value', () => {
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

    expect(binarySearchTree.contains(9)).toEqual(true);
    expect(binarySearchTree.contains(99)).toEqual(false);


  });

  it('should return the maximum value when searching for a valid value in the Binary Tree or false when the tree is empty', () => {
    let binarySearchTree = new BST();
    expect(binarySearchTree.findMaximumValue()).toEqual('this tree is empty');
    
    binarySearchTree.addNode(1);
    expect(binarySearchTree.findMaximumValue()).toEqual(1);

    binarySearchTree.addNode(2);
    binarySearchTree.addNode(3);
    binarySearchTree.addNode(4);
    binarySearchTree.addNode(5);
    binarySearchTree.addNode(6);
    binarySearchTree.addNode(7);
    binarySearchTree.addNode(8);
    binarySearchTree.addNode(9);
    binarySearchTree.addNode(10);    
    expect(binarySearchTree.findMaximumValue()).toEqual(10);
  });
});
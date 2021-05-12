'use strict';

const BT = require('./binaryTree');
const BST = require('./binarySearchTree');

let binarySearchTree = new BT();
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
console.log('THIS IS BREADTH FIRST TRAVERSAL', binarySearchTree.breadthFirstTraversal());

// class Tree {
//   constructor(value, left, right) {
//     this.value = value
//     this.left = left
//     this.right = right
//   }
// }

// const breadthFirstTraversal = (tree, callback) => {
//   if (tree == null) {
//     return;
//   }

//   let queue = [tree]
//   console.log('here is just before the while loop', queue);

//   while (queue.length > 0) {
//     let item = queue.shift()
//     let value = item.value
//     callback(value)

//     if (item.left == null && item.right == null) {
//       continue
//     }
//     if (item.left != null) {
//       queue.push(item.left)
//       console.log('HERE IS ON THE LEFT SIDE', queue)
//     }
//     if (item.right != null) {
//       queue.push(item.right)
//       console.log('HERE IS ON THE right SIDE', queue)
//     }
//   }
//   console.log('HERE IS BEFORE THE RETURN SO EMPTY', queue)
//   return queue
// }

// let t = new Tree(1,
//       new Tree(2, null, null), new Tree(3,
//         new Tree(4, null, null), null))

// breadthFirstTraversal(t, console.log);
'use strict';

//Kary trees
class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size); 
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}


function fizzBuzzTree(tree) {
  let newTree = new KaryTree(tree.k);
  newTree.root = new KaryNode(tree.root.value, tree.k);
  console.log('HERE IS THE NEW TREE', newTree);
  let currentOldTree = tree.root;
  let currentNewTree = newTree.root;
  console.log('HERE IS THE CURRENT NODE OF THE NEW TREE', currentNewTree);

  let queueOld = [];
  let queueNew = [];
  let arrayOldTree = [];
  let arrayNewTree = [];

  queueOld.unshift(currentOldTree);
  queueNew.unshift(currentNewTree);


  while (queueOld.length) {

    currentOldTree = queueOld.pop();
    currentNewTree = queueNew.pop();
    arrayOldTree.push(currentOldTree.value);
    console.log('HERE ARE THE VALUES OF THE arrayOldTree IN ORDER OF PROCESSING', arrayOldTree);
    
    if(+currentOldTree.value % 15 === 0){
      currentNewTree.value = 'FizzBuzz';
    } else if(+currentOldTree.value % 5 === 0){
      currentNewTree.value = 'Buzz';
    } else if(+currentOldTree.value % 3 === 0){
      currentNewTree.value = 'Fizz';
    } else {
      currentNewTree.value= currentOldTree.value.toString();
    }
    
    arrayNewTree.push(currentNewTree.value);
    console.log('');
    console.log('============================ arrayNewTree IN ORDER OF PROCESSING', arrayNewTree);

    for (let i = 0; i < currentOldTree.children.length; i++) {
      if (currentOldTree.children[i]) {
        currentNewTree.children[i] = new KaryNode(i, tree.k);
        queueOld.unshift(currentOldTree.children[i]);
        queueNew.unshift(currentNewTree.children[i]);
      }
    }
  }
  return newTree;
}

const kTree = new KaryTree(3);
kTree.root = new KaryNode(5, kTree.k);
kTree.root.children[0] = new KaryNode(1, kTree.k);
kTree.root.children[1] = new KaryNode(2, kTree.k);
kTree.root.children[2] = new KaryNode(15, kTree.k);
kTree.root.children[0].children[0] = new KaryNode(10, kTree.k);

console.log('HERE IS THE TREE =========================>>>>>>>>', fizzBuzzTree(kTree));

// module.exports = { KaryNode: KaryNode, KaryTree: KaryTree, fizzBuzzTree: fizzBuzzTree };
module.exports = { KaryNode, KaryTree, fizzBuzzTree };
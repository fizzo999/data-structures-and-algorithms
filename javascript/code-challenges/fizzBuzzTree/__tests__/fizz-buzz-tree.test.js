'use strict';

const KaryTreeChallengeObject = require('../fizz-buzz-tree.js');

describe('KaryTreeChallengeObjectING THE FIZZBUZZ FUNCTION', () => {
  const tree = new KaryTreeChallengeObject.KaryTree(3);
  tree.root = new KaryTreeChallengeObject.KaryNode(1, tree.k);
  tree.root.children[0] = new KaryTreeChallengeObject.KaryNode(3, tree.k);
  tree.root.children[1] = new KaryTreeChallengeObject.KaryNode(5, tree.k);
  tree.root.children[2] = new KaryTreeChallengeObject.KaryNode(7, tree.k);
  tree.root.children[0].children[0] = new KaryTreeChallengeObject.KaryNode(9, tree.k);
  tree.root.children[0].children[1] = new KaryTreeChallengeObject.KaryNode(11, tree.k);
  tree.root.children[1].children[0] = new KaryTreeChallengeObject.KaryNode(13, tree.k);
  tree.root.children[2].children[0] = new KaryTreeChallengeObject.KaryNode(15, tree.k);
  const fizzBuzzTree = KaryTreeChallengeObject.fizzBuzzTree(tree);

  it ('should change numbers divisible by 3 to Fizz', () => {
    expect(fizzBuzzTree.root.children[0].value).toEqual('Fizz');
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual('Fizz');
  });

  it ('should change numbers divisible by 5 to Buzz', () => {
    expect(fizzBuzzTree.root.children[1].value).toEqual('Buzz');
  });

  it ('should change numbers divisible by 3 and 5 to FizzBuzz', () => {
    expect(fizzBuzzTree.root.children[2].children[0].value).toEqual('FizzBuzz');
  });

  it ('should change numbers not divisible by 3 and 5 into a string', () => {
    expect(fizzBuzzTree.root.value).toEqual('1');
    expect(fizzBuzzTree.root.children[2].value).toEqual('7');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('11');
  });

  it ('should create a new tree and not change the values of the original input tree', () => {
    expect(tree.root.value).toEqual(1);
    expect(tree.root.children[0].value).toEqual(3);
    expect(tree.root.children[0].children[1].value).toEqual(11);
    expect(fizzBuzzTree.root.value).toEqual('1');
    expect(fizzBuzzTree.root.children[0].value).toEqual('Fizz');
    expect(fizzBuzzTree.root.children[0].children[1].value).toEqual('11');
  });

});
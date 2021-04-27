'use strict';

const LL = require('../linked-list.js');

describe('Linked List TESTING', () => {
  it('schould create an empty LinkList on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.append(first);
    expect(list.head.value).toEqual(1);
    list.append(second);
    expect(list.head.next.value).toEqual(2);
    // console.log(list.head.next.value);
  });

  it('should test for inserting a node at the beginning', () => {
    let list = new LL();
    let first = 100;
    let second = 200;
    list.insert(first);
    expect(list.head.value).toEqual(100);
    list.insert(second);
    expect(list.head.value).toEqual(200);
  });

  it('should test if the linked list includes a value', () => {
    let list = new LL();
    list.append(10);
    list.append(30);
    list.insert(100);
    list.insert(500);
    expect(list.includes(10)).toEqual(true);
    expect(list.includes(15)).toEqual(false);
  });

  it('should return empty when calling includes on empty list', () => {
    let list = new LL();
    expect(list.includes(10)).toEqual('empty list');
  })

  it('should test the function to string', () => {
    let list = new LL();
    list.append(10);
    list.append(30);
    list.insert(100);
    list.insert(500);
    expect(list.toString()).toEqual('{500} -> {100} -> {10} -> {30} -> NULL');
  });

  it(`should print a message of null if list is empty`, () => {
    let list = new LL();
    expect(list.toString()).toEqual(null);
  });

  it('should test for inserting a node at the end of a linked list', () => {
    let list = new LL();
    let first = 100;
    let second = 200;
    list.append(first);
    // console.log('==============================', list.head);
    expect(list.head.value).toEqual(100);
    list.append(second);
    expect(list.head.next.value).toEqual(200);
    expect(list.head.next.next).toEqual(null);
  });

  it('should test for inserting a node before a given value somewhere in a linked list', () => {
    let list = new LL();
    let first = 100;
    let second = 200;
    let third = 300;
    let toBeInserted = 999;
    list.append(first);
    list.append(second);
    list.append(third);
    // console.log('==============================', list);
    list.insertBefore(200, toBeInserted);
    expect(list.head.next.value).toEqual(999);
    list.insertBefore(100, toBeInserted);
    expect(list.head.value).toEqual(999);
  });

  it('should test for inserting a node after a given value somewhere in a linked list', () => {
    let list = new LL();
    let first = 100;
    let second = 200;
    let third = 300;
    let toBeInserted = 999;
    list.append(first);
    list.append(second);
    list.append(third);
    list.insertAfter(200, toBeInserted);
    expect(list.head.next.next.value).toEqual(999);
    // console.log('==============================', list);
    list.insertAfter(100, toBeInserted);
    expect(list.head.next.value).toEqual(999);
  });

  it('should return the value kth from the end of a linked list', () => {
    let list = new LL();
    list.append(10);
    list.append(30);
    list.append(1010101);
    list.insert(99999);
    list.insert(55555);
    list.insert(100);
    list.insert(500);
    list.toString();
    expect(list.kthFromEnd(10)).toBe('The link list isn`t that long !!!');
    expect(list.kthFromEnd(7)).toBe('The link list isn`t that long !!!');
    expect(list.kthFromEnd(-5)).toBe('Dude, what are you doing with negative inputs, I mean,.... really?');
    // console.log(list.kthFromEnd(7));
  });

  it('should return the value kth from the end of a linked list', () => {
    let list = new LL();
    expect(list.kthFromEnd(0)).toEqual('The link list is empty');
    expect(list.kthFromEnd('abc')).toEqual('Dude, what are you doing ? this is not a number, I mean,.... really?');
  });


});

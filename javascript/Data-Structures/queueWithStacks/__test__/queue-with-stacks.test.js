'use strict'

const PseudoQueue = require('../queue-with-stacks')

describe("QUEUE WITH STACKS",()=>{
    it('Should properly enqueue values',()=>{
        let queue = new PseudoQueue();
        queue.enqueue(100);
        expect(queue.stack1.length).toEqual(1);
    })

    it('Should properly enqueue multiple values',()=>{
        let queue = new PseudoQueue();
        queue.enqueue(100);
        queue.enqueue(200);
        queue.enqueue(300);
        queue.enqueue(999);
        expect(queue.stack1.length).toEqual(4);
        // expect(testQueue[queue.stack1.length]).toEqual(999);
    })

    it('Should throw an error for dequeueing a empty stack',()=>{
        let q = new PseudoQueue();
        expect(q.dequeue()).toBeFalsy();
    })

    it('Should dequeue the first entered item',()=>{
        let q = new PseudoQueue();
        q.enqueue(100);
        q.enqueue(200);
        q.enqueue(300);
        expect(q.dequeue()).toEqual(100);
    })
})
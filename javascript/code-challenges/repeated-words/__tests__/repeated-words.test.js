'use strict';

const repeatedWords = require('../repeated-words.js');

describe('___Repeating Words___', () => {
  it('should take in a string and return the first repeated word', () => {
    expect(repeatedWords('Once upon a time, there was a brave princess who...')).toEqual('a is the first repeated word');
  });

  it('should take in a string and return the first repeated word', () => {
    expect(repeatedWords('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...')).toEqual('it is the first repeated word');
  });

  it('should return null when no string is passed in', () => {
    expect(repeatedWords()).toEqual(null);
  });

  it('should return null when no word is repeated', () => {
    expect(repeatedWords('it was the spring of hope, we had everything before us')).toEqual('no repeating words');
  });
});

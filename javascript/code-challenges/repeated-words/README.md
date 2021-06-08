# find repeated-words

## Challenge

### Feature Tasks

Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency

- remove all punctuation
- split the string at every empty space
- convert all letters to lower case
- run this Array of words
- through a for loop
- pushing words into a second array and testing against the first until first duplicate is found

## Links

- [Link to PR](https://github.com/fizzo999/data-structures-and-algorithms/pull/39)
- [Link to code - repeated-words.js](./repeated-words.js)
- [Link to test - repeated-words.test.js](./__tests__/repeated-words.test.js)

### UML Hashtable

<!-- ![uml hashtable](./Hashtable.jpg) -->

### Implementation

Provide a visual step through for each of the sample arrays based on the provided pseudo code
Convert the pseudo-code into working code in your language
Present a complete set of working tests

## Approach & Efficiency

1. TIME: O(n^2)
1. SPACE: O(n^2)

## Resources

- [Canvas CF repeating words](https://canvas.instructure.com/courses/2677295/assignments/21185274)
- [tutorialspoint](https://www.tutorialspoint.com/finding-duplicate-words-in-a-string-javascript)
- [stackoverflow how to remove punctuation w regex](https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex)

* [x] Top-level README “Table of Contents” is updated
* [x] Feature tasks for this challenge are completed
* [x] Unit tests written and passing
  - [x] “Happy Path” - Expected outcome
  - [x] Expected failure
  - [x] Edge Case (if applicable/obvious)
* [x] README for this challenge is complete
  - [x] Summary, Description, Approach & Efficiency, Solution
  - [x] Link to code
  - [ ] Picture of whiteboard

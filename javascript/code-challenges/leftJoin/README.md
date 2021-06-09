# find left-join

## Challenge

### Feature Tasks

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

![](./dsa-33-io-table.png)

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

# Insertion Sort

The idea behind Insertion Sort is often compared to the way people sort a hand of cards while playing Rummy.

In this card game, the dealer deals out cards to each player. Then, the players take the cards given to them one by one, sorting them in their hand in ascending order by inserting each card in its place.

During this entire process, the players hold one sorted pile of cards in their hands, while the unsorted pile from which they draw new cards is in front of them.

A very useful property of Insertion Sort is the fact that it doesn't need to know the entire array in advance in order for it to be sorted - it just inserts the given elements one by one.

This really comes in handy when we want to add more elements in an already sorted array, because Insertion Sort will add the new elements in their proper places without resorting the entire collection.

###

Here's a visual representation of how Insertion Sort works:

### credit: https://stackabuse.com/insertion-sort-in-javascript/

![insertionSort](./insertion-sort-in-java.gif)

### Pseudo Code

```

  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

```

The iteration starts at the second element. We consider the first element sorted by default. For each iteration, we keep track of the current element. Each current element will be the first element of the unsorted array - and each element before it will belong to the sorted array.

Through a while loop, we go through the sorted array and shift elements to the right, opening up a space for the current element to be inserted.

Once we find the proper place for it, the current element is inserted into the newly-opened slot. This process is repeated for each iteration until the array is sorted.

Now, let's populate an array and call our sorting algorithm:

```
let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr);
```

The output of this array will be:

```
(6) [1, 2, 3, 4, 5, 6]
```

Let's go over this example step-by step:

### First Iteration:

```
Sorted array: 5
Unsorted array: 2, 4, 6, 1, 3
```

- The first element in our unsorted array is 2.
- 2 < 5, so we move 5 one place to the right.

```
Sorted array: _, 5
```

- 2 is placed in its right spot.

### Second Iteration:

```
Sorted array: 2, 5
Unsorted array: 4, 6, 1, 3
```

- The first element in our unsorted array is 4.
- 4 < 5, so we move 5 one place to the right.

### Third Iteration:

```
Sorted array: 2, 4, 5
Unsorted array: 6, 1, 3
```

- The first element in our unsorted array is 6.
- 6 !< 5, so we don't move 5.

```
Sorted array: 2, 4, 5
```

- 6 is placed in its right spot.
  This is repeated until we're greeted with a sorted array: `1, 2, 3, 4, 5, 6`

<!-- ```

[8,4,23,42,16,15]

``` -->

### Code JavaScript

```Javascript

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

```

- [x] Top-level README “Table of Contents” is updated
- [x] README for this challenge is complete
  - [x] Summary, Description, Approach & Efficiency, Solution
  - [ ] Picture of whiteboard
  - [x] Link to code
- [x] Feature tasks for this challenge are completed
- [x] Unit tests written and passing
  - [x] “Happy Path” - Expected outcome
  - [x] Expected failure
  - [x] Edge Case (if applicable/obvious)

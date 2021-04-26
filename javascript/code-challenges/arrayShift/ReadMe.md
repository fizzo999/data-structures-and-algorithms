# Challenge Summary

<!-- Short summary or background information -->

## Challenge Description

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

1. read the instructions twice
1. set start point, end point
1. calculate the middle of the Array using Math.floor to round down
1. loop through the array with a while loop (so you can use index)
1. if searched for number is equal strictly to the Number of the inputArray at the middleIndex BINGO - success message
1. if searched for number is greater than the Number of the inputArray at the middleIndex, keep searching on the right side
1. reset old middle to new start +1
1. if searched for number is less than the Number of the inputArray at the middleIndex, keep searching on the left side
1. reset old middle to new end -1
1. if the while loop ends with no result - output -1 as in searched for Number is not contained inside the Array

## Solution

![arrayShift - diagram](../../assets/1250-dsa-diagram-arrayShift.PNG)

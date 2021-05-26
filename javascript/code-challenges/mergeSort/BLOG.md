# Merge Sort

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

```
MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
```

### Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Visual Steps

The array is recursively divided into two halves till the size becomes 1. Once the size becomes 1, the merge processes come into action and start merging arrays back till the complete array is merged.

![merge sort recursive explanaition](./Merge-Sort-Tutorial.png)

On the first pass, the initial array is split into half, creating a left and right array. These are then recursively called on again until each value of the initial array is basically a stand alone array with a single value.

The values are then passed into the merge helper function. This function compares values one by one until the left and the right array are equal to the counter i. If the current value of the left array is less than the current value of the right array, arr[k] receives the value from the left array; otherwise arr[k] receives the value from the right array. This continues on until all of the values are pushed back into the original array.

The array is edited in-place. It uses recursion.

- Input Array
  `[38, 27, 43, 3, 9, 82, 10]`
- Output Array
  `[3, 9, 10, 27, 38, 43, 82]`

### Big O

- The time complexity of merge sort is O(nLogn).
- The space complexity is O(n).

# Comparison Algorithms

- Bubble Sort
- Insertion Sort
- Selection Sort
- Quicksort
- Merge-sort

![](/Algorithms/UoL/assets/23.png)

## Bubble Sort

Like bubbles in a drink, the hights value moves to the top by comparing each pair

```
function BubbleSort ( A, N )
    swapped = true
    while ( swapped ) do
        swapped = false
        for 0 <= i < N-1 do
            if ( A[i] > A[i+1] ) then
                swap( A[i] , A[i+1] )
                swapped = true
            end if
        end for
        N = N-1
    end while
    return A
end function
```

## Insertion Sort

Pick the next number in the array and insert in the corresponding position

```
function InsertionSort ( A , N )
    for 1 <= j <= N-1 do
        ins = A[j]
        i = j-1
        while ( i >= 0 && ins < A[i] )
            A[i+1] = A[i]
            i = i -1
        end while
        A[i+1] = ins
    end for
end function
```

## Selection Sort

Selects the smallest number in the array and stores it in the correct position

```
function SelectionSort ( A , N )
    for 0 <= i < N-1 do
        min = pos ( A , i , N-1 )
        swap ( A[i], A[min] )
    end for
end function 
```

## Quick Sort

Quicksort chooses a number, the pivot. All numbers lower than the pivot are restored to its left and all numbers higher than the pivot are stored to its right. In that way, after every call, the pivot is stored in its correct position.

```
def QuickSort( A , low , high ):
    if (low < high):
        p = partition ( A , low , high )
        QuickSort( A , low , p-1 )
        QuickSort( A , p+1 , high )
```
function **partition** 
- Selects the pivot
- Moves all number lower than the pivot to the left part of the array
- Moves the pivot to its final position

```
def partition ( A, low , high):
    i = low
    while (low < high):
        if (A[low] < A[high]):
            exchange (low ,i)
            i += 1 
        low += 1 
    exchange ( high , i)
    return i
```

```
def exchange(p1,p2):
    temp = A[p1]
    A[p1] = A[p2]
    A[p2] = temp
```


# Non Comparison Algorithms

- Counting sort
- Radix sort
- Bucket sort
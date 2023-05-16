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
function partition(A,low,high)
    elem=A[high]
    i = low
    for i ≤ j < high  
        if A[j] ≤ elem  then
            swap(A[i],A[j])
            i = i + 1
        end if
    end for
    swap(A[high],A[i])
    return i
end function
```
### Partition function complexity time: $Theta(N)$

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

## Merge Sort

Merge sort, successively divides their array into halves, until we are left with only one element. When that happens, first of neighboring elements are merged in such a way that they are now sorted. This set of two sorted elements is then merged to another set of two sorted elements and so on

There are many implementation for merge sort depending on :

- data structure 
- the implementation of the merge part of merge sort

In this case we will use arrays and merge out of place

```
function MergeSort ( A , int l , int h ) 
    if (l<h)
        mid = l + floor ((h-l)/2)
        MergeSort ( A , l , mid )
        MergeSort ( A , mid+1 , h )
        Merge (A , low , mid , h )
```

### Merge function complexity time  $Theta(N)$

```
function merge(A,low,mid,high)
    for 0 <= i <=mid
         B[i]=A[i]
    for 0 <= i < (high-mid)
         C[i]=A[i+mid+1]
    i=0; j=0; k=0
    while( i <=mid  AND  j<(h-mid) )
        if(B[i]<C[j])
            A[k]=B[i]
            i=i+1
        else
            A[k]=C[j]
            j=j+1
        k=k+1
    if(i>mid)
         for j <= m < high-mid
             A[k]=C[m]
             k=k+1
    if(j >= (high-mid) )
         for i <= m <mid+1
             A[k]=B[m]
             k=k+1
end function
```

# Worst Case of comparison algorithms

![](/Algorithms/UoL/assets/24.png)

![](/Algorithms/UoL/assets/25.png)
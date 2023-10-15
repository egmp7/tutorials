# Non Comparison Algorithms

- Counting sort
- Radix sort
- Bucket sort

## Counting sort

[Youtube Counting sort](https://www.youtube.com/watch?v=OKd534EWcdk)

![](/Algorithms/UoL/assets/26.png)

### Drawbacks from counting sort

- Only sorts integer numbers
- Extra memory used by C

```
# A: 1D array
# k: maximum value in A

function CountingSort( A , k )

    # array C and R are created and filled with zeros
    # pos: index of array R

    C <- new Array (k+1) of zeros
    R <- new Array (len(A)) of zeros
    pos <- 0

    # array C is updated with the counting

    for 0 <= j < len (A) do
        C[A[j]] <- C[A[j]] + 1
    end for 

    # array R is updated with final sorted numbers

    for 0 <= i < (k+1) do
        for pos <= r < pos+C[i] do
            R[r] = i
        end for
        pos = r
    end for

    return R

end function
```

Descending Sorting
```
function counting-sort(A,k)
    C = new array(k+1) of zeros
    R = new array(length(A)) of zeros
    pos =  0
    for 0 ≤ j < length(A)  do
        C[A[j]] = C[A[j]] + 1
    end for
    for k >= i >=0  do  //CHANGED
        for pos ≤ r < pos+C[i] do
            R[r]=i
        end for
        pos=r
    end for
    return R
end function
```

## Radix Sort

![](/Algorithms/UoL/assets/27.png)

### Time complexity 

$O(d\times (N+k))$

d: Max number of digits in the array
N: size of the array
k: base of the numbers (eg: base 10, base 2)

```
# A: array to be sorted
# d: number of digits
function RadixSort( A , d )

    for <= j < d do
        # use counting sort to sort to sort A on digit j
    end for

end function
```

## Bucket Sort

![](/Algorithms/UoL/assets/28.png)

```
A: Array to be sorted
N: size of array A
max: maximum value in A

function BucketSort ( A , N , max )

    Buckets <- New array( N )

    for <= 0 i < N 
        Buckets[i] <- empty linked list
    for 0 <= i < N
        Buckets[floor( A[i] * N/(max+1) )] <- A[i]
    for 0 <= i < N
        sort( Buckets[i] )
    for 0 <= i < N
        copy list Buckets[i] back to A

end function
```
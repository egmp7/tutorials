# What is hashing

Hashing is the process of transforming a sequence of alphanumeric characters to a value. For example, the sequence cat1 can be hashed into the value 361

A hash function can be any function that is able to transform the input sequence into a value.

Applications:

- Passwords, Secure Hash Algorithms (SHA)
- Integrity of content
- Information Search

![](/Algorithms/UoL/assets/29.png)

![](/Algorithms/UoL/assets/30.png)

When numbers are stored in an array using a hash function to determine their position, that array is called a **Hash Table**

# Solutions for Searching problems

## Linear search 

Time Complexity $O(n)$ 

Space Complexity $O(1)$
```
# A: 1D Array
# N: Number of elements in Array A
# X: number to be searched

function LinearSearch( A , N , X )

    for 0 <= i < N
        if (A[i] == X)
            return true
    return false

end function
```
## Binary Search

Requires the elements to be arranged

Time Complexity for iterative version $O(log(n))$ 

Space Complexity for iterative version $O(1)$ 

```
# A: 1D Array
# low: lowest index of A
# high: highest index of A
# x: target number

function IterationBinarySearch( A, low, high, x )

    while ( low<= high )
        mid = floor( low + (high-low)/2 )
        if ( A[mid] == x )
            return mid
        if ( A[mid] > x )
            high = mid -1
        if ( A[mid] < x )
            low = mid +1
    return -1

end function
```

Time Complexity for recursive version $O(log(n))$ 

Space Complexity for recursive version $O(log(n))$ 


```
# A: 1D Array
# low: lowest index of A
# high: highest index of A
# x: target number

function RecursionBinarySearch( A, low, high, x )

    if (low > mid)
        return -1
    
    mid = floor( low + (high-low)/2 )

    if ( A[mid] == x )
        return mid
    if ( A[mid] > x )
        return RecursionBinarySearch( A, low, mid-1, x )
    if ( A[mid] < x )
        return RecursionBinarySearch( A, mid+1, high, x )

end function
```

## Direct Addressing

Use the index of an array to represent a number, A bit vector shows the values that are present in the array. This method uses a lot of memory

![](/Algorithms/UoL/assets/31.png)

Time complexity $O(1)$
Space complexity $O(k)$ where k is the maximum value in original array

```
# B: bit vector
# x: number

function DirectAddSearch( B , x )
    return B[x]
```

## Hashing

Unlike direct addressing, the hash table has a much lower number of elements than the bit vector used indirect addressing

![](/Algorithms/UoL/assets/32.png)

Time complexity $O(1)$
Space complexity $O(n)$ but way less than Direct Addressing

```
# H: hash table
# x: number

function Search( H , x )

    index = h(x)

    if ( H[index] == x)
        return true
    
    return false
end function
```

# Collisions

## Extend and rehash

![](/Algorithms/UoL/assets/33.png)

When to use:

- Reactive way: after a collision occurs
- Proactive way: when the utilization of hash table exceeds a threshold: 

**load factor = # buckets  / total # buckets**

## Linear Proving

![](/Algorithms/UoL/assets/35.png)

## Separate Chaining

Create a chain of packets at every position of the hash table.

![](/Algorithms/UoL/assets/34.png)

# Best Case of Hash Table

**No Collisions**
- INSERT $O(1)$
- DELETE $O(1)$
- SEARCH $O(1)$

# Worst Case of Hash Table everything collides

**SEPARATE CHAINING**
- INSERT $O(1)$
- DELETE $O(n)$
- SEARCH $O(n)$



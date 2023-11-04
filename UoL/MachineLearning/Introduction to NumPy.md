# Introduction to NumPy

## Instructions:
* Go through the notebook and complete the tasks. 
* Make sure you understand the examples given. If you need help, refer to the documentation links provided or go to the discussion forum. 
* Save your notebooks when you are done.

Note that we use the import keyword to import modules and libraries in Python. You can find out more about this <a href="https://docs.python.org/3/tutorial/modules.html">here</a>.





```python
import numpy as np
```

## 1 NumPy arrays

NumPy n-dimensional arrays (referred to as ndarrays are a fundamental structure for ML in Python.

### 1.1 Usage examples

To create a NumPy array from list:

    data1D = [6, 7, 8]
    data1DnD = np.array(data1D)
    print(data1D)
    print(data1DnD)

To print useful properties of our array:

    print(data1DnD.shape)
    print(data1DnD.ndim)
    print(data1DnD.dtype)

To change the type of elements:

    data1DnD_float = data1DnD.astype(np.float)
    data1DnD_string = data1DnD.astype(np.string_)

For array indexing:

    print(a[0])   #return the first element of ndarray a
    print(a[:])   #return all the elements of ndarray a
    print(a[-1])  #return the last element of ndarray a
    print(a[:-1]) #return everything up to the last element
    print(a[:-2]) #return everything up to the second last element
    print(a[-2])  #return the second last element

There are various ways of creating an ndarray:

    a = np.array([1, 2, 3])
    b = np.zeros((1,5))              # Create an array of all zeros
    c = np.ones((1,5))               # Create an array of all ones
    d = np.full((1,5), 7)            # Create an array filled with value 7
    e = np.random.random((1,4))      # Create an array filled with random values
    f = np.eye(3)                    # Create a 3x3 identity matrix (2D array)
    g = np.ones((3,3,3))             # 3-Dimensional array

As the name suggests, an n-dimensional array can be generalised to multiple dimensions:

    A=np.array([ [1,2], [3,4] ])     # Create a 2-D array (Matrix)
    print(A[0,1])                    # return the element on first column, second row (0,1)=2
                                     # array indexing works as above

We can reshape a vector (for example, ```v=[v1,v2,…,vN]```) to a matrix of ```N1 x N2``` dimensions (where ```N1xN2 = N```). This is particularly useful for plotting images.  As an example using numpy’s reshape method:

    A = np.array([1,2,3,4,5,6])  # a 1D array 
    B = np.reshape( A, [2,3] ) # reshape as a 2D array with 2 rows and 3 columns
    print(B)
 
**Task 1:**
Go through the examples above, pasting the code given in the empty cell below and verifying the results. 
Make sure you understand what this basic code does. You can find some NumPy documentation <a href="http://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.html">here</a>.


```python
A = np.array([1,2,3,4,5,6])  # a 1D array 
B = np.reshape( A, [2,3] ) # reshape as a 2D array with 2 rows and 3 columns
print(B)

print()

A=np.array([ [1,2], [3,4] ])     # Create a 2-D array (Matrix)
print(A[None,1])                 # array indexing works as above
```

    [[1 2 3]
     [4 5 6]]
    
    [[3 4]]


**Task 2:**
In the empty cell below, create an np array called ```L``` consisting of 15 random elements.



```python
L = np.random.random((1,15))
L = (L*100).astype(int)
print(L)
```

    [[56 94 54 52 49 59 93 27 67 83  1 83 31 92 27]]


**Task 3:**
Reshape the array ```L``` to a matrix ```A``` that has 5 rows and 3 columns. Print the matrix to verify the result.



```python
A = L.reshape(5,3)
A
```




    array([[56, 94, 54],
           [52, 49, 59],
           [93, 27, 67],
           [83,  1, 83],
           [31, 92, 27]])



**Task 4:**
Reshape matrix ```A``` to a matrix ```B``` that has 3 rows and 5 columns. Then, print the elements in row 0 and 1 only.



```python
B = A.reshape(3,5)
print(B)
print()
print(B[0:2])
```

    [[56 94 54 52 49]
     [59 93 27 67 83]
     [ 1 83 31 92 27]]
    
    [[56 94 54 52 49]
     [59 93 27 67 83]]


**Task: 5**
Print all elements of ```B``` that are in row 0 and 2 <b>and</b> column 1.



```python
print(B[0,1])
print(B[2,1])
```

    94
    83


**Task 6:**
Print all elements of ```A``` that are in the last row (see the ```[-1]``` notation above) and second to last column.



```python
print(A[-1,-2])
```

    92


**Task 7:**
Given the array ```Y``` below, find all indices in the array that are equal to the value 1. Use the NumPy function where to do that. Your final output should look like this: ```[1, 3, 4, 7]```.
You can find some useful documentation to help you with this <a href="https://numpy.org/doc/stable/reference/generated/numpy.where.html">here</a>.



```python
Y=np.array([0, 1, 0, 1,1, 2,0,1,0])
np.where(Y == 1)
```




    (array([1, 3, 4, 7]),)



**Task 8:**
Split the array ```Y``` defined above into three arrays by using the NumPy function ```array_split```. Print to verify.
You can find some useful documentation to help you with this <a href="https://numpy.org/doc/stable/reference/generated/numpy.array_split.html">here</a>.



```python
np.array_split(Y,3)
```




    [array([0, 1, 0]), array([1, 1, 2]), array([0, 1, 0])]



**Task 9:**
Given the array ```D``` defined below, find the indices that sort the array. Use the NumPy function ```argsort``` in order to do so. Subsequently, print the sorted array. 
The final output should look like this: ```[ 0 1 2 5 9 10 20]```.



```python
D=np.array([10,5,2,9,20,0,1])
indexesD = np.argsort(D)
D[indexesD]
```




    array([ 0,  1,  2,  5,  9, 10, 20])



**Task 10:**
Create two random 2x2 matrices ```X``` and ```Y``` (2 rows, 2 columns). Use the NumPy function ```concatenate``` in order to concatenate them and create a matrix ```Z``` that has dimensions 4x2 and a matrix ```W``` that has dimensions 2x4.
You can find some useful documentation to help you with this <a href="https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.concatenate.html">here</a>.



```python
# Create two random 2x2 matrices
X = np.random.rand(2, 2)
Y = np.random.rand(2, 2)

# Concatenate to create Z (4x2)
Z = np.concatenate((X, Y), axis=0)

# Transpose Z to create W (2x4)
W = Z.T

print("Matrix Z (4x2):\n", Z)
print("\nMatrix W (2x4):\n", W)

print("\nMatrix X (2x2):\n", X)
print("\nMatrix Y (2x2):\n", Y)
```

    Matrix Z (4x2):
     [[0.13488242 0.53579783]
     [0.79997812 0.58214481]
     [0.58571648 0.69751262]
     [0.38565591 0.65662132]]
    
    Matrix W (2x4):
     [[0.13488242 0.79997812 0.58571648 0.38565591]
     [0.53579783 0.58214481 0.69751262 0.65662132]]
    
    Matrix X (2x2):
     [[0.13488242 0.53579783]
     [0.79997812 0.58214481]]
    
    Matrix Y (2x2):
     [[0.58571648 0.69751262]
     [0.38565591 0.65662132]]


**Task 11:**
Create the same matrices ```Z2=Z``` and ```W2=W``` (where ```Z``` and ```W``` are as defined above), but this time use the NumPy functions ```hstack``` and ```vstack```.

You can find some useful documentation to help you with ```hstack``` <a href="https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.hstack.html#numpy.hstack">here</a> and ```vstack``` <a href="https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.vstack.html#numpy.vstack">here</a>.



```python
# Create Z2 by stacking Z vertically (vstack)
Z2 = np.vstack((Z, Z))

# Create W2 by stacking W horizontally (hstack)
W2 = np.hstack((W, W))

print("Matrix Z2 (8x2):\n", Z2)
print("\nMatrix W2 (2x8):\n", W2)
```

    Matrix Z2 (8x2):
     [[0.13488242 0.53579783]
     [0.79997812 0.58214481]
     [0.58571648 0.69751262]
     [0.38565591 0.65662132]
     [0.13488242 0.53579783]
     [0.79997812 0.58214481]
     [0.58571648 0.69751262]
     [0.38565591 0.65662132]]
    
    Matrix W2 (2x8):
     [[0.13488242 0.79997812 0.58571648 0.38565591 0.13488242 0.79997812
      0.58571648 0.38565591]
     [0.53579783 0.58214481 0.69751262 0.65662132 0.53579783 0.58214481
      0.69751262 0.65662132]]


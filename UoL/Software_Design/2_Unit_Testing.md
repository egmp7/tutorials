# Definition

Test-driven development is a method of developing software which operates in a repeated 'test and develop' cycle. The first step is to write a test which the software will fail. Next, the code is written to pass the test, then the test is run again. 

Other methods of coding involve you writing code, running the code, finding a bug, and then having to try and find that bug in the code base. Unit testing does a lot of testing as its way of working, so it gives you confidence because you know that you're building on top of code that has already been tested and definitely works.

# Laws of Test Driven Development (TDD)

1. You may not write production code unless you have first written a failing unit test
2. You may not write more of a unit test than is sufficient to fail
3. You may not write more production code than is sufficient to make the failing unit test pass

# What to test 

## Interface testing

Check that a function receives an specified input and returns what is expected

## Exercising Data Structures

Check that the amount of data send is correct and its integrity

## Boundary Conditions

Check the max or min values that can be store, or check the last item in an array

## Execution paths

Check different paths of a module, be careful with Control Coupling

## Error handling

Check that an error crashes a program, or does something desirable.

During error handling testing, it's important that the programme actually reaches the error handling code, and doesn't simply crash. The reported error matches the actual error encountered. All errors are intelligible.

# Python unit testing link

[Python unit testing](https://docs.python.org/3/library/unittest.html)

# c++ TDD 

[cppunit Assertions](https://web.archive.org/web/20180601221213/http://cppunit.sourceforge.net/doc/lastest/group___assertions.html)


# Aspects to analyze an algorithm

## Correctness 

Whether they perform a specific task according to a given specification

## Ease of understanding

Functions that implement specific algorithms are usually part of much bigger programs that need to be updated and maintained by different people at different times.

## Computational resource consumption

 Lowest resource consumption are naturally better candidates than those requiring more resources. This course will cover this aspect. specifically processing and memory Resources

 ### Processing

 Processing requirements are usually measured in terms of the number of operations the central processing unit must carry out to execute the algorithm. The number of operations is important because the lower the number of operations the faster the algorithm is going to be executed.

 ### Memory Requirements

Memory requirements are measured in terms of the number of memory positions required by the algorithm during its execution. Memory is also relevant because we have to make sure our algorithm requires an amount of memory that is well under the capacity of current computers.

# Empirical approach

Implement the algorithm in a particular programming language executed in a specific machine, and then somehow measure its execution time and memory requirements

![](/Algorithms/UoL/assets/1.png)

## Advantages

The first and most important advantage is that you get a real result. In time critical applications, when you only have a very narrow window in which to execute your program, you really need a precise measurement of the execution time and not an estimation. The same applies for memory consumption

A second advantage of the empirical approach is that you do not have to spend time determining how much time every different instruction takes and then doing the calculations. You just run the algorithm and get the result

## Disadvantages

First, your results are machine-dependent. That is, if you run the same algorithm in different computer architectures, you will get different results. That's not a good thing. To be able to compare different algorithms, we need to have a common base for comparison. We could all agree on a specific machine to run the tests. But as time passes and computers get faster, it would be necessary to run all algorithms again in the new machines to update the results. Additionally, as current computers are multi-taskers, while your program is executing, it's likely that the operating system will pause it for a moment to run other processes before going back to your algorithm to continue its execution. That situation is going to distort your results. Also, different variables of your program might be located in different memory hierarchies with different access times, which will affect the final result

A second disadvantage related to the implementation effort to empirically measured time or memory consumption of an algorithm, you have to implement it. If the algorithm is small and simple, such as the one I have just showed you, this is not a big problem


# Theoretical approach

![](/Algorithms/UoL/assets/2.png)

Making some reasonable assumptions about the number of CPU operations the algorithm is going to perform for every instruction, multiplying that by the time required by each operation, and in that way, obtaining an estimation of the execution time

Theoretical approach is not possible without agreeing on a model for the computer on which the algorithms will be executed. That is, we will define a generic computer with specific capacities, and we will analyze the algorithms assuming they will be run on this machine.

## Advantages

 The first important advantage of a theoretical approach is that by agreeing on a specific type of machine, you can obtain universal results. That is, anyone using that specific machine model will get the same results for the same algorithms. This give us a common base for comparison

 Second advantage is It's not necessary to implement the algorithms you need to analyze. You analyze them first, and then you choose which one to implement to solve the problem at hand.

 ## Disadvantages

First, you need to make some simplifications when building a model of a machine. A model is a simplified representation of reality, and as such, it omits some details. As a result, your time and space estimations will not be exact. In fact, most of the time, these estimations are so rough that they would not be useful when analyzing time-critical systems.

Secondly, the calculation effort is on you. You must understand the model and calculate the time and memory space requirements based on your algorithm and assumptions of the model.

# RAM Model

Random Access Machine model. The RAM model is a simplified representation of reality. The model must be complete enough to capture these aspects of the computer you need to analyze, but simple enough to allow you to do the analysis. Using this very simple model, we are going to estimate the running time of an algorithm according to the following four assumptions

![](/Algorithms/UoL/assets/3.png)

![](/Algorithms/UoL/assets/4.png)

## Single CPU

Instructions are executed sequentially

## One single operations = 1 unit of time

Math operations, conditional branching, if else; calling a function, writing or reading data from memory and returning from a function.

## Loops and Functions are not simple operations

They take longer to execute because they are made up of several simple operations

## No memory hierarchy -> any memory access = 1 unit of time

Memory is unlimited

# Counting time and space of an algorithm 

## Example 1

![](/Algorithms/UoL/assets/5.png)

Total time of algorithm is 16 units

In terms of space, only 1 due tu max variable

## Example 2

![](/Algorithms/UoL/assets/6.png)

![](/Algorithms/UoL/assets/7.png)

In terms of space, only 1 due tu i variable

# Growth of functions

There is no need to count every unit, instead just find the hight variable

The growth function can depend on the following factors: 

![](/Algorithms/UoL/assets/13.png)

## Example

![](/Algorithms/UoL/assets/9.png)

![](/Algorithms/UoL/assets/8.png)

![](/Algorithms/UoL/assets/10.png)

# Worst & Best Cases

Check the ways how an algorithm can return.

Finding the max only has one case and its running time is N

![](/Algorithms/UoL/assets/11.png)

![](/Algorithms/UoL/assets/12.png)

# Asymptotic Notation

## Big O Notation

![](/Algorithms/UoL/assets/15.png)

 Aims to find a function g (N) that acts as an upper bound for T(N)

 A running time function described as being O(N) means the running time grows no faster than a linear function

The horizontal axis represents the input data size, and the vertical axis represents the computational requirements of an algorithm.

![](/Algorithms/UoL/assets/14.png)

## Omega notation 

Question 1
A function described as being $\Omega(N^2)$ grows no slower than quadratically

![](/Algorithms/UoL/assets/16.png)

![](/Algorithms/UoL/assets/17.png)

## Theta Notation
find a function g of n that acts simultaneously as an upper and a lower bound for t of n
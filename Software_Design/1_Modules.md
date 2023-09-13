# Why Modularity 

## A module is:

- A Program unit that is discrete and identifiable with respect to compiling, combining with other units, and loading
- Logically separable part of a program
- Set of source code files under version control that can be manipulated together as one
- Collection of both data and the routines that act on

# Complexity

1. Degree to which a system's design or code is **difficult to understand** because of numerous components or relationships among components
2. Pertaining to any of a set of structure-based **metric** that measure the attribute in (1)
3. Degree to which a system or component has a design or implementation that is difficult to understand and **verify**

# Fat & Tangle

## Fat

- How much is going on here?
- Fat decreases => more modules, more focused

## Tangle

- How much does it interact with what's going on elsewhere?
- Tangle increases => More interactions between modules 


# Module Cohesion 

Module cohesion is the way in which the elements of a module relate to each other. There are different ways for the elements to relate; for example, they might be functions that work on the same type of data or the program might execute the function at a similar point in time. Some of these are desirable, others are not. 

## What is module cohesion

- The manner and degree to which the tasks performed by a single software module are related to one another
- In software design, a measure of the strength of an association of the elements within a module

## Module Cohesion Types

- Coincidental
- Communicational
- Functional
- Logical
- Procedural
- Sequential
- Temporal

### Communicational cohesion (good)

Types of cohesion in which the tasks performed by a software module use the same input data or contribute to producing the same output data

### Functional cohesion (good)

Type of cohesion in which the tasks performed by a software module perform logically similar functions

### Logical cohesion (sometimes ok)

Type of cohesion in which the tasks performed by a software module perform logically similar functions

### Procedural cohesion (bad)

Type of cohesion in which the tasks performed by a software module all contribute to a given program procedure, such as an iteration or decision process

### Sequential cohesion (bad)

Type of cohesion in which the output of one task performed by a software module serves as input to another task performed by the module

### Temporal cohesion (bad)

Type of cohesion in which the tasks performed by a software module are all required at a particular phase of program execution

### Coincidental cohesion (terrible)

Type of cohesion in which the tasks performed by a software module have no functional relationship to one another

# Module Coupling

Module coupling is the manner in which separate modules interact with each other. Certain types of interaction are desirable; for example, passing data. Other types of interaction are undesirable; for example, changing the inner logic.  

## What is module coupling

1. Manner and degree of interdependence between software modules
2. Strength of the relationship between modules
3. Measure of how closely connected two routines or modules are
4. In software design, a measure of the interdependence among modules in a computer program

## Module Coupling Types

- Common environment
- Content 
- Control
- Data
- Hybrid
- Pathological

### Common environment coupling

- (It's okay, but data could end up in unpredictable states.)

- The problem with common environment is that they share the data, therefore, data can be updated and other modules may not know about this changes,  its better to create sub environments to avoid this.

- Type of coupling in which two software modules access a common data area

### Content coupling

- (Acceptable. This is a very common way of designing and writing code)

- The problem may rise when you need to access the module from outside, refactoring may be needed.

- Type of coupling in which some or all the contents of one software module are included in the contents of another module

### Control coupling

- This is bad. There might be some edge cases where it is acceptable. For example, a sorting function that takes a comparison function as an argument. 

- Module can become complicated when other module affects the way it behaves, a better approach is to divide the module into different modules

- Type of coupling in which one software module communicates to another module for the explicit purpose of influencing the latter module's execution

### Data coupling

- This is good. Data is passed from one module to other module

- Type of coupling in which output from one software module serves as input to another module

### Hybrid coupling

- Generally bad. Only useful if there is limited resources.

- Two or more modules uses the same value in different ways

- Type of coupling in which different subsets of the range of values that a data item can assume are used for different and unrelated purposes in different software modules

### Pathological coupling

- One module can completely change the flow of another module.
Only very small use case (e.g. live sound performance using coding)

- Type of coupling in which one software module affects or depend upon the internal implementation of another

# Programming Techniques & Language Features

Programming techniques relate to the way you structure and organize the code and the choices you make about control flow and data. Language features are related and interact with programming techniques but they can be used to more strongly control how programmers work with your modules. 
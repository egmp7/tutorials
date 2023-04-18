# Why Modularity 

![module](/Software_Design/assets/module.png)

# Complexity

![complexity](/Software_Design/assets/complexity.png)

# Fat & Tangle

![fat tangle](/Software_Design/assets/fatTangle.png)

# Module Cohesion 

Module cohesion is the way in which the elements of a module relate to each other. There are different ways for the elements to relate; for example, they might be functions that work on the same type of data or the program might execute the function at a similar point in time. Some of these are desirable, others are not. 

![cohesion](/Software_Design/assets/cohesion0.png)

## Module Cohesion Types

![cohesion](/Software_Design/assets/cohesion1.png)

### Communicational (good)
![cohesion](/Software_Design/assets/cohesion2.png)
### Functional (good)
![cohesion](/Software_Design/assets/cohesion3.png)
### Logical (sometimes ok)
![cohesion](/Software_Design/assets/cohesion4.png)
### Procedural (bad)
![cohesion](/Software_Design/assets/cohesion5.png)
### Sequential (bad)
![cohesion](/Software_Design/assets/cohesion6.png)
### Temporal (bad)
![cohesion](/Software_Design/assets/cohesion7.png)
### Coincidental (terrible)
![cohesion](/Software_Design/assets/cohesion8.png)

# Module Coupling

Module coupling is the manner in which separate modules interact with each other. Certain types of interaction are desirable; for example, passing data. Other types of interaction are undesirable; for example, changing the inner logic.  

![cohesion](/Software_Design/assets/coupling0.png)

## Module Coupling Types

![cohesion](/Software_Design/assets/coupling1.png)

### Common environment 
(It's okay, but data could end up in unpredictable states.)

The problem with common environment is that they share the data, therefore, data can be updated and other modules may not know about this changes,  its better to create sub environments to avoid this.
![cohesion](/Software_Design/assets/coupling3.png)
### Content

(Acceptable. This is a very common way of designing and writing code)

The problem may rise when you need to access the module from outside, refactoring may be needed.

![cohesion](/Software_Design/assets/coupling4.png)
### Control

This is bad. There might be some edge cases where it is acceptable. For example, a sorting function that takes a comparison function as an argument. 

Module can become complicated when other module affects the way it behaves, a better approach is to divide the module into different modules

![cohesion](/Software_Design/assets/coupling5.png)
### Data

This is good. Data is passed from one module to other module

![cohesion](/Software_Design/assets/coupling6.png)
### Hybrid

Generally bad. Only useful if there is limited resources.

Two or more modules uses the same value in different ways

![cohesion](/Software_Design/assets/coupling7.png)

### Pathological

One module can completely change the flow of another module.
Only very small use case (e.g. live sound performance using coding)

![cohesion](/Software_Design/assets/coupling8.png)
# Requirements

## Introduction to requirements

### What are requirements for?

**Problem:** how to ensure that a system does what it is supposed to do?

The requirements allow us to say in as unambiguous way as possible and ambiguous, **what does the system do**? What should it do. Once we figured out a way of **stating** clearly what it's supposed to do, the obvious next step is we **test** it. Once we have our set of requirements, we can then test the system somehow to see whether it meets those requirements.

Interestingly, unit testing is perhaps a very powerful way of proving that the system meets a set of requirements as long as you can specify those requirements in terms of a set of tests.

### Requirements engineering and SWEBOK

Requirements are complicated, they are a top level Knowledge Area in SWEBOK 3.0

Some sub areas:

- Requirements fundamentals
- Requirements process
- Requirements elicitation
- Requirements analysis
- Requirements specification
- Requirements validation
- Practical considerations, 
- Software requirements tools

### Who are requirements for?

*Describe requirements in a way that stakeholders can understand it, Professor*

Stakeholders in terms of requirements?

- End-users
- The company making the software
- The company buying the software
- The programmers

*What kind of requirements do they understand?*

Example: The company that's commissioning the software may or may not be highly technical. It might be somebody who runs a carpentry shop who wants to build a website that allows the customers to do certain things. And if you start cracking out a formal specification of the website, they may not find that particularly useful in evaluating whether you've completed the job or not. And the programmers might come up with a really deep, elaborate way of that they can understand really well, but nobody else does, and maybe that's not so useful.

## Whirlwind tour of requirements techniques

### Natural Language

Most of the stakeholders will be allowed to partially be able to understand what I said. But it was fairly lengthy and maybe a bit impenetrable, especially if English is your second language

Assuming that everybody speaks the chosen language. Then that's pretty good staff if you want to have good coverage of all the stakeholders. And so, to give a quick example, if I was to specify the part of the system, which dictates what kind of passwords people are allowed to use, right,? So imagine we've got some sort of user accounts on our software, and we need to specify some rules. About the type of passwords, they're allowed. So we might say, okay, the passwords that are allowed are, they have to have seven characters in them and two of the characters need to be numbers and one of the characters needs to be a special character which can be a colon, a semi colon or for stop. And if the user does not use these password that they type in does not meet these particular patterns. Then we need to specify send the message back to the user to tell them what the pattern is and to tell them that their current password does not match that pattern



### Constrain natural language: Simplified Technical English

It has a set of rules, which dictate how it can be written. If the person reading it is a is not a non native English speaker. So English is their second language, how can we write it in a way that has the best chance that they can understand it? And so this is where a simplified technical English came from.

- Short sentences
- Short paragraph
- Limit grammar
- Active voice

### Graphical: UML

It's a sort of technical diagram, which is sort of semi formal. Specifies relationships between entities in the diagram is not just data flow or step by step process. So it's, yeah, it's a way of modeling software systems.


### Formal: Z

A more abstract language to write requirements. Only mathematicians will be able to understand it.

```
    AddMedia
    newMedia?: Media
    MyRecordCollection
    sizeOfCollection!:N
    ////////////////////////
    newMedia? not_belong myRecords
    myRecords' = myRecords U {newMedia}
    sizeOfCollection! = #myRecords'

```

## Back to basics: EARS

Easy Approach to Requirements Syntax (EARS)

Developed and tested through a case study converting Certification Specification for [aero] Engines into requirements

### Generic requirements syntax

```
<optional preconditions>
<optional trigger> the
<system name> shall <system response>
```
Example of a website where we have an avatar of our user account on the top of the screen, and we click on that and it pops up a profile window:

- Precondition: The user is logged in
- Trigger: They click on the profile button
- System: The user profile drop down
- Response: Appears on the top left of the screen

### Ubiquitous requirements 

 Is an even simpler version. Many of the things I guess in this certification document were of this form so they're basically saying the system has to do something. There's no preconditions or triggers, it just has to do this 

```
The <system name> shall <system response>
```

### Event-driven requirements

when certain preconditions are met and a trigger happens, then the system has to do something. When you're building user interfaces and the idea is that when the user does something, if the system's in a certain state, then this would happen. It's very appropriate for specifying the behavior of a GUI

```
WHEN <optional preconditions> <trigger> the <system name> shall <system response>
```

### Unwanted behaviors

```
IF <optional preconditions> <trigger>, THEN the <system name> shall <system response>
```

### State-driven requirements

```
WHILE <in a specific state> the <system name> shall <system response>
```

Example, while the video streaming service is not able to give us enough video to keep our buffer full, then we continually display a spinning icon

# Test Plans

## Black box and white box testing

### Black box:

1. System or component whose **inputs, outputs , and general function are know** but whose contents or implementation are unknown or irrelevant.

2. Pertaining to an approach that treats a system or component whose inputs, outputs, and general function are known but whose contents or implementation are unknown or irrelevant

### Glass or white box

1. System or components whose **internal contents or implementation are known**

2. Pertaining to an approach that treats a system or component as in (1)

### Requirements for black box and white box

The requirements are specified to each box: **White box** calculate the mean function has to take in an array of integers or whatever, or an array of floats, and it has to return a floating point value which is correctly calculated to be the mean. **Black box**
the calculator has a user interface with a mean button I can press, which does what it's supposed to do.

## Testing and the body of knowledge

Software testing is a top level Knowledge Area in SWEBOK

### What is testing

Activity in which systems or component is executed under specified conditions, the results are observed or recorded, and an evaluation is made of some aspect of the system component

### Test case specification

Document specifying inputs, predicted results, and a set of execution conditions for a test item

*Sounds a bit like requirement:*

```    
<optional preconditions> <optional trigger> the <system name> shall <system response>
```

### Test procedure specification

Document specifying a sequence of actions for the execution of a test

## Test procedure specification: step by step and matrix

### Step by Step

ISO form where the user types the results of the test. The test shows an objective, as well as pre-requisites before doing the test.

### Matrix

A generic set of preconditions for doing this, and then with the adaptation that maybe they're logging in as these different users and then they do some quick test

## Sims AI test example

EA developed a test method that uses automated testing rather than human testing. The automated test follows every path possible than a human could do. This test was trough black box by send some data, and retrieving the results. This method is en example on how to test a project based on the requirements.

# Usability testing

## Introduction to usability

### Definition

The extent to which system product or service can be used by specified users to achieve specified goal with **effectiveness, efficiency amd satisfaction** in a specified context of use

We are talking about a particular group of users trying to do a particular thing with a system and doing that in a particular context. To give you an example, imagine we want to test the usability of a mobile phone, so maybe when I'm freezing cold and I'm outside and I've got gloves on and I'm trying to make a phone call suddenly the usability is quite different from, if I'm inside and it's warm and I'm using my hands without any gloves.

### Test it with users

*We can't predict a software system's usability without testing it with real users*

### Effectiveness

Effectiveness is really about were they able to complete the task if you like. If a piece of software allow someone to complete a task

### Efficiency

 How quickly and how easily and how fluid that was. We're going to be thinking about questions around, how easily they move through the interface, and how quickly they learned it, and things like that

### Satisfaction

Satisfaction is almost more difficult to measure than efficiency and effectiveness because it's more about the feelings that they had or they're using it. There's wide a range of things being pulled in. Because if it is efficient and effective they're probably going to be reasonably satisfied but there might be other factors affecting whether they're satisfied or not. Like whether had a nice user interface or they like the color scheme, can be all other things

## Usability metric

### SUS System Usability Scale

Mark from 1 to 5 (Strongly disagree, Strongly agree)

1. I Think that I would like to use the system frequently.
2. I found the system unnecessarily complex.
3. I though the system was easy to use.
4. I think that I would need the support of a technical person to use this system.
5. I found the various functions of this system were well integrated
6. I though there was too much inconsistency in this system.
7.  I would imagine that most people would learn to use this system very quickly.
8. I foun the system very cumbersome to use.
9. I felt very confident using the system.
10. I need to learn a lot of things before I could get going with this system.

### UMUX Usability metric for user experience

A list of less questions than they had in SUS. SUS had got 10 questions, it's a bit laborious, may be for you only get loads of users to complete that questionnaire. UMUX is trying to come up with a shorter list of questions, and there are papers where they've actually empirically validated UMUX's questions

1. [This system's] capabilities meet my requirements.
2. Using [this system] is a frustrating experience
3. [This system] is easy to use
4. I have spend too much time correcting things with [this system]

### Creativity Support Index

This one is different in that it's been designed specifically for the evaluation software tools for doing **creative work** and it's not as widespread as the other two, the other two are mainstream metrics

A different metric which is focused more on creative tools.

Questions about:

- Collaboration
- Enjoyment
- Exploration
- Expressiveness
- Immersion
- [Gained] Results Worth [the] Effort

## Usability Principles

### Nielson's 10 principles

1. Visibility of system status
2. Match between system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation 

# Accessibility
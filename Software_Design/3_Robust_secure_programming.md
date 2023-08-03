# How to test

1. Ideal conditions
2. Nominal execution
3. Boundary cases
4. Stress testing
5. Error handling

# Assertion

An assertion is a check in your code that evaluates a boolean expression

**Types**

- Runtime Assertion. *Is the program in a desirable state?*

- Unit Test Assertion *Is the program generating the appropriate inputs*

- Compile Assertion *Is the program likely to get into an undesirable state?*

# Runtime Assertion

Checking something while the program is running. EG: *Is the game score >= 0?*

**Runtime Assertion Fails** 

- Terminate the program / **Con** Web servers. / **Pro** Airplane running a program to take off

- Print an error / **Con** Creating a library / **Pro** Command line program or Graphical interface

- Throw an exception / **Con** Some users might not know how to use the exception / **Pro** Most useful 

- Carry on Regardless / **Pro** sometimes in Web Server, if the state is not good find another way

# When to run assertions

Point of view 1

Assertion checks consume object code space and execution time, both of which could be significant for large number of assertions or highly complex assertion checks. In industrial practice, assertion checks are suppressed in production versions of software

Point of view 2 

Don't disable those carefully crafted assertions when you ship your product to your customers. Microsoft doesn't do on Office, and neither does JPL when its embedded software hitches a ride to Mars. If the program does not run fast enough, change the code until it does!

Professor point of view:

We should leave assertions in unless there is a really strong and obvious reason not to do so, as they can prevent the program from entering an unwanted state. The only real argument against leaving assertions in production code seems to be that they slow it down. Having said that, if your code is being executed thousands or millions of times a second (for example, think of the Facebook app running on all those smart phones across the world), those assertions might be burning quite a lot of electricity!  

## Debug build

*Point of view 1:*

Suppress assertions here 

*Point of view 2:*

Keep the assertions

## Release build

Use assertions here

# Ariane 5 rocket case study case

The rocket blown could have been prevented if they would have used assertion. The test passed under short periods of time. But during real circumstances the the time was longer, so they did not caught the fail. The program launched an exception and the rocket blow up.

One post-incident review concluded that "This loss of information was due to specification and design errors in the software of the inertial reference system. ".  To me it appears they did not test the design extensively enough to realize it had design flaws. So an assertion failed but was not dealt with properly

# Assertion Examples

## C++

```
#include <cassert>
```

![](/Software_Design/assets/2.png)

## Python

![](/Software_Design/assets/1.png)

## Javascript

![](/Software_Design/assets/3.png)

# Secure Programming 

In many cases, it is not necessary to meet the protections needs of the person responsible for the information stored in the computer entirely through computer-aided enforcement. External mechanism such as contracts, ignorance, or barbed wire fences may provide some of the required functional capability. This discussion, however, is focused in the internal mechanism. 

# Security Goals

- Confidentiality (Who can see)

- Integrity (Who can modify)

- Availability (Can they access it)

According to Wheeler, availability means 'the assets are accessible to the authorized parties in a timely manner'. So it means that the system is up and running and has the capacity to respond. So a denial of service attack affects availability. 

# Security programming Hit list 

- Validate all input. Don't trust anything that comes into the software that you haven't generated yourself

- Restrict operation to buffer bounds

- Follow good security design patterns 

![](/Software_Design/assets/4.png)

- Carefully call out to other resources

![](/Software_Design/assets/5.png)

- Send information back judiciously This one is all about being careful about what it is, you send back to the user. Your program might be privy to all kinds of information. Some of it may not belong to the user. You got to be really careful about what it is you sending back, and you might reveal information about your program and stuff like that.

# Software Development Lifecycle (SDLC)

Is a structure for the various software development activities to be performed within a project

![](/Software_Design/assets/6.png)

# Practices

![](/Software_Design/assets/7.png)

## Practice 7

![](/Software_Design/assets/8.png)

### Sub-practice 1

Establish a list of things that we're using

### Sub-practice 2

You should certainly be considering doing testing to a third party if it hasn't been done already

### Sub-practice 3

The minimum is to know what the list is that you're using and to make sure that those are kept up to date, and then additionally, you should have done some sort of analysis on those packages before you use them

## Practice 8

Current list of approved tools contains mainly Microsoft-centric tools

- Which compiler are you using?

- Which IDE are you using?

- Which Cloud platform are you using?

Looking at the tool chain that you're using and making sure you know what they are. For instance, an inventory of the tools would be, which tools you're using? A security analysis would be, are they considered secure, has anyone else evaluated them in the past? And thirdly, are your tools up to date?

## Practice 9 

Static versus dynamic analysis. 

### Static analysis

We're talking about is source code. Either you do it through automated tools, so you basically feed your source code into some sort of static analyzer, of which there are a few available for different languages, and then it gives you a list of things which might be problems, and then you evaluate those The other method is, of course, human analysis, so someone to just look at the code who's an expert, presumably, and to evaluate whether you've got any problems, and so a common practice would be a team leader doing a code review on what the junior programmers are writing

### Dynamic analysis

Piece of software running and we want to know whether it's secure or not. Exploiting the software when it's running

# Other Schemes 

![](/Software_Design/assets/9.png)

Looking at what your organization is doing and developing some awareness of the kind of risks that your specific organization might face based on what it is that you're developing or the particular project you're working on

![](/Software_Design/assets/10.png)

It's about researching what are the practices that are going on in industry around security and summarizing those, producing reports, and so that people can go and, okay, what's the general trends? What are the trends that are going on here? I guess it's more reactive. It can react to what's going on in industry as new technologies come along so new knowledge can be added.

![](/Software_Design/assets/11.png)

It's about, you've just started, before you get too far into this, what you're going to do? How do you embed security into your process? How many errors and flaws does that generate? It also focuses on web development

# Bandit

An open-source tool which allows you to analyze Python code. The type of analysis that we're doing is called static analysis

```
pip install bandit
```

Check python file 

```
bandit -ll *.py

bandit -l *.py
```

# Exception Handling

## Different types of errors

### Syntax Error

When we're not following the rules of the language. The rules of the C++ language and most other languages dictate that you cannot have variable names with at signs in and hash signs and things like that

```
int main()
{
    int @!#* = 10;

    return 0'
}
```

When **compiling** it returns:

    syntax.cpp5:9: error: start '@' in program
        int @!#* = 10;
    syntax.cpp5:11: error: start '#' in program
        int @!#* = 10;
    syntax.cpp: In function 'int main()'
    syntax.cpp:5:10: error: expected unqualified-id before '!' token 
        int @!#* = 10;

### Compile error

When we're trying to compile or interpret some code, and that doesn't work.
Syntax errors are a type of compile error, part of the thing that the compiler or interpreter might do is it might check on the code to make sure that it's syntactically correct. But there are other types of errors that go beyond that, but the compiler can pick up. Really depending how sophisticated the compiler or the interpreter is, it might do some fairly deep analysis of our code and gives all warnings and errors.

Example of a compiler error that isn't syntactically incorrect, but the compiler refuses to compile nonetheless

    int test()
    {
        return 1;
    }

    int main()
    {
        test(128);
        return 0;
    }

When **compiling** it returns:

    syntax.cpp: In function 'int main()':
    syntax.cpp:11:13: error: too many arguments to function 'int test()'
        test(128);
    syntax.cpp:2:5: note: declared here
        int test()

### Link (build) errors

The way that linking works is you promise a bunch of things. Example: In this library I'm going to have all these functions and they're going to work like this." Then the idea is that hopefully somewhere you're actually going to have an implementation of those functions. The file where we promise all of these things, we call that typically the header file. Then in a separate file, we will actually implement those.

    int test();

    int main()
    {
        test();
        return 0;
    }
When **compiling** it returns:

    In function 'main':
    syntax.cpp: (.text+0x5): undefined reference to 'test()'
    collect2: error: ld returned 1 exit status

### Non-Errors

When you're using a function in a nonsensical way or doing some nonsensical calculation. It's an error in that we're using it in a nonsensical way, but it's not really an error that anything's going to pick up very easily. That might be where assertions come in.

    int calculateArea(int width, int height)
    {
        return width * height;
    }

    int main()
    {
        int area = calculateArea( -10, -12 ) // error
        return 0
    }

### Runtime error

This is really when the program is running, it's executing, and it encounters some error that wasn't picked up through the various other phases

    divide (int x, int y)
    {
        return x / y;
    }

    int main()
    {
        int div = divide (10, 0);
        return 0;
    }

When **running** the program:

    Floating point exception (code dumped)

## Introduction to exceptions

### Definition

1. Event that causes suspension of normal program execution. The first definition is talking about things that are occurring while the program's running, which are perhaps unexpected. That asynchronously at any point. Event feel
2. Indication that an operation request was not performed successfully. Now, the second one indication that an operation request was not performed successfully. That's more of a procedural feel.

Worked example:

    // connect to databases, check if user exists
    bool verify Login (string username, string password)

### Caller or Callee. Where should we deal with an exception?

The **caller** would be the bit of the program that **calls the verifying login function**, whereas the **callee**, would be **the verifying login function itself**.

The fundamental idea is to separate detection of an error (which should be done in a called function) from the handling of an error (which should be done in the calling function) while ensuring that a detected error cannot be ignored.

Proposed Example: the database is down and it fails to connect to the database, so it's unable to carry out the operation. It cannot verify whether that user exists or not. It could return false, maybe just to say it doesn't exist to be safe, but it should really do something else because it's like a third thing. It's not that the user exists or doesn't exist, it has no way of actually verifying if the user exists because the database is down.

### Assertions

An assertion is the tool that you would use to detect that something went wrong. Let me just jump over to my drawing program here

    if ( assert == okay ) Execute-the-program
    else throw-an-exception

#### Assertion Definition

1. Logical expression specifying a program state that must exist or a set of conditions that program variables must satisfy at at particular point during program execution.

2. Function or macro that contains loudly if a design assumption on which the code is based is not true

### Exceptions vs control flow

Control flow is normally for defining the logic of what the program should do under normal circumstances. Exception handling actually has its own syntax, which is similar to control flow syntax. But it's designed to deal with exceptional circumstances, not normal running. reports of professional software engineers and stuff often encountering people using exception handling as basically as control flow. You really shouldn't do that. Exception is really when something goes wrong, it shouldn't just be, "Oh, I'm going to try this risky thing, and then if it doesn't work out then I'll catch the exception and then carry on."
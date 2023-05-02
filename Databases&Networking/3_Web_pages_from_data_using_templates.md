# Adding Routes

A route is an instruction for mapping a URL path to an action  (usually resulting in data being sent back to the client)

``` app.get("/about", (req, res) => res.send("<h1>About Page!</h1>")); ```

# Separation of Concern SoC

As the technology training website Oreilly puts it SoC is the idea that each module or layer in an application should only be responsible for one thing and should not contain code that deals with other things.

Wikipedia says, in computer science, separation of concerns or SoC is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern.

## How is achieved?

The main idea of SoC is to decompose the code into parts with minimum functionality overlap. So first, we need to identify those parts or concerns. And then remove dependencies as much as possible

![](/Databases&Networking/assets/10.png)

DRY as Don't Repeat Yourself

![](/Databases&Networking/assets/11.png)

# EJS templating language

``` npm install ejs --save ```

EJS stands for Embedded Javascript Templating and it is a language that lets you generate
html markup with plain javascript. With EJS you cannot only generate html pages but you can also
make them dynamic

# Template Engines

Template Engines uses static template files (and variable names) with dynamic data.

A template engine can perform two main tasks: 

Firstly, imagine you would like to pass a variable such as a record of a data retrieved from a database to an HTML file and display it to the user. So passing a variable from back-end database tier to middleware, and then to a front-end presentation tier is something we would like to implement in our dynamic web application

They also enable you to run some programming logic at run-time before sending the final HTML to the browser for display. Imagine that you have a list of data retrieved from a database instead of a one single record of data. You can have a loop as a simple logical elements in your HTML file and the templating engine will repeat this loop at run-time based on values determined and assigned to variables

![](/Databases&Networking/assets/12.png)

![](/Databases&Networking/assets/13.png)

![](/Databases&Networking/assets/14.png)

Close the for loop with ``` <%}%> ```
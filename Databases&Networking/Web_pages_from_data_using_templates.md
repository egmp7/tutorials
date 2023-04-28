# Adding Routes

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

# Introduction 

[Tutorial Video](https://www.youtube.com/watch?v=XvLMO2wE3OQ&t=1549s)

- Javascript functional programming tutorial. 
- Definition and examples of the concepts applied.
- Check the script.js file in the public folder to find the implementation of functional programming

## Installing

    npm install
    npm run start

# Basic Concepts

## First Class Functions

- First class functions is a term used in javascript programming

```
// function object
function add (x,y){
    return x + y;
}

// function expression
const add = function (x,y){
    return x + y;
}
```

### Passing and returning functions
```
const greet = function (salutation){
    return function (firstName){
        return `${salutation} ${firstName}`
    }
}

const howdy = greet('Howdy');
const hello = greet('Hello');

howdy('Jim');
howdy('Bob');
hello('Jim');
```

## Declarative Programming

- Avoid using: for, while, do while, if, else, switch

```
number = [1,2,3,4,5,6];

const output = item => console.log(item);

// output is a callback function
// this reads as For each item it should output this numbers
forEach(output,numbers);

// ternary operator
const value = true ? 'this value' : 'that value';
```

## Pure & Impure functions
- Pure functions are easier to test, we should try to use as many pure functions as possible. However we need impute functions to achieve something meaning.

- Impure functions produce a change in state. or produces an observable side effect. 


```
// pure
function add (a,y){
    return x +y;
}

// impure
function add (a,y){
    console.log(x+y)
    return x +y;
}
```
## Immutability  

- The state of a variable is not mutable or can change;

```
const indexes = Object.freeze([0,1,2,3,4,5]);

function addElement(arr) {
    return Object.freeze([...arr,arr.length]);
}

// this will add 6 adn 7
addElement(addElement(indexes));
```

# Building a Functional Project

## Introducing Composition

- Object Oriented Programming Approach

```
(new Elem('div'))
    .addClass('css-class')
    .addClass('another-class')
    .append(new Text ('content to display'));
```

- Functional Programming Approach

```
// this form of functional programming is discouraged 
append(new Text('content to display'),addClass('another-class',addClass('css-class',elem)))

compose(
    append(new Text('content to display'),elem),
    addClass('another-class',elem),
    addClass('css-class',elem)
)(elem)

pipe(
    addClass('css-class',elem),
    addClass('another-class',elem),
    append(new Text('content to display'),elem)
)(elem)
```

## Using Composition

- We use a compose function that sends the elem('div') function and the return of that function is send to the other functions in the R.compose 

- The compose approach reads from right to left

```
const elem = tag => document.createElement(tag);

//const el = elem('div');

const el = R.compose(
    addClass('bg-light'),
    addClass('p-2')

)(elem('div'));

function addClass(className) {
    return function (element) {
        element.classList.add(className);
        return element;
    }
}

document.body.appendChild(el);
```

## Currying Functions

- To avoid addClass implementation we'll use the Ramda package for specialized functions
- The curry creates a function for every parameter in the function

```
const addClass = R.curry(function (className, element){
    element.classList.add(className);

    return element;
})

const append = R.curry(function(node, element){
    element.appendChild(node);

    return element;
})

const attr = R.curry (function (attributeName, attributeValue, element){
    element.setAttribute(attributeName, attributeValue);

    return element;
})
```

## Hello World Functional App

```
const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);

const addClass = R.curry(function (className, element){
    element.classList.add(className);

    return element;
})

const append = R.curry(function(node, element){
    element.appendChild(node);

    return element;
})

const attr = R.curry (function (attributeName, attributeValue, element){
    element.setAttribute(attributeName, attributeValue);

    return element;
})

function message(content){

    return R.compose(
        append(text(content)),
        attr('data-message',content),
        addClass('bg-light'),
        addClass('p-2')
    
    )(elem('div'));
}

document.body.appendChild(message("hello world"));
```
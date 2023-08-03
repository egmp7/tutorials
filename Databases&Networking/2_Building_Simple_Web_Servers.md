# Web Server

*TechTarget:* A web server is  a program that uses HTTP or Hypertext Transfer Protocol to serve the files that form web pages to users in response to the request, which are forwarded by their computers HTTP clients.

*Wikipedia:* A web server is server software or hardware dedicated to running set software, that can satisfy World Wide Web client requests. A web server can, in general contain one or more websites. A web server processes incoming network requests over HTTP on several other related protocols

## HTTP Hyper Text Transfer Protocol Definition

HTTP is a client-server application protocol, which defines the rules by which a client program called a browser or user agent on a server program called a Web server may in tracked in order to exchange request on responses

In HTTP terminology, the user agent sends a request from a given resource to the Web server. Which is a process running continuously and listening to request coming from the network. Upon receiving the request, the server locates or builds the resource and sends a response to the client.

HTTP resources are identified by means of Uniform Resource Locators (URLs), which are structured strings of the format:

    http: // <host> [: <port>] [ <path> [? <query>]]

```
// diagram

                                            | -------------- |
    | -------- |        HTTP request        | Web server    ||
    | Client / | -------------------------> |    | -------- ||
    | Browser  | <------------------------- |    | Resource ||
    | -------- |        HTTP response       |    | -------- ||
                                            | -------------- |

```

HTTP requests have a fixed format, which consists of three parts: a request line, some optional message headers, and the request body (also optional).

After receiving and interpreting a request message, a server responds with an HTTP response message, which is structured in three parts: a status line, a set of optional headers, and a message body.

# Web Service Architecture  

```
// diagram

| ------------------------------------------------- |
|  |-------------------------------------------- |  |
|  | HTTP Server | Database | Scripting Language |  |
|  | ------------------------------------------- |  |
|  |   Operating System (Linux, Windows, Mac )   |  |
| ------------------------------------------------- |

| ------------------------------------------------- |
|                     Hardware                      |
| ------------------------------------------------- |
```

Hardware for a web server could be anything from simple, low-power devices like Raspberry Pi to large stacks of compact servers in an air conditioned room. For a small company, web server hardware could be a single computer. For a large company, each service may need one or more pieces of dedicated hardware. Some companies or even individuals pay a web hosting company. This is where you can rent hardware or a section of a large piece of hardware instead of having your own server.

The allocation of resources to your application and communication between hardware and software is the job of the operating system eg (Mac, Linux, Windows)

## HTTP server

- Compiles the results from databases and scripting language to be sent to the user
- Controls what options are available to the end user (configuration files)
- Shares web pages and scripts on the network



# Node JS

Node JS is an asynchronous event-driven JavaScript runtime environment, Node.js is designed to build scalable network applications

 - JS is **open Source**

- **Cross-platform**

- **Runtime environment**, it executes JavaScript code outside of a browser.

## Node.js versus PHP

| Node.js                                       | PHP                   |
| --------------------------------------------- | --------------------- |
| Asynchronous                                  | Synchronous           |
| 2Single-threaded                              | Multi-threaded        |
| Non-blocking                                  | Blocking              |
| Highly scalable                               | Less scalable         |
| Memory-efficient                              | Less memory-efficient |
| Able to share code between browser and server |



# What is a module

A module is essentially a set of functions and properties that you want to include in your application. Like a library; a set of functions or code written by you or someone else which you can import and
export across your project.

## What is Express

Express is a very popular framework for Node.js designed for building web applications and APIs.
Think of it as a module that you can require in your code and use it to create and maintain web
servers. It is considered to be the standard server framework for Node.js.

### Installing Express

    npm install express --save 



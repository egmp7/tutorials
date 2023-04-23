# Key Concepts: 

Databases (Data), Web Applications

## Data

We are surrounded by data from credit cards. social media, graphics. 

## Web Application

**Wikipedia:** A client server-software application in which the user interface runs in a web browser.

**Techgenichs:** A computer program which allows a user to submit and retrieve data to/from a database over the internet using their preferred browser

**Pcmag:** An application in which all or some parts of the software are downloaded from the web each time it runs. It may be browser based, client based, or native mobile based.

# Static vs Dynamic web applications

![](/Databases&Networking/assets/1.png)

## Static 

Eg: Yahoo/Weather

Static internet resources that has little/no interaction with the user.

## Dynamic 

Eg: Amazon

Dynamic web-sites provide more user interaction. Visitors can input, change, and manipulate data.

# Desktop vs Web Application

![](/Databases&Networking/assets/2.png)

# Lifetime of a Web request (URL)

![](/Databases&Networking/assets/3.png)

## HTTP Protocol

The client, which could be the web browser, makes a request for a particular resource. Scripts on the server evaluates the request and return a response which may or may not include the requested resource plus some other stuff. The web browser will evaluate the response and decide what to display and how to display it.

## Content from Dynamic Web sites 

Dynamic websites are not based on files in your computer's file system,rather they are based on programs which are run by the web server when a request comes in and which generate the content that is returned to the user. One major source of such content is a database.

# GET method

Perform the submission of a plain request for some resource to the Web server. 

# POST method

Perform the submission of a request including sizeable user’s input (e.g., a long text or a file) to be processed by the server. In such a case, the user’s input is packaged as an attachment to the request, and constitutes the so-called request body.

# Headers

## General Headers
General headers are applicable both to requests and responses. For example, the Date header represents the date and time at which the request or response was originated. 

## Request Headers
Request headers apply specifically to requests and not to responses. For example, the Accept-Language header establishes the set of languages that are preferred by the user as a response to the request. 

## Response Headers
Response headers apply specifically to responses and not to requests. For instance, the WWW-Authenticate response-header field is used for access control; it is included in response messages having status code = 401 (which means “unauthorized”), emitted by the Web server when the user tries to access a resource stored in a password-protected domain. 

## Entity Headers
Entity headers apply to the content transferred in the body of the request or response. 2 For example, the Content-Length header specifies the number of bytes associated with the body of the request
# What is a web application

Data Analogy: *We are surrounded by data from credit cards. social media, graphics.* 

## Web Application Definition: 

**Wikipedia:** A client server-software application in which the user interface runs in a web browser.

**Techgenichs:** A computer program which allows a user to submit and retrieve data to/from a database over the internet using their preferred browser

**Pcmag:** An application in which all or some parts of the software are downloaded from the web each time it runs. It may be browser based, client based, or native mobile based.


## Static vs Dynamic web applications

### Static 

Eg: Yahoo/Weather

Static internet resources that has little/no interaction with the user.

### Dynamic 

Eg: Amazon

Dynamic web-sites provide more user interaction. Visitors can input, change, and manipulate data.

## Desktop vs Web Application

| Desktop                                    | Web                                               |
| ------------------------------------------ | ------------------------------------------------- |
| Accessed through OS                        | Accessed through browser                          |
| Different appearance/experience in each OS | Consistent appearance/experience across platforms |
| Access to system resources = fast          | Less access to system resources = slow            |
| Lower risk of data loss                    | Higher risk of data loss                          |
| Different version for each OS              | Same version across all platforms                 |
| Multiple updates required                  | Single update for all users                       |




# Lifetime of a Web request (URL)

1. **URL** is typed in the browser
2. Check browser cache. If( true ) go **step 8**, else go **step 3**
3. **DNS** lookup to find the **IP** address of server
4. Browser initiates a **TCP** connection with the server
5. Browser sends a **HTTP** request to the server
6. Server handles the incoming request
7. Browser receives **theHTTP** response
8. Browser displays the **HTML** content


## HTTP Protocol

The client, which could be the web browser, makes a request for a particular resource. 
Scripts on the server evaluates the request and return a response which may or may not 
include the requested resource plus some other stuff. The web browser will evaluate the 
response and decide what to display and how to display it.

## Content from Dynamic Web sites 

Dynamic websites are not based on files in your computer's file system,rather they are based 
on programs which are run by the web server when a request comes in and which generate 
the content that is returned to the user. One major source of such content is a database.

- **GET method:** Perform the submission of a plain request for some resource to the Web server. 

- **POST method:** Perform the submission of a request including sizeable user’s input (e.g., a 
long text or a file) to be processed by the server. In such a case, the user’s input is 
packaged as an attachment to the request, and constitutes the so-called request body.

## HTTP Headers

HTTP headers let the client and the server pass additional information with an HTTP request or
 response. An HTTP header consists of its case-insensitive name followed by a colon (:), 
 then by its value.

- **General Headers** are applicable both to requests and responses. For example, the 
Date header represents the date and time at which the request or response was originated. 

- **Request headers** apply specifically to requests and not to responses. 
For example, the Accept-Language header establishes the set of languages that are 
preferred by the user as a response to the request. 

- **Response headers** apply specifically to responses and not to requests. For instance, 
the WWW-Authenticate response-header field is used for access control; it is included in 
response messages having status code = 401 (which means “unauthorized”), emitted by the 
Web server when the user tries to access a resource stored in a password-protected domain. 

- **Entity headers** apply to the content transferred in the body of the request or 
response. 2 For example, the Content-Length header specifies the number of bytes associated 
with the body of the request

# Three tier web application architecture

Three-tier architecture is a **client server architecture** in which the **user interface, 
application logic and data storage** are developed, and maintained as independent modules

The core principle of three-tier architecture is to provide an intermediate layer 
between the client and the data tier which centralizes middleware services and the 
business logic of the application


```
// diagram

| -------------- |       | --------------- |        | --------------- | 
|                |       |                 |        |                 |
|    (Client)    | HTTP/ |  (Application)  |        |    (Storage)    |
|    (Client)    | HTTPS |  (  Logic    )  |        |        ||       | 
|    (Client)    |<=====>|                 |<=====> |    (Database)   |
|                |       |                 |        |                 |
| User Interface |       |   Web Server    |        | Database Server |
| -------------- |       | --------------- |        | --------------- | 
             
Presentation Tier          Application Tier               Data Tier
```

- The **presentation tier** is sometimes called the **front end**. The **application tier** is referred 
to as the **middleware** and the **database tier** is called the **back end**

- The **front end** or presentation tier is **on the client side**, and the **application** and **data 
tiers** or middleware and back end are **on their server side**

## Why Three tier web application architecture 

- Three-tier architectures were proposed in alternative to two tiers
- Three-tier architectures offer a higher degree of scalability than two-tier configurations, thanks
to better network utilization and do the virtually unlimited replication and load distribution capabilities
of the middle tier.

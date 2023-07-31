# Developing dynamic web applications

## 3-tier web application architecture

### Server side

- index.js: **Application tier**
- main.js (Routes file): **Middleware, Application tier**
- Databases created by MySQL shell: **Database tier**

### Client side

- Templates files (HTML and ejs) **Presentation  tier**

## Separation of concerns (SoC)

- index.js (web server software)
- Routes folder (logic)
- Views folder (presentation)

## Index.js file

The web server software is stored in index.js file, the express module in node js handles HTTP requests and responses in their web server program. You will recall the server runs continuously and listens to events. The req object in express represents the HTTP requests that the client makes, usually through a web browser. It stores many aspects about the request. The res object, on the other hand, represents their HTTP response. This response is sent by the express app after receiving the request

```
const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>(){res.send('Hello World')})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
## Routes

When you design your web application, you will want to display different pages to your application users. For example, the about page, login page, register page, and of course, the homepage. Some pages, such as their about page, provide static information. Other pages provide user interaction by displaying a form like their search page in the lab exercises you've done. Some pages display dynamic data, such as data retrieved from a database. An example of this is the list page you have implemented in your web application. Each page can be defined as a route in your web application. The URL is the route. Previously, you have defined a number of roots in your main.js file. Routes can be added to an express application in your main.js file.

When the URL of this root is typed into a web browser, this is an event which is sent to the web server. As I explained before, the web server is a constantly running program, listening to events. When an event occurs, it checks which function to call in the case of that event.

### Static
- URL: www.../register
```
router.get("/register", (req, res, next) => {
    res.send("Register page")
})

```
### Dynamic
-URL: www.../user/1
```
router.get("/user/:id", (req, res, next) => {
    var user = req.params.id

    res.send(`User : ${user}`)
})
```

## Event driven programming

Event-driven programming is different from sequential programming in the sense that events such as user interaction and sensors output control the flow of the program rather than relying on a preset sequence.

In the case of web application development, when the user types a URL into a web browser, that is an event, you respond to it by calling the callback function written for that specific route. In sequential programming, on the other hand, the flow of the program is only controlled by the sequence of statements. There is a start statement and an end statement that clearly defined where the flow of the program begins and ends and in between, there are statements which run one after the other as implemented in the software program

### Events:

- User inputs
    - Mouse clicks
    - Keyboard strokes
- Sensor outputs
- Flow of the program based on events

## EJS 

Ejs is a templating engine. This concept was discussed in Topic 3. A templating engine replaces variables in template file at run time with actual values and transforms the template into an HTML file. Ejs makes it possible to pass variable to your template file and you can add some simple logic to it as well using special ejs tags.

### page.ejs
```
<% comments.forEach(function(comment) { %>
    <li class="comment">
        <p class="name"><%= comment.first_name %> <%= comment.last_name %></p>
        <p class="date"><%= comment.creation_date %></p>
        <p class="text"><%= comment.comment %></p>
    </li>
<% }) %>
```

## Accessing databases from within Node.js

### MySQL
```
app.get("/list", function(req, res) {

    // query database to get all the books
    let sqlquery = "SELECT * FROM books";
    
    // execute sql query
    db.query(sqlquery, (err, result) => {
        
        if (err) res.redirect("/");
        else res.render("list.html", {availableBooks: result});
    });
});
```
### SQLite

```
router.get("/edit/:id", checkAuthorization, (req, res, next) => {

    global.db.get(`SELECT * FROM articles WHERE id = ${req.params.id}`, 
    function (err, article){
        if (err){next(err);} 
        else {
            res.render("edit.ejs", {
                pageTitle: "Edit page",
                article
            });  
        }
    });
});
```
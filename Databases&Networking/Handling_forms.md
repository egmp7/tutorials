# Forms

Forms are used in dynamic web applications to collect users input data. A web form may contain any number of input fields including type such as edit boxes, checkboxes, drop-down menus, radio buttons, and so on.

Forms are very important for data manipulation and allow you to collect, update and verify many
information

# HTTP methods

Each request method is designed to perform a specific action on a given resource. HTTP request methods are sometimes called verbs and include get, put, post, delete, patch, head, connect, options and trace.

![](/Databases&Networking/assets/15.png)

# Get method

![](/Databases&Networking/assets/16.png)

*GET* is used to request data from a specified resources on the server.

# Post method

![](/Databases&Networking/assets/17.png)

*POST* is used to send data in order to create or update a resource on the server.

# Collecting Form Data

## Get Method

**Form**

```
<form action="/search-result" method="GET">
    <input id="search-box" type="text" name="keyword" value="Default">
    <input type="submit" value="OK" >
</form>
```

**Routes**

This information is collected inside req.query 

Note: The object is accessible eg: req.query.keyword

```
app.get("/search-result", function (req, res) {
    //searching in the database
    res.send(req.query);
});
```

**Browser**

Once the form is submitted the program returns this

![](/Databases&Networking/assets/18.png)

## Post Method

For handing post request we need to take four steps:

• Installing ‘body-parser’ module: ```npm install body-parser --save```

• Updating the ‘index.js’ file

```
const bodyParser= require ("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
```

• Updating the ‘main.js’

• Creating and editing a new html file named register.html in the ‘views’ directory

**Body-parser** is a module that will allow you to access the data sent using the POST request method
easily. By definition, it extracts the entire body portion of an incoming request stream and exposes it
on req.body

**Form**

```
 <form action="/registered" method="POST">
    <input id="first" type="text" name="first" value="first name" />
    <input id="last" type="text" name="last" value="last name" />
</form>
```

**Routes**

Information is collected inside req.body

```
app.post("/registered", function (req,res) {
    // saving data in database
    res.send(req.body)
});
```

**Browser**

![](/Databases&Networking/assets/19.png)
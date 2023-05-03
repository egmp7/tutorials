# Review SQL Commands

```
CREATE TABLE dishes (id INT AUTO_INCREMENT, name VARCHAR(50), price DECIMAL(5, 2) unsigned, is_vegetarian BOOLEAN, is_vegan BOOLEAN ,PRIMARY KEY(id));

INSERT INTO dishes (name, price, is_vegetarian, is_vegan)VALUES('pizza margherita', 10.99, 1, 0),('soya burger', 9.50, 1, 1); 

SELECT * FROM dishes LIMIT 1;
```

# UPDATE Items from database

```
UPDATE TableName SET filedName1 = new-value1, fieldName2 = new-value2;

UPDATE books SET price = 25.50 WHERE id = 1; t
```

# DELETE Items from database

Deletes everything from table
```
DELETE FROM TableName;
```
Delete specific items;
```
DELETE FROM dishes WHERE id = 1;
DELETE FROM dishes WHERE name='Mushy peas';
```

# Primary Key

A primary key is a field or combination of fields in a table that uniquely identifies each row or a record in a table. In most of the cases, primary key is a numerical ID. A primary key is often an integer ID field set to auto increment.

![](/Databases&Networking/assets/28.png)

# Integrity Constrains in database design 

![](/Databases&Networking/assets/30.png)

# Primary Key integrity constrain 

![](/Databases&Networking/assets/29.png)

# Access databases from your Node web application

## Dependencies 

Use version 2, works better 

```
npm install mysql2 --save:
```
**index.js**
```
// database
const mysql = require ("mysql2");
const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "password",
    database: "myBookshop"
   });

// connect to database
db.connect((err) => {
    if (err) {
        console.log("WOOPS PROBLEM HERE :: db.connect()")
        throw err;
    }
    console.log("Connected to database");
});

global.db = db;
```
**Routes**
```
app.get("/list", function(req, res) {
    // query database to get all the books
    let sqlquery = "SELECT * FROM books";
    // execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
        res.redirect("/");
        }
        res.send(result)
    });
});
```

# Passing variables to templates 

## Template iteration

**Routes**
```
app.get("/list", function(req, res) {
    // query database to get all the books
    let sqlquery = "SELECT * FROM books";
    // execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect("/");
        }
        res.render("list.html", {availableBooks: result});
    });
});
```

**html**
```
<% availableBooks.forEach(function(book){ %>
    <li><%= book.name %>, £<%= book.price %></li>
<% }) %>
```
# Passing variables to back-end

**Routes**

```
app.post("/addbook", function (req,res) {
    // saving data in database
    let sqlquery = `INSERT INTO books (name, price) VALUES  (?,?)`;

    // execute sql query
    let newrecord = [req.body.name, req.body.price];

    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            return console.error(err.message);
        }else
        res.send(` This book is added to database, name: ${req.body.name} price: ${req.body.price}`);
    });
});
```
# Passing variables to templates and back-end

**Routes**

 app.get("/search-result-db", function (req, res) {
    //searching in the database
    let word = [req.query.keyword];
    let sqlquery = "SELECT * FROM `books` WHERE name like ?";

    // execute sql query
    db.query(sqlquery,word, (err, result) => {

        if (err) {
            return console.error("No book found with the keyword you have entered" + req.query.keyword + "error: "+ err.message);
            //res.redirect("./search"); this can also be used in case of an error instead of the above line
        }

        else{
            res.render ('list.html',{availableBooks:result});
        }
    });
});

# Sanitization

Input sanitization cleans the input data from malicious code such as SQL injection

[Link to sanitization](https://www.npmjs.com/package/express-sanitizer)

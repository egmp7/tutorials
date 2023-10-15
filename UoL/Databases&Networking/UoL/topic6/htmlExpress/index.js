const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const port = 8087;

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/main")(app);

app.set("views",__dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = function(app) {
    app.get("/",function(req, res){
    
        // dynamic page
        res.render("index.html", {
            title: "index"
        });
    });

    app.get("/about",function(req, res){
    
        // dynamic page
        res.render("about.html", {
            title: "About"
        });
    });

    app.get("/search",function(req, res){
    
        // dynamic page
        res.render("search.html", {
            title: "search"
        });
    });

    app.get("/search-result", function (req, res) {
        //searching in the database
        res.send(req.query);
    });

    app.get("/register", function (req,res) {
        res.render("register.html",{
            title: "register"
        });
        
    });

    app.post("/registered", function (req,res) {
    // saving data in database
    res.send(req.body)
    });

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
                //step 1:(this will only shows the collected form-data) for debugging purpose only
                // res.send(req.query);
                //step 2: (this shows keyword in collected form-data) for debugging purpose only
                //res.send("This is the keyword you entered: "+ req.query.keyword+ ".<br><br>This is the result of the search:<br>");
                //step3: (this will show the result of the search) for debugging purpose only
                //res.send(result);
                //step4: (this will show the result of the search using an ejs template file, list.ejs can be used here)
                res.render ('list.html',{availableBooks:result});
            }
        });
    });
}
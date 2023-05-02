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
            res.send(result)
        });
    });
}
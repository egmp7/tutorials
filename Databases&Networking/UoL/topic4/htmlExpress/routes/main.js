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
}
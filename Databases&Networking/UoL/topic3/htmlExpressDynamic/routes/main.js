module.exports = function(app) {
    app.get("/",function(req, res){
    
        // dynamic page
        res.render("index.html", {
        title: "Dynamic title"
        });
    });
}
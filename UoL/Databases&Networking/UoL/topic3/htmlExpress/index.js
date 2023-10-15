const express = require ("express");
const app = express();
const port = 8084;

/**
 * Requires the main.js file inside the 
 * topic3/htmlExpress/routes folder passing in the
 * Express app as an argument
 */

require("./routes/main")(app);

/**
 * sets the path to the topic3/htmlExpress/views folder for the EJS engine
 */
app.set("views",__dirname + "/views");

/**
 *  tells Express that you want to use EJS as the templating engine for this application
 */
app.set("view engine", "ejs");

/**
 * tells Express that you want to render html pages. 
 */
app.engine("html", require("ejs").renderFile);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
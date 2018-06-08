//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//express
const app = express();
app.use(express.static("."));
const PORT = 3000;

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routing
require(path.join(__dirname, './routes/htmlRoutes'))(app);
require(path.join(__dirname, './routes/apiRoutes'))(app);

//----------server listen--------//
app.listen(3000, function(){
  console.log("App listening on port " + PORT + "...");
});

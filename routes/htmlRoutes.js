//dependencies
const path = require('path');


module.exports = function(app){
//home
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '../public/view.html'));
})
//reserve
app.get("/reserve", function(req, res){
  res.sendFile(path.join(__dirname, '../public/reserve.html'));
})
//tables
app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, '../public/tables.html'));
})

};

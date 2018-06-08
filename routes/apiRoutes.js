//dependencies
const path = require('path');
const bodyParser = require('body-parser');
const waitList = require('../data/waitlistData');
const tableData = require('../data/tableData');


module.exports = function(app){
//get table api
app.get("/api/tables", function(req, res){
  res.json(tableData);
});

//get waitlist api
app.get("/api/waitlist", function(req, res){
  res.json(waitList);
});

//post new table
app.post("/api/tables", function(req, res){
  let newTable = req.body;

  if(tableData.length < 5){
  tableData.push(newTable);
  res.json(newTable);} else {
    waitList.push(newTable);
    res.json(newTable);
  }
})

//delete reservation
app.delete("/api/tables", function(req, res){
  //some code here...
})
};

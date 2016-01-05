var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var sandwichController = require('./server/controllers/sandwichcontroller.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.sendFile(__dirname +  "/client/views/index.html");
});

// redirect js => client/js
app.use('/js', express.static(__dirname + "/client/js"));

//routes
app.get("/api/sandwiches/", sandwichController.index);
app.post("/api/sandwiches/",function(req,res){
	sandwichController.save(req,res);
});



module.exports = app;

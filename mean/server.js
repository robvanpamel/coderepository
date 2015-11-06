var express 			= require('express');
var app 				= express();
var sandwichController 	= require('./server/controllers/sandwichcontroller.js'); 

app.get('/', function(req, res){
	res.sendFile(__dirname +  "/client/views/index.html");
});

// redirect js => client/js
app.use('/js',express.static(__dirname + "/client/js"));

//routes
app.get("/api/sandwiches/", sandwichController.index);
app.post("/api/sandwiches/",sandwichController.save);

var server = app.listen(3000,function(){
	console.log("Server is listening on port 3000!");
});
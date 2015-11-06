var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname +  "/client/views/index.html");
});

// redirect js => client/js
app.use('/js',express.static(__dirname + "/client/js"));

var server = app.listen(3000,function(){
	console.log("Server is listening on port 3000!");
});
var model = require('../models/').Sandwiches;

var fetchSandwiches = function(req, res){
	var sandwiches = model.findAll().then(function(sandwiches) {
		res.json(sandwiches);
	})
};

var saveSandwiches = function(req,res){
	var name = req.body.name;
	var price = req.body.price;
	// sync to database
	var sandwich = model.build({name:name, price:price});
	sandwich.save().then(function(sandwich) {
		console.log("value saved");
		res.json(sandwich);
	}).catch(function(err){
		console.log(err);
	});
	//res.json(sandwich);
};

module.exports.index = fetchSandwiches;
module.exports.save = saveSandwiches;

var sandwiches =  [
		{
			Name:"Martino",
			Price:2.5
		},
		{
			Name:"Club",
			Price:2.5
		},
		{
			Name:"Kaas",
			Price:2.0
		}
	];

module.exports.index = function(req, res){
	res.json(sandwiches);
};

module.exports.save = function(req,res){
	console.log("saving a sandwich"+req);
	
	sandwiches.push( {Name:req.Name, Price: req.Price});
	res.json(req.body);
};
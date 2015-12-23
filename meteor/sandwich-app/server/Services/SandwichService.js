function SandwichesService(){};

SandwichesService.prototype.listSandwiches = function() {
  var result = Sandwiches.find({});
  return result;
};

SandwichesService.prototype.searchSandwiches = function(searchTerm) {
  if (searchTerm.length >= 3){
    return Sandwiches.find({name: searchTerm + '.*'}, {sort:{name:1}, limit:10});
  }
  return null
};

SandwichesService.prototype.addSandwich = function(sandwich) {
  console.log('adding sandwich \r\nname: ' + sandwich.name + ' price: ' + sandwich.price +'\r\n ');
  console.log('Before: ' + Sandwiches.find({}).count());
  Sandwiches.insert(sandwich);
  console.log('After: ' + Sandwiches.find({}).count());
};

Meteor.publish('sandwiches', function() {
  var service = new SandwichesService();
  return service.listSandwiches();
});

Meteor.methods({
  'addSandwich': function (sandwich) {
    var service = new SandwichesService();
    service.addSandwich(sandwich);
    return true;
  }
});

SandwichService = {
  listSandwiches: function(){
    console.log('returning list of sandwiches')
    var result = Sandwiches.find({});
    return result;
  },
  searchSandwiches: function(searchTerm) {
    if (searchTerm.length >= 3){
      return Sandwiches.find({name: searchTerm + '.*'}, {sort:{name:1}, limit:10});
    }
    return null
  }
};

MyServiceToTest = {
  helloWorld: function(){
    return "hello world";
  }
};

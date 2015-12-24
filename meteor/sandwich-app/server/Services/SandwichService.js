SandwichService = {
    listSandwiches: function () {
      console.log('returning list of sandwiches')
      var result = Sandwiches.find({});
      return result;
    },
    searchSandwiches: function(searchTerm) {
      if (searchTerm.length >= 3){
        return Sandwiches.find({name: searchTerm + '.*'}, {sort:{name:1}, limit:10});
      }
      return null
    },
    addSandwich: function(sandwich) {
      Sandwiches.insert(sandwich);
      return true;
    }
};

Meteor.publish('sandwiches', function() {
  return SandwichService.listSandwiches();
});

Meteor.methods({
  'addSandwich': function (sandwich) {
    return SandwichService.addSandwich(sandwich);
  }
});

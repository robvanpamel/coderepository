if (Meteor.isServer) { 
    Sandwiches = new Mongo.Collection('sandwiches');
    
    SandwichService = {
        listSandwiches: function(){ 
            console.log('returning list of sandwiches')
            // var result = Sandwiches.find({}, {sort:{name:1}}).toArray();
            var result = Sandwiches.find({});
            
            console.log('sandwiches length: '+ result.count())
            
            return result; 
        },
        // only expose when searching with a min of 3 search characters    
        searchSandwiches: function(searchTerm){
            if (searchTerm.length >= 3){
                return Sandwiches.find({name: searchTerm + '.*'}, {sort:{name:1}, limit:10});    
            }
            return null
        },
        
        addSandwich: function(sandwich){
            console.log('adding sandwich \r\nname: ' + sandwich.name + ' price: ' + sandwich.price +'\r\n ');
            console.log('Before: ' + Sandwiches.find({}).count());
            Sandwiches.insert(sandwich);
            console.log('After: ' + Sandwiches.find({}).count());
        }    
    }

    Meteor.publish('sandwichService', function() {
        return SandwichService.listSandwiches;
    });

    Meteor.methods({
        addSandwich: function (sandwich) {
            SandwichService.addSandwich(sandwich);
        }
    });
}
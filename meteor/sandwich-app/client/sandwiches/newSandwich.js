function createSandwich(evt){
    var sandwich = {
       name: evt.target.name.value,
       price: evt.target.price.value, 
    }
    
    Meteor.call("addSandwich", sandwich);   
    
    evt.target.name.value = '';
    evt.target.price.value = '';
    
    return false;    
}

Template.newSandwich.events({
   "submit form": createSandwich 
});
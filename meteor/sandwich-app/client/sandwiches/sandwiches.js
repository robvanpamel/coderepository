Meteor.subscribe("sandwichService");

function sandwiches(){
    return SandwichService.find();
}

Template.sandwiches.helpers({
  sandwiches: sandwiches
});
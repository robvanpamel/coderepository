Meteor.subscribe("sandwiches");

function sandwiches(){
    return Sandwiches.find();
}

Template.sandwiches.helpers({
  sandwiches: sandwiches
});
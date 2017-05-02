Meteor.publish('events', function(){
  return Events.find({host: this.userId});
})

Meteor.publish('singleEvent', function(id){
  check(id, String);
  return Events.find({_id: id});
})

Meteor.publish('all', function(){
  return Events.find();
})

Meteor.publish('myDinners', function(){
  return Events.find({host: this.userId});
})

Meteor.publish('allJoinableEvents', function(){
  return Events.find({host: {$ne : this.userId}});
})

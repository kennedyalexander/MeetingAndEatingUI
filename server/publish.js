Meteor.publish('events', function(){
  //console.log(Events.find({host: this.userId}));
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
  //.find({'name.1': {$exists: true}})
  var userPK = this.userId
  return Events.find({host: {$ne : userPK}});
})
//find all where host = userid or guests contains userId
//find all where number of guests < number of spaces

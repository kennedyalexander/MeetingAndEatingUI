import { Template } from 'meteor/templating';

Template.MyDinners.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('myDinners');
  })
});


Template.MyDinners.helpers({
  events: ()=> {
    console.log("hello");
    return Events.find({});
  }
});

import { Template } from 'meteor/templating';

Template.SearchDinners.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('allJoinableEvents');
  })
});


Template.SearchDinners.helpers({
  events: ()=> {
    console.log("hello");
    return Events.find({});
  }
});

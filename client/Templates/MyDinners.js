import { Template } from 'meteor/templating';

Template.MyDinners.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('all');
  })
});


Template.MyDinners.helpers({
  events: ()=> {
    return Events.find({});
  }
});

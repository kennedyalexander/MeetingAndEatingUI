import { Template } from 'meteor/templating';

Template.Events.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('events');
  })
});

Template.Events.helpers({
  events: ()=> {
    return Events.find({});
  }

});

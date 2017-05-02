import { Template } from 'meteor/templating';

Template.Events.onCreated(function(){
  var self = this;
});

Template.Events.helpers({
  events: ()=> {
    return Events.find({});
  }
});

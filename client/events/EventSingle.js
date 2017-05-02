import { Template } from 'meteor/templating';

Template.EventSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id')
    self.subscribe('singleEvent', id);
  })

});
Template.EventSingle.helpers({
  events: ()=> {
    var id = FlowRouter.getParam('id')
    return Events.findOne({_id: id});
  }
});
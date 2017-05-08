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

Template.EventSingle.events({
  'click .toggle-join' : function(){
    Meteor.call('toggleDinnerAttendance', FlowRouter.getParam('id'));
  },
  'click .toggle-status' : function(){
    console.log('clicked');
    Meteor.call('publishDinner', FlowRouter.getParam('id'), "hello");
  },
  'click .purge-Guest' : function(){
    console.log('clicked' + this.guestId);
    Meteor.call('removeDiner', FlowRouter.getParam('id'), this.guestId);
  }
});

// Template.isNotHost(function(){
//   console.log(self.userId);
//   //  console.log(event.host);
//   // if(self.userId == event.host){
// //   ,
// isNotHost: ()=>{
//   console.log("ese");
//   console.log(self.userId);
//   console.log(this.events.host);
//   if(self.userId == events.host){
//     console.log("illega");
//   }
// }
//   //
//   // }
// });

import { Template } from 'meteor/templating';

Template.Event.helpers({
  dinnerRole: function() {
    if (this.host == Meteor.userId()) {
      return "dinner-host";
    } else if (this.tc) {
      return this.text.tc;
    }
  }
});

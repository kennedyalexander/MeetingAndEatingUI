import { Template } from 'meteor/templating';

Template.Event.helpers({
  dinnerRole: function() {
    var eventGuests = this.guests;

    console.log();
    if (this.host == Meteor.userId()) {
      return "dinner-host";
    } else if (eventGuests.find(findIfIsGuest)) {
      return "dinner-guest";
    }
  }
});

function findIfIsGuest(guestItem){
 return guestItem.name == Meteor.userId();
}

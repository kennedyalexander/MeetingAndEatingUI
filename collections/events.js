import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Events = new Mongo.Collection('events');

Events.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

EventSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  },
  seats: {
    type: Number,
    label: "Seats"
  },
  guests: {
      type: Array,
       optional: true,
       autoform:{
         type: "hidden"
       }
   },
   "guests.$": Object,
   "guests.$.name": String,
   "guests.$.guestId": {
     type: String
    //  autoform: {
    //    type: "hidden"
    //  }
   },

location: {
  type: String,
  label: "Location"
},
eventDate: {
  type: Date,
  label: "Date"
},
invitesOpen:{
  type:Boolean,
  defaultValue: false,
  optional: true,
  autoform:{
    type: "hidden"
  }
},
dinnerStatus:{
  type:String,
  defaultValue: "unPublished",
  autoform: {
    type: "hidden"
  }
},
host: {
  type: String,
  label: "Host",
  autoValue: function() {
    return this.userId
  },
  autoform: {
    type: "hidden"
  }
},
createdAt: {
  type: Date,
  label: "CreateAt",
  autoValue: function() {
    return new Date()
  },
  autoform: {
    type: "hidden"
  }
}

});


Meteor.methods({
  toggleDinnerAttendance:function( eventId){
    if(Events.host != Meteor.userId()){
       Events.update({_id:eventId},
         { $addToSet: {'guests': {
           name: Meteor.userId(),
           guestId: Meteor.userId()
         }
       }
     },
   {getAutoValues:false});
    }
},//Problem with events.jost
publishDinner:function(eventId, dinnerState){
  if(Events.host == Meteor.userId()){
  console.log("publishig dinner" + dinnerState);
    Events.update({_id:eventId},
      {$set: {
        'dinnerStatus': dinnerState
      }
    });
  }
}
});

Events.attachSchema(EventSchema);

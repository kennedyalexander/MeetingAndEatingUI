import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Events = new Mongo.Collection('events');

Events.allow({
  insert: function(userId, doc) {
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
      type: Array
   },
   "guests.$": Object,
   "guests.$.name": String,
   "guests.$.id": {
     type: String,
     autoform: {
       type: "hidden"
     }
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

Events.attachSchema(EventSchema);

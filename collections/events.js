import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Events = new Mongo.Collection('events');

EventSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  },
  location: {
    type: String,
    label: "Location"
  },
  eventDate: {
    type: Date,
    label: "Date"
  },
  host:{
    type: String,
    label: "Host",
    autoValue: function(){
      return this.userId()
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt:{
    type: Date,
    label: "CreateAt",
    autoValue: function(){
      return new Date()
    },
    autoform:{
      type: "hidden"
    }
  }

});

Events.attachSchema(EventSchema);

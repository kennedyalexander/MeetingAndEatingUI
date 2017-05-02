import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log(Meteor.settings.oranges);
  // code to run on server at startup
});

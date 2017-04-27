Users = new Mongo.Collection('users');

UserSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "FirstName"
  },
  lastName: {
    type: String,
    label: "LastName"
  }
  emailAddress: {
    type: String,
    label: "EmailAddress"
  }
});

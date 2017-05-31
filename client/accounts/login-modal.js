import { Template } from 'meteor/templating';
Template.LoginModal.events({
  'click .close-login': ()=> {
    Session.set('nav-toggle', '');
  }
});

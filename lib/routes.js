Accounts.onLogin(function(){
  FlowRouter.go('my-dinners');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name:'home',
  action() {
    if(Meteor.userId()){
      FlowRouter.go('host-dinner');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/host-dinner', {
  name:'host-dinner',
  action() {
    BlazeLayout.render('PrimaryLayout', {main: 'HostDinner'});
  }
});

FlowRouter.route('/find-dinners', {
  name:'find-dinners',
  action() {
    BlazeLayout.render('PrimaryLayout', {main: 'SearchDinners'});
  }
});
FlowRouter.route('/my-dinners', {
  name:'my-dinners',
  action() {
    BlazeLayout.render('PrimaryLayout', {main: 'MyDinners'});
  }
});

FlowRouter.route('/event/:id', {
  name:'event',
  action() {
    BlazeLayout.render('PrimaryLayout', {main: 'EventSingle'});
  }
});

FlowRouter.route('/', {
  name:'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/users-events', {
  name:'users-events',
  action() {
    BlazeLayout.render('PrimaryLayout', {main: 'events'});
  }
});

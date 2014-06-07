Meteor.Router.add({
  '/': {to: 'postsList', as: 'posts'},
  '/posts': {to: 'postsList', as: 'posts'},
  '/nearposts': {to: 'nearPostsList', as: 'nearposts'},
  '/map': {to: 'mapPostsList', as: 'mapposts'},
  '/posts/:_id': {
    to: 'postPage',
    and: function(id) {Session.set('currentPostId', id); }
  },
  '/checkin/:_id': {
    to: 'checkinPage',
    and: function(id) {Session.set('currentPostId', id); }
  }    
});

Meteor.Router.filters({
  'clearErrors': function(page) {
    clearErrors();
    return page;
  },
  'requireLocation': function(page) {
    if(Session.get('location')){
      return page;
    }else {
      return 'geolocationDenied';
    }
  }
});

Meteor.Router.filter('requireLocation', {only: ['nearPostsList', 'mapPostsList']});
Meteor.Router.filter('clearErrors');
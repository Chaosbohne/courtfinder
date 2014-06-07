Template.header.helpers({
  isActive: function() {
    console.log('moin');
    return true;
  },
  isWidth: function() {
    if(document.body.clientWidth < 460)
      return false;
    return true;
  }
});

Template.header.events({
  'click .menubtn': function(event) {
    event.preventDefault();
    Meteor.Router.to('menu');
  }
});
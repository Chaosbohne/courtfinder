Template.checkinPage.helpers({
  checkinPost: function() {
    return Posts.findOne(Session.get('currentPostId'));
  }
});
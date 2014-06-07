Template.error.helpers({
  postsReady: function() {
    //console.log(this.data);
  }
});

Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.update(error._id, {$set: {seen: true}});
  });
};

Template.error.events({
  'click .close': function(event) {
    event.preventDefault();
    Errors.remove({_id : this._id});
  }
});
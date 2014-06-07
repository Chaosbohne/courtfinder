Template.postItem.helpers({
  joinCount: function() {
    return Joiners.find({postId: this._id}).count();
  }
});

Template.join.helpers({
  remaining: function() {
    return (this.duration - (new Date).getTime()) / 60 / 1000;
  },
  notLast: function() {
    var joiners =  Joiners.find({postId: Session.get('currentPostId')}).count();
    
    var hrCount = $('.well').children().length;

    if(hrCount < joiners -1)
      return true;
    return false;
    
  }
});


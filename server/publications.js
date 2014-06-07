Meteor.publish('topPosts', function(limit) {
    var myPosts = new Array();
    var allPosts = Posts.find();

    allPosts.forEach(function (post) {
      post.count = Joiners.find({postId: post._id}).count();
      myPosts.push(post);
    });
    
    myPosts.sort(function(a, b) {
      if(a.count < b.count)
        return -1;
      return 1;
    });
    
    var topPosts = myPosts.reverse().slice(0, limit);
    var retPosts = new Array();
    topPosts.forEach(function (post) {
      retPosts.push(post._id);
    });
    
    
    return Posts.find( 
      { 
        _id:{ $in : retPosts } 
      }
    );
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('nearPosts', function(location, limit) {
  return location && Posts.find({ location : { '$near' : [ location.lat , location.lng] } }, {limit: limit} );
});

Meteor.publish('joiners', function() {
  return Joiners.find();
});
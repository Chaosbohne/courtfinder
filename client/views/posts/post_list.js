Template.postsList.helpers({
  posts: function() {
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

    return myPosts.reverse().slice(0, topPostsHandle.limit());
  },
  postsReady: function() {
    return !topPostsHandle.loading();
  },
  allPostsLoaded: function()  {
    return !topPostsHandle.loading() && Posts.find().count() < topPostsHandle.loaded();
  }
});
  
Template.postsList.events({
  'click .load-more': function(event) {
    event.preventDefault();
    topPostsHandle.loadNextPage();
  }
});





Template.nearPostsList.helpers({
  posts: function() {  
    var myPosts = new Array();
    var allPosts = Posts.find();

    allPosts.forEach(function (post) {
      var p1 = post.location;
      var p2 = Session.get('location');
      
      var R = 6371; // Radius of the Earth in km
      var dLat = (p2.lat - p1.lat) * Math.PI / 180;
      var dLon = (p2.lng- p1.lng) * Math.PI / 180;
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      post.distance = d;
      myPosts.push(post);
    });
    
    myPosts.sort(function(a, b) {
      if(a.distance < b.distance)
        return 1;
      return -1;
    });
    
    return myPosts.reverse().slice(0, nearPostsHandle.limit());
  },
  postsReady: function() {
    return !nearPostsHandle.loading();
  },
  allPostsLoaded: function()  {
    return !nearPostsHandle.loading() && Posts.find().count() < nearPostsHandle.loaded();
  }
});

Template.nearPostsList.events({
  'click .load-more': function(event) {
    event.preventDefault();
    nearPostsHandle.loadNextPage();
  }
});

Template.mapPostsList.rendered = function() {  
  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions); 

  var p2 = Session.get('location');

  map.setCenter(new google.maps.LatLng(p2.lat, p2.lng));
  var marker = new google.maps.Marker({
        position: new google.maps.LatLng(p2.lat, p2.lng),
        title:'Meine Position',
        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });
  marker.setMap(map);   
  
  Session.set('map', true);
};

Template.mapPostsList.destroyed = function() {
  Session.set('map', false);
};

/*
Todos:
 - Loadmore button zentrieren
 - das Eingabefeld beim Slider, verschiebt den Slider nicht, wenn eingabe über 
   dieses Feld erfolgt.
 - Reload der detailview, wenn eintrag gemacht wird -> reload der map  

*/


topPostsHandle = Meteor.subscribeWithPagination('topPosts', 5);


Deps.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
});

Deps.autorun(function() {
  nearPostsHandle = Meteor.subscribeWithPagination('nearPosts', Session.get('location'), 5);
});


Deps.autorun(function() {
  
  var isMap = Session.get('map');
  if(isMap) {
    var allPosts = Posts.find();
    allPosts.forEach(function (post) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(post.location.lat, post.location.lng),
        title: post.title,
        postId: post._id,
        icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      });
      marker.setMap(map);
      google.maps.event.addListener(marker, "click", function() {
        Meteor.Router.to('/posts/'+marker.postId);
      });
    });    
  }
});

Meteor.subscribe('joiners');

/*
Deps.autorun(function() {
  Meteor.render(Template.header);
});*/
Template.postDetail.helpers({
  joiners: function() {
    return Joiners.find({postId: this._id});
  },

  joinCount: function() {
    return Joiners.find({postId: this._id}).count();
  },
  
  isDistance: function() {
    return Session.get('location');
  },
  
  distance: function() {  
    var p1 = this.location;
    var p2 = Session.get('location');
    
    var R = 6371; // Radius of the Earth in km
    var dLat = (p2.lat - p1.lat) * Math.PI / 180;
    var dLon = (p2.lng- p1.lng) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  
});

Template.postDetail.rendered = function() {  
  
  var mapOptions = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  mapDetail = new google.maps.Map(document.getElementById("map-canvas-detail"),
      mapOptions); 

  p2 = Posts.findOne({_id : Session.get('currentPostId')}).location;
  mapDetail.setCenter(new google.maps.LatLng(p2.lat, p2.lng));
  var marker = new google.maps.Marker({
        position: new google.maps.LatLng(p2.lat, p2.lng),
        title:'Court',
        icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
  marker.setMap(mapDetail);   
};
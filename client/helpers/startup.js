function foundLocation(position) {
  /*if(Meteor.user()) {
    Meteor.users.update(Meteor.userId(),{$set: {profile: {location : { lat: position.coords.latitude, lng: position.coords.longitude }}}});
  }*/
  Session.set('location', { lat: position.coords.latitude, lng: position.coords.longitude });
}
  
function noLocation(error) {
  throwError('Keine Standortbestimmung möglich!');
}

Meteor.startup(function() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
  }
});


Meteor.startup(function() {
  window.onresize = function(e) {
   $('.resize-head').html(Meteor.render(Template.header));
  };
});
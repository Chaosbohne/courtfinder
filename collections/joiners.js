Joiners = new Meteor.Collection('joiners');

Meteor.methods({
  checkin: function(joinAttributes) {
    var post = Posts.findOne(joinAttributes.postId);
    
    if(joinAttributes.username.length < 3) {
      throw new Meteor.Error(422, "Benutzername muss aus mindestens 3 Zeichen bestehen!");
    }
 
    if(joinAttributes.username.length > 15) {
      throw new Meteor.Error(422, "Benutzername darf nicht mehr als 15 Zeichen beinhalten!");
    } 
 
    var join = Joiners.findOne({username: joinAttributes.username});
    if(join) {
      throw new Meteor.Error(401, "Benutzername wird bereits genutzt!");
    }
    
    if(!(joinAttributes.duration === '1' ||
    joinAttributes.duration === '2' ||
    joinAttributes.duration === '3' ||
    joinAttributes.duration === '4' ||
    joinAttributes.duration === '5' ||
    joinAttributes.duration === '6')) {
      throw new Meteor.Error(422, "Keine gültige Dauer!");
    }
    
    
    var join = {
      postId: joinAttributes.postId,
      username: joinAttributes.username,
      submitted: new Date().getTime(),
      duration: new Date().getTime() + joinAttributes.duration * 3600 * 1000
    };
          
    return Joiners.insert(join);       
  }  
});
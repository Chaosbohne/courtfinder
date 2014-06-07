
    
/*
var deleteExpiredJoiners = function() {
  console.log('cronjob');
  var joiners = Joiners.find();
  joiners.forEach(function (joiner) {
    if(joiner.duration - (new Date).getTime() < 5000) {
      console.log('CronJob deleted');
      Joiners.remove({_id : joiner._id});
    }
  });
}
*/

Meteor.setInterval(function(){
  console.log('cronjob');
  var joiners = Joiners.find();
  joiners.forEach(function (joiner) {
    if(joiner.duration - (new Date).getTime() < 0) {
      console.log('CronJob deleted');
      Joiners.remove({_id : joiner._id});
    }
  });
},3000)
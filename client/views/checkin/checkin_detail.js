Template.checkinDetail.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var join = {
      username: $(event.target).find('[name=username]').val(),
      duration: $(event.target).find('[name=duration]').val(),
      postId: template.data._id
    };
    
    Meteor.call('checkin', join, function(error) {
      if(error) {
        throwError(error.reason);
      }else{
        //throwMessage('Checkin complete :)');
        Meteor.Router.to('posts');
      }
    });
  }
});

Template.checkinDetail.rendered = function() {  
  $( ".noUiSlider" ).slider({
         min:1,
         max:6,
         change: function( event, ui )
         {
            $("#slider-input").attr("value", ui.value);
         }
      });
};
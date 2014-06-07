Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.insert({message: message, seen: false, isError: true});
};

throwMessage = function(message) {
  Errors.insert({message: message, seen: false, isError: false});
};

clearErrors = function() {
  Errors.remove({seen: true});
};

Handlebars.registerHelper('timeMeasurement', function(time) {
  if(time > 60) {
    return Math.round(time / 60) + ' h';
  }else {
    return Math.round(time) + ' min';
  }
});

Handlebars.registerHelper('distanceMeasurement', function(distance) {
  if(distance > 1) {
    return Math.round(distance) + 'km';
  }else {
    return Math.round(distance * 100) + 'm';
  }
});
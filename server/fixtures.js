if(Posts.find().count() === 0) {
  
  /*
  var tomId = Meteor.users.insert({
    profile: {name: 'Tom Coleman'}
  });
  
  var sachaId = Meteor.users.insert({
    profile: {name: 'Sacha Greif'}
  });  
  
  var ricoId = Meteor.users.insert({
    profile: {name: 'Rico Bic'}
  });  
  
  var alexId = Meteor.users.insert({
    profile: {name: 'Alex Breskos'}
  });  
  
  var daniloId = Meteor.users.insert({
    profile: {name: 'Danilos Klosos'}
  });  
  
  var tom = Meteor.users.findOne(tomId);
  var sacha = Meteor.users.findOne(sachaId);
  var rico = Meteor.users.findOne(ricoId);
  var alex = Meteor.users.findOne(alexId);
  var danilo = Meteor.users.findOne(daniloId);
  */
  var Ostra = Posts.insert({
    shortName: 'Ostra',
    title: 'Sportanlage Ostragehege',
    description: 'Im neuen Sportpark Ostra. Angenehmer Sportplatz.',
    address: 'Pieschener Allee 18 01067 Dresden', 
    location: { lat: 51.063001, lng: 13.727369 }
  });
  
  var Ostra1 = Posts.insert({
    shortName: 'Hochschulstraße',
    title: 'Freiplatz Hochschulstraße',
    description: 'Eine Korbanlage zwischen den Studentenwohnheimen.',
    placeName: 'Hochschulstrasse 50 01069 Dresden',
    location: { lat: 51.031420, lng: 13.730966}
  });
  
  var Ostra2 = Posts.insert({
    shortName: 'Wundtstraße',
    title: 'Freiplatz Wundtstraße',
    description: 'Eine Korbanlage zwischen den Studentenwohnheimen.',
    placeName: 'Wundtstrasse 5 01217 Dresden',
    location: { lat: 51.029030, lng: 13.749835 }
  });
  
  var Ostra3 = Posts.insert({
    shortName: 'Spener',
    title: 'Multifunktionsplatz Spenerstraße',
    description: 'Ein schoener Platz in der Naehe des Waldparks.',
    placeName: 'Spenerstrasse 1 01309 Dresden',
    location: { lat: 51.050803, lng: 13.788194 }
  });  
  
  var Ostra4 = Posts.insert({
    shortName: 'Dürer',
    title: 'Freiplatz Dürerstraße',
    description: 'Einer der beliebtesten Freiplaetze in Dresden.',
    placeName: 'Dürerstraße 77 01307 Dresden',
    location: { lat: 51.051104, lng: 13.767961 }
  });    
  
  var Ostra5 = Posts.insert({
    shortName: 'Meyer-Straße',
    title: 'Freiplatz Meyer-Straße',
    description: 'Ein schöner Platz direkt am Spielplatz.',
    placeName: 'Johann-Meyer-Straße 36 01097 Dresden',
    location: { lat: 51.076510, lng: 13.745586 }
  });  
  
  var Ostra6 = Posts.insert({
    shortName: 'Albertstadt',
    title: 'Freiplatz Albertstadt',
    description: 'Der Platz befindet sich in der Nähe der Dresdner Heide.',
    placeName: 'Marienallee 14 01099 Dresden',
    location: { lat: 51.075010, lng: 13.772349 }
  });   
  
  var Ostra7 = Posts.insert({
    shortName: 'Kästnerstraße',
    title: 'Freiplatz Kästnerstraße',
    description: 'Ein Platz mitten im Herzen von Prohlis.',
    placeName: 'Erich-Kästner-Straße 4 01257 Dresden',
    location: { lat: 50.996224, lng: 13.805759 }
  });   
  
  var Ostra8 = Posts.insert({
    shortName: 'Fritz-Löffler',
    title: 'Wohnheim Fritz-Löffler-Straße',
    description: 'Hinter den Wohnheimen am Stundentenwerk befindet sich dieser schöne Platz.',
    placeName: 'Winckelmannstraße 8 01069 Dresden',
    location: { lat: 51.037294, lng: 13.730835}
  });   
 
  var Ostra9 = Posts.insert({
    shortName: 'Bürgerwiese',
    title: 'Gymnasium Bürgerwiese Parkstraße',
    description: 'Der Sportplatz gehört zum Schulgebäude.',
    placeName: 'Parkstraße 4 01069 Dresden',
    location: { lat: 51.039212, lng: 13.743832}
  });  
 
  var Ostra10 = Posts.insert({
    shortName: 'Mozartstraße',
    title: 'Freiplatz Mozartstraße',
    description: 'Ein schöner Platz am Großen Garten.',
    placeName: 'Wiener Straße 47 01219 Dresden',
    location: { lat: 51.035656, lng: 13.752630}
  }); 
 
  Joiners.insert({
    postId: Ostra,
    username: 'tom',
    submitted: (new Date).getTime() - 7 * 3600 * 1000,
    duration: (new Date).getTime() + 7 * 3600 * 1000
  });
  
  Joiners.insert({
    postId: Ostra,
    username: 'danilo',
    submitted: (new Date).getTime() - 10 * 3600 * 1000,
    duration: (new Date).getTime() + 3 * 3600 * 1000
  });  

  Joiners.insert({
    postId: Ostra,
    username: 'rico',
    submitted: (new Date).getTime() - 3 * 3600 * 1000,
    duration: (new Date).getTime() + 3 * 3600 * 1000
  });  
  
  Joiners.insert({
    postId: Ostra1,
    username: 'alex',
    submitted: (new Date).getTime() - 7 * 3600 * 1000,
    duration: (new Date).getTime() + 3 * 3600 * 1000
  }); 
  
  Joiners.insert({
    postId: Ostra1,
    username: 'sacha',
    submitted: (new Date).getTime() - 12 * 3600 * 1000,
    duration: (new Date).getTime() + 3 * 3600 * 1000
  }); 
  
  Joiners.insert({
    postId: Ostra1,
    username: 'sacha',
    submitted: (new Date).getTime() - 12 * 3600 * 1000,
    duration: (new Date).getTime() + 5 * 1000
  });   
  
  Joiners.insert({
    postId: Ostra,
    username: 'sacha',
    submitted: (new Date).getTime() - 12 * 3600 * 1000,
    duration: (new Date).getTime() + 6 * 1000
  });     
  
  
Posts.insert({
shortName: 'Energiearena',
title: 'EnergieVerbund Arena',
description: 'Eine große Halle mit vielen Basketballkörben.',
placeName: 'Magdeburger Straße 10, 01167 Dresden',
location: { lat: 51.061829, lng: 13.722028}
});

Posts.insert({
shortName: 'DSC',
title: 'DSC Sporthalle',
description: 'Eigentlich für Volleyball genutzt. Eignet sich aber auch für Basketball.',
placeName: 'Magdeburger Straße 12 01067 Dresden',
location: { lat: 51.062949, lng: 13.720547}
});

Posts.insert({
shortName: 'Margonarena',
title: 'Margon Arena',
description: 'Die Spielstätte der Dresden Titans',
placeName: 'Bodenbacher Straße 154 01277 Dresden',
location: { lat: 51.022772, lng: 13.808649}
});

Posts.insert({
shortName: 'HTW',
title: 'TH 117. Grundschule',
description: 'Die Turnhalle der HTW Dresden',
placeName: 'Reichenbachstraße 12 01069 Dresden',
location: { lat: 51.033528, lng: 13.733508}
});

Posts.insert({
shortName: 'Großzschachwitz',  
title: 'Gymnasium Großzschachwitz',
description: 'Eine etwas ältere Halle zum Spielen',
placeName: 'Rathener Str. 78 01259 Dresden',
location: { lat: 51.00213, lng: 13.834959}
});

Posts.insert({
shortName: 'Bühlau',  
title: 'Turnhalle Gymnasium Dresden-Bühlau',
description: 'Eine sehr moderne Halle',
placeName: 'Quohrener Str. 12 01324 Dresden',
location: { lat: 51.060386, lng: 13.856117}
});

Posts.insert({
shortName: 'Hülße',  
title: 'SH Hülße Gymnasium',
description: 'Halle des Hüßle Gymnasiums',
placeName: 'Hülßestr. 16 01237 Dresden',
location: { lat: 51.012648, lng: 13.790971}
});

Posts.insert({
shortName: '128',  
title: 'TH 128. Mittelschule',
description: 'Halle der 128. Mittelschule Dresden',
placeName: 'Rudolf-Bergander-Ring 5 01219 Dresden',
location: { lat: 51.021678, lng: 13.778805}
});

Posts.insert({
shortName: 'Weißer Hirsch',  
title: 'TH am Weißen Hirsch',
description: 'Eine Turnhalle direkt am Weißen Hirsch',
placeName: 'Kurparkstr. 1 01324 Dresden',
location: { lat: 51.063124, lng: 13.825754}
});

Posts.insert({
shortName: 'Otto-Dix',  
title: 'TH 129. Grundschule',
description: 'Die Turnhalle der 129. Grundschule in Dresden',
placeName: 'Otto-Dix-Ring 57 01219 Dresden',
location: { lat: 51.018344, lng: 13.776616}
});
  
  Posts._ensureIndex({'location':'2d'});
  
}
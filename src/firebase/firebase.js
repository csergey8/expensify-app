import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAf8pybxykJQKpH0VUOKdtUqSvLZQu4P0E",
    authDomain: "expesify.firebaseapp.com",
    databaseURL: "https://expesify.firebaseio.com",
    projectId: "expesify",
    storageBucket: "expesify.appspot.com",
    messagingSenderId: "547466098089"
  };

  
  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
    name: "Test",
    age: 26,
    isSingle: false,
    location: {
        city: 'Phildelfia',
        country: 'USA'
    },
    attributes: ''
  });

  database.ref('attributes').set({
      height: 193,
      weight: 73
  })
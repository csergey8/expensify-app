import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: 'AIzaSyAf8pybxykJQKpH0VUOKdtUqSvLZQu4P0E',
    authDomain: 'expesify.firebaseapp.com/',
    databaseURL: 'https://expesify.firebaseio.com/',
    projectId: 'expesify'
  };


/*

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  */
  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { firebase, googleAuthProvider, database as default }    
  
//   database.ref('expenses').on('child_changed', (snapshot)=> {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

//   database.ref('expenses').push(
//     {
//         id: 1,
//         description: 'Gum',
//         note: '',
//         amount: 195,
//         createdAt: 0
//     });


/*   database.ref().set({
    name: "Test",
    age: 26,
    isSingle: false,
    location: {
        city: 'Phildelfia',
        country: 'USA'
    },
    attributes: ''
  }).then(() => {
      console.log('data was saved');
  }).catch((e) => {
    console.log('This failed', e);
  });

  database.ref('attributes').set({
      height: 193,
      weight: 73
  }) */
  
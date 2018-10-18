import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWUrv8VCOlgmdSrgxwa8V8Md5YC2SQeNI",
    authDomain: "m-city-fb0d8.firebaseapp.com",
    databaseURL: "https://m-city-fb0d8.firebaseio.com",
    projectId: "m-city-fb0d8",
    storageBucket: "m-city-fb0d8.appspot.com",
    messagingSenderId: "632309785611"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');


export {
    firebase,
    firebaseMatches
}
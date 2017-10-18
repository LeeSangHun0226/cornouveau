import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAlEL1MaWfOqIzR998uMa4mgYqhrm48X1w",
  authDomain: "cornouveau-20b16.firebaseapp.com",
  databaseURL: "https://cornouveau-20b16.firebaseio.com",
  projectId: "cornouveau-20b16",
  storageBucket: "cornouveau-20b16.appspot.com",
  messagingSenderId: "516342777038"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

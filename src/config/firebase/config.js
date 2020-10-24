import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAleWQEOZOAJZN_a9IC_2MSFmHi9uRIsTQ",
  authDomain: "reactfirebase-cf9da.firebaseapp.com",
  databaseURL: "https://reactfirebase-cf9da.firebaseio.com",
  projectId: "reactfirebase-cf9da",
  storageBucket: "reactfirebase-cf9da.appspot.com",
  messagingSenderId: "578343128074",
  appId: "1:578343128074:web:270eeba6ce659f562063f3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

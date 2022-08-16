//* This imports will tell next to bundle this SDKs into the main bundle.js file
//* that will be set down to the client application.

// v9 compat packages are API compatible with v8 code
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//* Taken from the web app config in firebase site
const firebaseConfig = {
  apiKey: "AIzaSyDknC1-zyyKzQ_p1v0yiAQbQYfS2E55Qos",
  authDomain: "devclone-aba9d.firebaseapp.com",
  projectId: "devclone-aba9d",
  storageBucket: "devclone-aba9d.appspot.com",
  messagingSenderId: "806556956023",
  appId: "1:806556956023:web:d111ff9fa2a5659c225d72",
  measurementId: "G-QQZ0E9RL7P",
};

//*  Connect react app to firebase or the cloud database
//* This don't let the firebase initialize twice.will only initialize if the length is 0.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//* To use it the app
export const auth = getAuth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
//* This will tell the provider what to use when pop up model for the user to sign-in
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

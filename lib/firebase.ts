//* This imports will tell next to bundle this SDKs into the main bundle.js file
//* that will be set down to the client application.

// v9 compat packages are API compatible with v8 code
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

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

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: any) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

//* To use it the app
// Ensure that "db" is defined and initialized
export const db = getFirestore();

export const auth = getAuth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
//* This will tell the provider what to use when pop up model for the user to sign-in
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Use this function to convert a Firestore timestamp to a number.
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

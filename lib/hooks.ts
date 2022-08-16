//* firebase
import { auth, firestore } from "../lib/firebase";
//* react
import { useEffect, useState } from "react";
//* hooks
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";

//* Custom hook to read  auth record and user profile doc
export function useUserData() {
  // * Get current user from firebase
  const [user] = useAuthState(auth);

  // * Hold user profile data
  const [username, setUsername] = useState(null);

  // * Listen to any <changes> in the user profile doc or user obj
  useEffect(() => {
    //* turn off realtime subscription
    let unsubscribe;

    if (user) {
      // * If we have user Get the user that matches the user id in the collection in firebaseStore
      const ref = firestore.collection("users").doc(user.uid);
      // * Firebase return function that when it's called it unsubscribes to this data
      unsubscribe = ref.onSnapshot((doc) => {
        //* Return Latest data from the doc or dataBase
        setUsername(doc.data()?.username);
      });
    } else {
      // * If we don't have a user = null
      setUsername(null);
    }
    // * When the user doc's is no longer needed
    return unsubscribe;
  }, [user]);

  return { user, username };
}

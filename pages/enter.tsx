import Image from "next/image";
import GoogleImg from "../public/googleImg.png";
// init exported methods from firebase
import { auth, googleAuthProvider, firestore, db } from "../lib/firebase";
//react hook
import { useContext } from "react";
// grab the context from the context file
import { UserContext } from "../lib/context";
// handle popUP for google sign in
import { signInWithPopup } from "firebase/auth";
// check after stop typing
import debounce from "lodash.debounce";
import { useEffect, useState, useCallback } from "react";
import {
  collection,
  addDoc,
  setDoc,
  DocumentChange,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";

export default function EnterPage() {
  //* Take all the user context
  const userContext = useContext(UserContext);

  return (
    <main>
      {/* <Metatag title="Enter" description="Sign up for this amazing app!" /> */}
      {userContext?.user ? (
        !userContext.username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
//* Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    // await google auth provider
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <Image src={GoogleImg} alt="google icon" priority /> Sign in with Google
    </button>
  );
}

//* Sign out button
function SignOutButton() {
  //* The sign-Out methods come from firebase > which remove the JSON Web Token that Store in the browser to mage the Authentication state in the frontEnd
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

// Username form
function UsernameForm(): JSX.Element | any {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // Create refs for both documents (ref is a reference to a document)
    const userDoc: DocumentReference<DocumentData> | any = await addDoc(
      collection(db, `users`),
      {
        uid: userContext.user.uid,
        displayName: userContext.user.displayName,
      }
    );
    const usernameDoc: DocumentReference<DocumentData> | any = await addDoc(
      collection(db, `usernames`),
      {
        username: formValue,
      }
    );

    // this will change it & merge it with the existing document.
    setDoc(userDoc, { capital: true }, { merge: true });
    setDoc(usernameDoc, { capital: true }, { merge: true });

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, {
      username: formValue,
      displayName: userContext?.user.displayName,
    });
    batch.set(usernameDoc, { uid: userContext.user.uid });

    await batch.commit();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  //

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log("Firestore read executed!");
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  return (
    !userContext?.username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input
            name="username"
            placeholder="myname"
            value={formValue}
            onChange={onChange}
          />
          <UsernameMessage
            username={formValue}
            isValid={isValid}
            loading={loading}
          />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>

          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}

type UsernameMessageProps = {
  username: string;
  isValid: boolean;
  loading: boolean;
};
function UsernameMessage({ username, isValid, loading }: UsernameMessageProps) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>;
  } else if (username && !isValid) {
    return <p className="text-danger">That username is taken!</p>;
  } else {
    return <p></p>;
  }
}

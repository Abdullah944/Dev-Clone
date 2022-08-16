import Image from "next/image";
import GoogleImg from "../public/googleImg.png";
// init exported methods from firebase
import { auth, googleAuthProvider } from "../lib/firebase";
//react hook
import { useContext } from "react";
// grab the context from the context file
import { UserContext } from "../lib/context";
// handle popUP for google sign in
import { signInWithPopup } from "firebase/auth";

export default function EnterPage() {
  //* Take all the user context
  const userContext = useContext(UserContext);

  return (
    <main>
      {/* If the user Sign-in */}
      {userContext?.user ? (
        // * If the user sign-in BUT have no username > Show the Form
        !userContext.username ? (
          <UsernameForm />
        ) : (
          <SignOutButton /> //* else > user signed in, has username ==> <SignOutButton />
        )
      ) : (
        <SignInButton /> //* else from the <top> > If the User not Sign-in or Sign-out
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

function UsernameForm() {
  return null;
}

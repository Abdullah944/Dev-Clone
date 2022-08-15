import Image from "next/image";
import { auth, googleAuthProvider } from "../lib/firebase";
import GoogleImg from "../public/googleImg.png";
import { useContext } from "react";
import { UserContext } from "../lib/context";

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
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <Image src={GoogleImg} alt="google icon" /> Sign in with Google
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

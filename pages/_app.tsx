import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  //*  This is costume hook to get all the user from firebaseStore & we can use it in all app as props
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        {/* Add the NavBar for all the components */}
        <Navbar />
        <Component {...pageProps} />

        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;

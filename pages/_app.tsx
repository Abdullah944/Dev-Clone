import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the NavBar for all the components */}
      <Navbar
        user={{
          photoURL: "",
        }}
        username={""}
      />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;

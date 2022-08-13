import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Loader show />
      {/* EX of using Toast library */}
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
};

export default Home;

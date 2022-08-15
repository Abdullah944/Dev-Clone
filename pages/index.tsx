import type { NextPage } from "next";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

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

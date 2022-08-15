import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
  const userContext = useContext(UserContext); //* it will rerender every changes in the app for the context

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* User is <signed-in> and <has> username */}
        {userContext?.username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              {/* <Link href={`/${userContext.username}`}> */}
              {/* <Image src={userContext.photoURL} alt="user img" />  */}
              {/* </Link> */}
            </li>
          </>
        )}
        {/* User is <not> signed OR has <not> created username */}
        {!userContext?.username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

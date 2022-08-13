import Image, { StaticImport } from "next/image";
import Link from "next/link";
import React from "react";

type NavbarProps = {
  user: {
    photoURL: string | StaticImport;
  };
  username: string;
};
export default function Navbar({ user, username }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* User is <signed-in> and <has> username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <Image src={user?.photoURL} alt="user img" />
              </Link>
            </li>
          </>
        )}

        {/* User is <not> signed OR has <not> created username */}
        {!username && (
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

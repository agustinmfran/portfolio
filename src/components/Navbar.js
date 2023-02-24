import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between space-x-4 md:flex md:space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/AboutSection">About</Link>
        </li>
        <li>
          <Link href="/ProjectsSection">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between space-x-4 md:flex md:space-x-6">
        <li>
          <Link
            className="cursor-pointer text-base hover:text-lg hover:text-teal-500 hover:transition duration-300 "
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer text-base hover:text-lg hover:text-teal-500 hover:transition duration-300"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer text-base hover:text-lg hover:text-teal-500 hover:transition duration-300"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

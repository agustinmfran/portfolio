import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex justify-center pb-4 pt-4 md:py-5 md:block">
            <Link
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <h2 className="text-2xl font-bold border-b-2 border-teal-500">
                Agustín Franco
              </h2>
            </Link>
          </div>
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;

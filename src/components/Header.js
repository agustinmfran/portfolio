import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex justify-center pb-4 pt-4 md:py-5 md:block">
            <h2 className="text-2xl font-bold">Agustin Franco</h2>
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

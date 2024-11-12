import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="  w-full bg-stone-600 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">MelodyVerse</h1>
      <div className="flex space-x-4">
        <Link
          to="/signup"
          className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-orange-400"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-orange-400"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

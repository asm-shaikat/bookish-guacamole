import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navList = (
    <>
      <li className="lg:mx-4 my-2 lg:my-0">
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive ? "text-green-600 border-2 border-green-600" : "text-green-600 hover:text-green-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mx-4 my-2 lg:my-0">
        <NavLink
          to="/listed-books"
          className={({ isActive }) => 
            isActive ? "text-green-600 border-2 border-green-600" : "text-green-600 hover:text-green-500"
          }
        >
          Listed Book
        </NavLink>
      </li>
      <li className="lg:mx-4 my-2 lg:my-0">
        <NavLink
          to="/page-to-read"
          className={({ isActive }) => 
            isActive ? "text-green-600 border-2 border-green-600" : "text-green-600 hover:text-green-500"
          }
        >
          Page to Read
        </NavLink>
      </li>
      {/* Sign In and Sign Up for mobile */}
      <li className="block lg:hidden my-2">
        <NavLink to="/signin" className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 mx-2">
          Sign In
        </NavLink>
      </li>
      <li className="block lg:hidden my-2">
        <NavLink to="/signup" className="btn bg-cyan-500 text-white hover:bg-cyan-600 px-4 py-2">
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-50 shadow-md p-4">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-accent mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white"
          >
            {navList}
          </ul>
        </div>
        <NavLink to="/">
          <p className="text-3xl font-bold text-green-600 lg:ml-4">Bookish</p>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navList}
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <NavLink className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 mx-2">
          Sign In
        </NavLink>
        <NavLink className="btn bg-cyan-500 text-white hover:bg-cyan-600 px-4 py-2">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

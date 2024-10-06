import { useState } from "react";
import Books from "../Books/Books";
import ToRead from "../ToRead";
import { NavLink } from "react-router-dom";

const Home = () => {
            
    return (
      <>
        <div className="bg-slate-200 text-black mt-8 p-8 md:p-14 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-2/4">
            <div className="text-center w-full md:w-3/4">
              <p className="text-2xl md:text-4xl">
                Books to freshen up your bookshelf
              </p>
            </div>
            <div className="mt-4 md:mt-2">
            <NavLink to="/listed-books">
              <button className="btn btn-success text-white m-2">
                View The List
              </button>
            </NavLink>
            </div>
          </div>
          <div className="w-full md:w-2/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <img
              className="max-w-full h-auto"
              src="/public/Assets/book-3d.png"
              alt="3D Book"
            />
          </div>
        </div>
      </div>
      <Books></Books>
      </>
    );
  };
  
  export default Home;
  
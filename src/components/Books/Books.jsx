import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ToRead from "../ToRead";

const Books = () => {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    fetch("book-data.json")
      .then((response) => response.json())
      .then((data) => setBooklist(data));
  }, []);

  return (
    <ToRead>
      <div className="mt-8">
        <div>
          <p className="text-2xl md:text-3xl text-black font-semibold mb-6">
            Books
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {booklist.map((book) => (
              <NavLink key={book.bookId} to={`book-detail/${book.bookId}`}>
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 w-full sm:w-96">
                  <div className="card bg-gray-100 shadow-xl">
                    <figure>
                      <img
                        src={book.image}
                        alt={`${book.bookName} cover`}
                        className="w-32 h-44 p-4 mt-4"
                      />
                    </figure>

                    <div className="card-body bg-white text-black">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {book.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="badge bg-gray-100 border border-gray-100 font-semibold text-green-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="card-title mb-1 text-lg sm:text-xl">
                        {book.bookName}
                      </h2>

                      {/* Author */}
                      <p className="text-sm text-left text-gray-600 mb-2">
                        By: {book.author}
                      </p>

                      <div className="border border-dashed my-2"></div>

                      {/* Footer */}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-semibold">
                          {book.category}
                        </span>
                        <div className="flex items-center">
                          <p className="mr-1 text-sm font-semibold">
                            {book.rating.toFixed(1)}
                          </p>
                          <span className="text-xs text-yellow-500">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </ToRead>
  );
};

export default Books;

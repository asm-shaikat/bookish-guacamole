import React, { useContext, useEffect, useState } from "react";
import { BookReadContext } from "../ToRead";

const ListedBook = () => {
  const { bookRead, wishedBook } = useContext(BookReadContext);
  const [books, setBooks] = useState([]);
  const [showWishBook, setWishedBook] = useState([]);

  useEffect(() => {
    fetch("/book-data.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter the books that match the bookRead array
        const readBooks = data.filter((b) => bookRead.includes(b.bookId));
        const wishBook = data.filter((b) => wishedBook.includes(b.bookId));
        setBooks(readBooks);
        setWishedBook(wishBook);
      });
  }, [bookRead, wishedBook]);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {/* Tab 1: Read Books */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab bg-white border border-green-600 text-black peer-checked:text-white"
        aria-label="Read"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-white border-base-300 rounded-box p-6"
      >
        <div className="bg-white text-black p-8">
          <h2 className="text-2xl font-bold mb-4">Books You've Read</h2>

          {books.length === 0 ? (
            <p>You haven't read any books yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book) => (
                <div
                  key={book.bookId}
                  className="bg-slate-200 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-32 h-44 mb-4"
                  />
                  <h3 className="text-xl font-bold">{book.bookName}</h3>
                  <p className="text-gray-600">By: {book.author}</p>
                  <p className="text-sm">Category: {book.category}</p>
                  <p className="text-sm">Rating: {book.rating.toFixed(1)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tab 2: Wished Books */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wish List"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="bg-white text-black p-8">
          <h2 className="text-2xl font-bold mb-4">Books on Your Wish List</h2>

          {showWishBook.length === 0 ? (
            <p>Your wish list is empty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {showWishBook.map((book) => (
                <div
                  key={book.bookId}
                  className="bg-slate-200 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-32 h-44 mb-4"
                  />
                  <h3 className="text-xl font-bold">{book.bookName}</h3>
                  <p className="text-gray-600">By: {book.author}</p>
                  <p className="text-sm">Category: {book.category}</p>
                  <p className="text-sm">Rating: {book.rating.toFixed(1)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;

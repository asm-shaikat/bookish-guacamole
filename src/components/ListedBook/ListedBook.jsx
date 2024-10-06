import React, { useContext, useEffect, useState } from "react";
import { BookReadContext } from "../ToRead";

const ListedBook = () => {
  const { bookRead, wishedBook } = useContext(BookReadContext);
  const [books, setBooks] = useState([]);
  const [showWishBook, setWishedBook] = useState([]);
  const [sortOption, setSortOption] = useState(""); 

  useEffect(() => {
    fetch("/book-data.json")
      .then((res) => res.json())
      .then((data) => {
        const readBooks = data.filter((b) => bookRead.includes(b.bookId));
        const wishBook = data.filter((b) => wishedBook.includes(b.bookId));
        setBooks(readBooks);
        setWishedBook(wishBook);
      });
  }, [bookRead, wishedBook]);


  const handleSort = (booksToSort) => {
    if (sortOption === "Rating") {
      return [...booksToSort].sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Number of Pages") {
      return [...booksToSort].sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortOption === "Publish Year") {
      return [...booksToSort].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return booksToSort;
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedBooks = handleSort(books); 
  const sortedWishBooks = handleSort(showWishBook); 

  return (
    <>
      <select
        className="select select-success max-w-xs mt-6 bg-white text-black"
        onChange={handleSortChange}
      >
        <option disabled selected>
          Sort Books By
        </option>
        <option value="Rating">Rating</option>
        <option value="Number of Pages">Number of Pages</option>
        <option value="Publish Year">Publish Year</option>
      </select>

      <div role="tablist" className="tabs tabs-lifted mt-8">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab bg-white border border-green-600 dark:text-white dark:peer-checked:bg-white"
          aria-label="Read"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-white border-gray-200 rounded-box p-6"
        >
          <div className="bg-white text-black p-8">
            <h2 className="text-2xl font-bold mb-4">Books You've Read</h2>

            {sortedBooks.length === 0 ? (
              <p>You haven't read any books yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedBooks.map((book) => (
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
                    <p className="text-sm">Pages: {book.totalPages}</p>
                    <p className="text-sm">Published: {book.yearOfPublishing}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab peer-open:bg-white"
          aria-label="Wish List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-white border-gray-200 rounded-box p-6"
        >
          <div className="bg-white text-black p-8">
            <h2 className="text-2xl font-bold mb-4">Books on Your Wish List</h2>

            {sortedWishBooks.length === 0 ? (
              <p>Your wish list is empty.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedWishBooks.map((book) => (
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
                    <p className="text-sm">Pages: {book.totalPages}</p>
                    <p className="text-sm">Published: {book.yearOfPublishing}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBook;

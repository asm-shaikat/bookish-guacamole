import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/book-data.json")
      .then((res) => res.json())
      .then((data) => {
        const showBook = data.find((b) => b.bookId === parseInt(id));
        setBook(showBook);
      });
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <>
      <div className="mt-6 text-black flex flex-col lg:flex-row lg:space-x-20">
        <div className="lg:w-2/5 w-full bg-slate-300 flex justify-center items-center rounded-2xl mb-4 lg:mb-0">
          <img
            src={book.image}
            alt={`${book.bookName} cover`}
            className="w-48 h-64 mb-4"
          />
        </div>

        <div className="lg:w-3/5 w-full text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {book.bookName}
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-2">
            By: {book.author}
          </p>
          <div className="border border-dashed my-4"></div>
          <p className="text-md mb-2">{book.category}</p>
          <div className="border border-dashed my-4"></div>
          <p className="text-lg mb-4">Review: {book.review}</p>
          <div className="flex gap-2 flex-wrap">
            <span className="font-semibold">Tag:</span>
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 rounded-lg px-2 py-1 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="border border-dashed my-4"></div>
          <p className="text-md mb-4">Total Pages: <span className="font-semibold">{book.totalPages}</span></p>
          <p className="text-md mb-4">Publisher: <span className="font-semibold">{book.publisher}</span></p>
          <p className="text-md mb-2">
            Year of Publishing: <span className="font-semibold">{book.yearOfPublishing}</span>
          </p>
          <p className="text-md mb-4">Rating: <span className="font-semibold">{book.rating}</span></p>
        </div>
      </div>
      <div>
        <button className="btn bg-white mr-2">Read</button>
        <button className="btn btn-accent text-white">Wishlish</button>
      </div>
    </>
  );
};

export default BookDetails;

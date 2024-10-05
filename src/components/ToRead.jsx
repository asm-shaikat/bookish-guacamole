import React, { createContext, useState } from "react";
import toast from 'react-hot-toast';

export const BookReadContext = createContext();

const ToRead = ({ children }) => {
  const [bookRead, setBookRead] = useState([]);
  const [wishedBook, setWishedBook] = useState([]);
  
  const notify = () => toast.success('Marked as Read!');
  const wishNotify = () => toast.success('Book added to the wish list!');
  const alreadyReadNotify = () => toast.error('You already read this book!');
  const alreadyInWishListNotify = () => toast.error('Already in wish list');

  const handleBookRead = (bookId) => {
    if (!bookRead.includes(bookId)) {
      setBookRead((prevBooks) => {
        const updatedBooks = [...prevBooks, bookId];
        notify();
        setWishedBook((prevWished) => prevWished.filter((id) => id !== bookId));
        return updatedBooks;
      });
    } else {
      toast.error('Already marked as Read!');
    }
  };

  const handleWishedBook = (bookId) => {
    if (bookRead.includes(bookId)) {
      alreadyReadNotify();
    } else if (!wishedBook.includes(bookId)) {
      setWishedBook((prevBooks) => {
        const updatedWishedBooks = [...prevBooks, bookId];
        wishNotify();
        return updatedWishedBooks;
      });
    } else {
      alreadyInWishListNotify();
    }
  };

  return (
    <BookReadContext.Provider value={{ bookRead, handleBookRead, wishedBook, handleWishedBook }}>
      {children}
    </BookReadContext.Provider>
  );
};

export default ToRead;

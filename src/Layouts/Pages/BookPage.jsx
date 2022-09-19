import React from 'react';
import BookList from '../Components/BookList';

const BookPage = () => {
  document.title = 'Book Store | Books';
  return <BookList />;
};

export default BookPage;

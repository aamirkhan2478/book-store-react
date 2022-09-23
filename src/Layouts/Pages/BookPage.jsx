import React from 'react';
import BookList from '../Components/BookList';

const BookPage = () => {
  document.title = 'Book Store | Books';

  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={container}>
      <BookList />
    </div>
  );
};

export default BookPage;

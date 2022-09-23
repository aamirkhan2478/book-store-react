import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../Redux/Books/books';
import Book from './Book';
import Form from './Form';
import Loader from './Loader';

const BookList = () => {
  const { books, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const hrStyle = {
    width: '75rem',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
  };
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            button="Remove"
            id={book.id}
          />
        ))
      )}
      <hr style={hrStyle} />
      <Form />
    </>
  );
};

export default BookList;

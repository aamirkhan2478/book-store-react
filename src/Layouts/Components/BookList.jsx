import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showBook } from '../../Redux/Books/books';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBook());
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            button="Remove"
            id={book.id}
          />
        ))}
      </table>
      <Form />
    </>
  );
};

export default BookList;

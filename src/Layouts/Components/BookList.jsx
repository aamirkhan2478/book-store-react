import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
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

import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Book from "./Book";
import Form from "./Form";

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  console.log(books);
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
        {books.map((book, index) => (
          <Book
            key={index}
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

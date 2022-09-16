import React from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => (
  <>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <Book
        title="The Pilgrim's Progress"
        author="John Bunyan"
        button="Remove"
      />
      <Book title="Robinson Crusoe" author="Daniel Defoe" button="Remove" />
    </table>
    <Form />
  </>
);

export default BookList;

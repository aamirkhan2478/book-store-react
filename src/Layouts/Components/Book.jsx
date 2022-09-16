import React from 'react';

const Book = ({ title, author, button }) => (
  <tbody>
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        <button type="button">{button}</button>
      </td>
    </tr>
  </tbody>
);

export default Book;

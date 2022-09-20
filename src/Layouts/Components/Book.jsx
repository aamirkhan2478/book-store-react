import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../../Redux/Books/books";

const Book = ({ title, author, button, id }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <button type="button" onClick={clickHandler}>
            {button}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Book;

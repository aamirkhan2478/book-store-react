import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../Redux/Books/books';
import '../Assets/Style/book.css';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="card">
      <div className="left-section">
        <p>{category}</p>
        <h3>{title}</h3>
        <span>{author}</span>
        <ul className="actions">
          <li>Comments</li>
          <li>
            <div role="button" onClick={clickHandler} aria-hidden="true">
              Remove
            </div>
          </li>
          <li>Edit</li>
        </ul>
      </div>

      <div className="middle-section">
        <div className="wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>
        <div className="percentages">
          <h2>80%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="right-section">
        <h3 className="current-chapter">Current chapter</h3>
        <h3 className="chapter">Chapter 6</h3>
        <button type="button">UPDATE PRGRESS</button>
      </div>
    </div>
  );
};

export default Book;

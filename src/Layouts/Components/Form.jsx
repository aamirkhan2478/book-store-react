import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../Redux/Books/books';

const Form = () => {
  const [values, setValues] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...values,
    };
    dispatch(addBook(newBook));
    setValues({ title: '', author: '', category: '' });
  };

  return (
    <form onSubmit={clickHandler}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={values.author}
        onChange={changeHandler}
      />
      <select name="category" value={values.category} onChange={changeHandler}>
        <option>Select Category</option>
        <option>Crime and Thriller</option>
        <option>Religious and Self-help</option>
        <option>Humor</option>
        <option>Fantasy</option>
        <option>Sci-fi</option>
        <option>Fiction</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

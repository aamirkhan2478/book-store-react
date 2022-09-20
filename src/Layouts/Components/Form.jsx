import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../Redux/Books/books';

const Form = () => {
  const [values, setValues] = useState({
    id: uuidv4(),
    title: '',
    author: '',
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
    setValues({ id: uuidv4(), title: '', author: ''});
    dispatch(addBook(values));
    // setValues({ id: '', title: '', author: '' });
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

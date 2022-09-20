import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { checkStatus } from '../../Redux/Categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  document.title = 'Book Store | Categories';
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Show Status
      </button>
      {categories.map((category) => (
        <p key={uuidv4()}>{category}</p>
      ))}
    </>
  );
};

export default CategoriesPage;

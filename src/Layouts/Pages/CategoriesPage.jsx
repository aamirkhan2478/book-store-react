import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus } from "../../Redux/Categories/categories";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  document.title = "Book Store | Categories";
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Show Status
      </button>
      {categories.map((category, index) => (
        <p key={index}>{category}</p>
      ))}
    </>
  );
};

export default CategoriesPage;

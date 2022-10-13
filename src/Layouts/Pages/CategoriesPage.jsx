import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { checkStatus } from "../../Redux/Categories/categories";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  document.title = "Book Store | Categories";

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
      <Button onClick={() => dispatch(checkStatus())}>Show Status</Button>
      {categories.map((category) => (
        <p key={uuidv4()}>{category}</p>
      ))}
    </Container>
  );
};

export default CategoriesPage;

import React from "react";
import { Container } from "react-bootstrap";
import BookList from "../Components/BookList";

const BookPage = () => {
  document.title = "Book Store | Books";

  return (
    <Container className="d-flex flex-column align-items-center">
      <BookList />
    </Container>
  );
};

export default BookPage;

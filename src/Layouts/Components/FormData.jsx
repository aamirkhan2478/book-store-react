import React, { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../Redux/Books/books";

const FormData = () => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    category: "",
  });
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const { title, author, category } = values;
  const clickHandler = (e) => {
    e.preventDefault();
    if (title === "" || author === "" || category === "") {
      setShow(true);
      setMsg("Please fill all required fields");
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      ...values,
    };
    dispatch(addBook(newBook));
    setValues({ title: "", author: "", category: "" });
  };

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body className="bg-danger text-white">
          <i className="fa fa-warning"></i> {msg}
        </Toast.Body>
      </Toast>
      <h3 className="text-muted">Add New Book</h3>
      <Form onSubmit={clickHandler} className="d-flex gap-2 my-3">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="author"
            placeholder="Author"
            value={values.author}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            name="category"
            value={values.category}
            onChange={changeHandler}
          >
            <option>Select Category</option>
            <option>Religious</option>
            <option>Crime</option>
            <option>Thriller</option>
            <option>Self-help</option>
            <option>Humor</option>
            <option>Fantasy</option>
            <option>Sci-fi</option>
            <option>Fiction</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormData;

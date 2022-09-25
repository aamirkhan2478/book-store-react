import React, { useState } from "react";
import { Button, Card, Col, ListGroup, Row, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeBook } from "../../Redux/Books/books";
import "../Assets/Style/book.css";
import CommentsModal from "./CustomModal";

const Book = ({ title, author, id, category }) => {
  const [modalShow, setModalShow] = useState(false);
  const [removeText, setRemoveText] = useState("Remove");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setRemoveText("Removing...");
    dispatch(removeBook(id));
  };

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="mt-3">
        <Toast.Body className="bg-primary text-white">
          <i className="fa fa-info-circle"></i> Coming Soon!
        </Toast.Body>
      </Toast>
      <CommentsModal show={modalShow} onHide={() => setModalShow(false)} />
      <Card className="my-4 w-75 shadow">
        <Card.Body>
          <Row>
            <Col md={4}>
              <p className="text-muted">{category}</p>
              <h3>{title}</h3>
              <span>{author}</span>
              <ListGroup horizontal className="my-2">
                <ListGroup.Item
                  role="button"
                  className="text-primary"
                  onClick={() => setModalShow(true)}
                >
                  <i className="fa fa-comments-o me-2"></i>Comments
                </ListGroup.Item>
                <ListGroup.Item
                  role="button"
                  onClick={clickHandler}
                  aria-hidden="true"
                  className="text-danger"
                >
                  {removeText === "Remove" ? (
                    <i className="fa fa-trash-o me-2"></i>
                  ) : (
                    ""
                  )}
                  {removeText}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
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
                <div className="mx-2 my-4">
                  <h2>80%</h2>
                  <p className="text-muted">Completed</p>
                </div>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Button variant="primary" onClick={() => setShow(true)}>
                UPDATE PROGRESS
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;

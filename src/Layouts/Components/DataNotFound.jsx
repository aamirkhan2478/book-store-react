import React from "react";
import { Card } from "react-bootstrap";

const DataNotFound = () => {
  return (
    <Card className="my-4 w-50 shadow">
      <Card.Body className="text-center">
        <Card.Title className="text-danger">
          <i className="fa fa-warning"></i> No Book Found
        </Card.Title>
        <Card.Text className="text-danger text-muted">
          Please Add Your Favorite Book
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DataNotFound;

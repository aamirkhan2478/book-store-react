import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Coming Soon</h4>
        <p>
          This feature will be available in the next major release of this
          website.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;

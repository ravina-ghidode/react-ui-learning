import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddUser = () => {
  const [show, setShow] = React.useState(false);

  // Function to open Modal
  const close = () => {
    setShow(false);
  };

  // Function to close Modal
  const open = () => {
    setShow(true);
  };
  return (
    <div>
{/* <Button onClick={open} style="float: right">Add User</Button> */}
<Button variant="contained" style={{ textAlign: "right" }} color="primary" onClick={open}>
Add User
</Button>
<div className="d-flex align-items-end flex-column">
<button type="button" className="btn btn-warning float-right mb-auto p-2" style={{ alignItems: "top" }} onClick={open}>Add User</button>
</div>


      
      <Modal show={show} onHide={close}>
        <Modal.Header>
          <Modal.Title>Sample Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Greetings from GeeksforGeeks</Modal.Body>
        <Modal.Footer>
          <Button onClick={close} className="btn btn-primary">
            Confirm
          </Button>
          <Button onClick={close} className="btn btn-primary">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;

import { faCircleUser, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteUser from "../Users/DeleteUser";
import EditUser from "../Users/EditUser";
const ModalComponent = (props: any) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }



 
 

  return (
    <div>
      <FontAwesomeIcon icon={props.icon} onClick={openModal} />

      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{<props.Children  closeModal={closeModal} {...props}/>}</Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="btn btn-primary">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ); 
};

export default ModalComponent;

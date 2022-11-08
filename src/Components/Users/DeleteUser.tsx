import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

const DeleteUser = (props: any) => {
  const [user, setUser] = useState();

  useEffect(() => {
    return () => {
      loadUsers();
    };
  }, []);

  const loadUsers = async () => {
    const result = axios.get(
      `http://localhost:3001/usersData/${props.data.id}`
    );
    setUser((await result).data);
  };

  const deleteUser = async (id: any) => {
    await axios.delete(`http://localhost:3001/usersData/${props.data.id}`);
    loadUsers();
  };

  const deleteUsers = async (id: any) => {
    console.log("Hi Ravina");
    
    swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      timer : 400880,
      dangerMode: true,
      
    }).then((willDelete) => {
      if (willDelete) {
        deleteUser(id).then((res) => {
          swal({
            title: "Done!",
            text: "user is deleted",
            icon: "success",
            timer: 500000,
            buttons: {
                cancel: { text: 'Cancel' },
                confirm: { text: 'Confirm' },
              }
          });
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={(id) => deleteUser(props.data.id)}>
        {/* <div className="container">
        <h2>Are you sure you want to Delete</h2>
        </div>
        
         <Modal.Footer> */}
        <button type="submit"  id='deletebutton' className="btn btn-danger"  >
              Delete
            </button> 
     {/* </Modal.Footer>  */}
      </form>
    </div>
  );
};

export default DeleteUser;

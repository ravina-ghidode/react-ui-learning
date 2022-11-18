import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteConfirmation = (props: any) => {
  const deleteUser = async (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res: any = await axios.delete(
          `http://localhost:3000/usersData/${props.data.id}`
        );
        if (res) props.loadUsers();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={props.icon}
        onClick={() => deleteUser(props.data.id)}
      />
    </div>
  );
};

export default DeleteConfirmation;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash,faPen,faEye} from '@fortawesome/free-solid-svg-icons'
import ModalComponent from "./Modal/Modal";
import EditUser from "./Users/EditUser";
import DeleteUser from "./Users/DeleteUser";
import User from "./Users/User";

import swal from 'sweetalert';

const Home = (props:any) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
 
    loadUsers();
  }, [props.isupdate]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/usersData");
  
    setUser(result.data);
  };

 
      
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table table-border-shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user:any, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
                <td id="ico">
                <ModalComponent data={user} Children = {EditUser } icon={faPen} loadUsers={loadUsers}></ModalComponent>
                <ModalComponent  data={user} Children={DeleteUser}  loadUsers={loadUsers} icon={faTrash}></ModalComponent>
                <ModalComponent data={user} Children={User} loadUsers={loadUsers}  icon={faEye}></ModalComponent>
                
              
              


              
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

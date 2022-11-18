import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert';

const Useradd = (props:any) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = user;
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/usersData", user);
      if(res)props.closeModal();
      debugger;
      props.setIsUpdate(!props.isupdate);
      navigate('./home');
      //console.log(res.data);
    }   
    catch(error)
    {
      console.log(error);
    }
    
    
    //console.log(res.data.status);
  
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 ">
          <h3 className="text-center mb-4">Add User</h3>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary" >
              Add User
            </button>
            {/* <button onClick={()=>navigate("/home")} className="btn btn-primary">Cancel</button> */}
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default Useradd;

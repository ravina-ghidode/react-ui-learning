import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const User = (props: any) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

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

  const { name, username, email, phone } = user;
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/usersData/${props.data.id}`, user);
    navigate("/");
  };
//   console.log(props.data);
   const navigate = useNavigate();

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 ">
          <h3 className="text-center mb-4">User Id : {props.data.id}</h3>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
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
              UserName
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
              Email
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
              Contact
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

          
        </div>
      </div>
    </form>
  );
};

export default User;

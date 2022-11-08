import React, { useState ,useEffect} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom"
const EditUser = (props:any) => {

    const {id} = useParams();
// debugger;
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

      useEffect(() => {
        return () => {
            loadUsers();
        };
      }, [])

      
      const onSubmit = async (e: any) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/usersData/${props.data.id}`, user);
        props.closeModal();
        props.loadUsers();
        navigate('/home');
      };
      console.log(props.data);
      const navigate = useNavigate();
      const loadUsers = async () =>{
        const result = axios.get(`http://localhost:3001/usersData/${props.data.id}`);
        setUser((await result).data);
   
        console.log(props.data);
        
        

        
      }

      
    
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 ">
          <h3 className="text-center mb-4">Edit User</h3>

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
              Edit User
            </button>
           
          </div>
          
        </div>
      </div>
    </form>
  )
}

export default EditUser

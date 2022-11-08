import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Components/Users/AddUser";
import Useradd from "./Components/Users/Useradd";
import EditUser from "./Components/Users/EditUser";
import DeleteUser from "./Components/Users/DeleteUser";
import User from "./Components/Users/User";



function App() {
  const [isupdate, setIsUpdate] = useState<any>(false);
  return (
    <>
      
      <BrowserRouter>
      <Navbar isupdate={isupdate} setIsUpdate={setIsUpdate} />
        <Routes>
          <Route path="/" element={<Home isupdate={isupdate} setIsUpdate = {setIsUpdate}/>} />
          <Route path="/Home" element={<Home isupdate={isupdate} setIsUpdate = {setIsUpdate}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/Users/Useradd" element={<Useradd  />} />
          <Route path="/Users/EditUser/:id" element={<EditUser/>} />
          <Route path="/Users/DeleteUser/:id" element={<DeleteUser/>} />
          <Route path="/Users/User/:id" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import AddUser from "./Users/AddUser";
import {Button, Modal} from 'react-bootstrap'
import ModalComponent from "./Modal/Modal";
import Useradd from "./Users/Useradd";
import { icon } from "@fortawesome/fontawesome-svg-core";


const Navbar = (props:any) => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React User
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <span id="pro-ico" >
          
          <ModalComponent Children = {Useradd} icon ={faCircleUser}{...props}  ></ModalComponent>
     
        </span>
        
      </div>
    </nav>
  );
};

export default Navbar;

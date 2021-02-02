import React from "react";
import "./Header.css";
import {NavBar} from "react-bootstrap";

function Header(){
    return(
        <div className="header-wrapper">
            <nav className="navbar navbar-light">
                <span className="navbar-brand mb-0 h1">To Do List</span>
            </nav>
        </div>
    )
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <div className="home">
                <Link to="/home">Home</Link>
            </div>

            <div className="regandlog">
                <Link to="/register">Register /</Link>
                <Link to="/login"> Login</Link>
            </div>

            <div className="home">
                <Link to="/profile">Profile Page</Link>
            </div>
        </div>
    );
}


export default Navbar;
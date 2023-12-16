import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <div className="home">
                <Link to="/">Home</Link>
            </div>

            <div className="societies">
                <Link to="/societies">Societies</Link>
            </div>

            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}


export default Navbar;
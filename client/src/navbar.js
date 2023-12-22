import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <Link to="/">Home</Link>
      </div>

      <div className="societies">
        <Link to="/societies">Societies</Link>
      </div>

      <div className="profile">
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
//import jwt from "jsonwebtoken";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  async function Logout(event) {
    localStorage.removeItem("userInfo");
    navigate("/login");
  }

  return (
    <div className="main_page">
      <div className="container">
        <h1>User Profile</h1>

        <div>
          <button type="button" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

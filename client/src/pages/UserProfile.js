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

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/Home";
import Societies from "./pages/Societies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

import CreateSociety from "./pages/CreateSociety";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  /*useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/profile");
    }
  }, [history]);*/

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/societies" element={<Societies />} />

          <Route path="/societies-create" element={<CreateSociety />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/Home";
import Societies from "./pages/Societies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/societies" element={<Societies />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

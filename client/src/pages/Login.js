import React from "react";
import { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMssg";
import WarningMessage from "../components/WarningMssg";
import MessageStyle from "./../components/style.css";

function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState(false);
  const [loading, SetLoading] = useState(false);

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1011/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      //console.log(`User ${data.user.name} Logged in successfully`);
      window.location.href = "/profile";
    } else {
      console.log("Please check your email and password details");
    }
    //console.log(data);
  }

  const authUser = async (event) => {
    event.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      SetLoading(true);

      const { data } = await axios.post(
        "api/user/login",
        { email, password },
        config
      );

      SetLoading(false);
      if (data.user) {
        //console.log(`User ${data.user.name} Logged in successfully`);
        window.location.href = "/profile";
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        console.log("Please check your email and password details");
        SetError(error.response.data.message);
      }

      //console.log(`User ${data.user.name} Logged in successfully`);
    } catch (error) {
      SetError("wrong email or password");
      //SetError(error.response.data.message);
    }
  };

  function toRegister() {}

  return (
    <div className="main_page">
      <div className="container">
        <div className="login_form">
          {error && (
            <ErrorMessage className="error" variant="danger">
              {error}
            </ErrorMessage>
          )}
          {loading && <Loading />}
          <h1>Login</h1>
          <form className="login" onSubmit={authUser}>
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="text"
              placeholder="email"
              required={true}
            />

            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="password"
              required={true}
            />

            <input className="button" type="submit" value="Login" />
          </form>

          <div className="register">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

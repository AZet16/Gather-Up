import React, { useEffect } from "react";
import { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMssg";
import WarningMessage from "../components/WarningMssg";
import MessageStyle from "./../components/style.css";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState(false);
  const [loading, SetLoading] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();

    SetLoading(false);
    SetError(false);

    const response = await fetch("/api/user/login", {
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

    if (response.ok) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      SetLoading(false);
      navigate("/profile");
    } else {
      console.log("Please check your email and password details");
      SetLoading(false);
      SetError(data.error);
    }
    //console.log(data);
  };

  async function authUser(event) {
    event.preventDefault();
    SetError(false);

    SetLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios
      .post("api/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);

        if (response.data.status == "error") {
          SetError(true);
        } else {
          SetError(false);
          SetLoading(false);
          localStorage.setItem("userInfo", JSON.stringify(response));
          navigate("/profile");
        }
      })
      .catch(function (error) {
        console.log("Could't fetch the data");
        return Promise.reject(error);
        SetLoading(false);
        SetError(true);
      });
  }

  return (
    <div className="main_page">
      <div className="container">
        {error && (
          <ErrorMessage className="error" variant="danger">
            "Wrong Email or Password"
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
            required
          />

          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />

          <input className="button" type="submit" value="Login" />
        </form>

        <div className="register">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

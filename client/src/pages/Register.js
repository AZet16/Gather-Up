import React, { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMssg";
import Loading from "../components/Loading";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmpassword, SetConfirmPassword] = useState("");

  const [emailError, SetEmailError] = useState(false);
  const [passError, SetPassError] = useState(false);
  const [loading, SetLoading] = useState(false);

  async function registerUser(event) {
    event.preventDefault();

    if (password != confirmpassword) {
      SetPassError(true);
    } else {
      SetPassError(false);
      SetLoading(true);

      const response = await fetch("http://localhost:1011/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        SetLoading(false);
        console.log("successfully created user");

        SetName("");
        SetEmail("");
        SetPassword("");
        SetConfirmPassword("");
        SetEmailError(false);

        navigate("/login");
      } else {
        SetEmailError(true);
        SetLoading(false);
      }
    }
  }

  async function createUser(event) {
    event.preventDefault();

    SetLoading(false);
    SetEmailError(false);
    SetPassError(false);

    if (password !== confirmpassword) {
      SetPassError(true);
    } else {
      SetPassError(false);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      SetLoading(true);

      const response = await axios
        .post("api/user/register", { name, email, password })
        .then((response) => {
          if (response.data.status == "error") {
            SetEmailError(true);
          } else {
            SetLoading(false);
            SetEmailError(false);
            alert("successfully logged in");

            navigate("/login");
          }
        })
        .catch(function (error) {
          console.log("Could't fetch the data");
          return Promise.reject(error);
          SetLoading(false);
        });
    }
  }

  return (
    <div className="main_page">
      <div className="container">
        <div className="register_form">
          <h1>Register</h1>
          {emailError && (
            <ErrorMessage className="error" variant="danger">
              {"email is already used for another account"}
            </ErrorMessage>
          )}
          {passError && (
            <ErrorMessage className="error" variant="danger">
              {"passowrds don't match"}
            </ErrorMessage>
          )}
          {loading && <Loading />}
          <form className="register" onSubmit={createUser}>
            <input
              value={name}
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="nickname"
              required
            />

            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
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

            <input
              value={confirmpassword}
              onChange={(e) => SetConfirmPassword(e.target.value)}
              type="password"
              placeholder="password"
              required
            />

            <input className="button" type="submit" value="Register" />
          </form>

          <div className="login">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

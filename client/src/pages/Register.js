import React, { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMssg";
import Loading from "../components/Loading";

function App() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [error, SetError] = useState(false);
  const [loading, SetLoading] = useState(false);

  async function registerUser(event) {
    event.preventDefault();

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

    if (data) {
      console.log(data);

      SetName("");
      SetEmail("");
      SetPassword("");
      SetLoading(false);
    } else {
      SetError(true);
      SetLoading(false);
    }
  }

  return (
    <div className="main_page">
      <div className="container">
        <div className="register_form">
          <h1>Register</h1>
          {error && (
            <ErrorMessage className="error" variant="danger">
              {error}
            </ErrorMessage>
          )}
          {loading && <Loading />}
          <form className="register" onSubmit={registerUser}>
            <input
              value={name}
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="nickname"
              required="true"
            />

            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              placeholder="email"
              required="true"
            />

            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="password"
              required="true"
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

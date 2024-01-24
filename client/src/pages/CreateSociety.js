import React, { useState, useEffect } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMssg";

import { useNavigate } from "react-router-dom";
//import { options } from "../../../server/routes/societiesRoutes";

function CreateSociety() {
  useEffect(() => {
    setDefaultAccess();
  }, []);

  function loadData() {}

  const navigate = useNavigate();

  const [error, SetError] = useState("");
  const [loading, SetLoading] = useState(false);

  const [name, SetName] = useState("");
  const [owner_id, SetOwnerId] = useState("");
  const [description, SetDescription] = useState("");
  const [access, SetAccess] = useState("");

  const [access_desciption, SetAccessDescription] = useState("");
  const [access_title, SetAccessTitle] = useState("");

  let access_opt = [
    {
      label: "Select Level of Access",
      lbl: "description",
      description:
        "choose if you want your society to be visible to everyone (public) or only to the members (private)",
    },
    {
      label: "Public",
      lbl: "pubic_opt",
      description:
        "your society can be viewed by users and non-users, further visibility of challenges and members can be adjusted in the settings later.",
    },
    {
      label: "Private",
      lbl: "private_opt",
      description:
        "your societty won't be visible to non-members, to join your society a user should have an account and be invited by the owner(you).",
    },
  ];

  async function registerSociety(event) {
    // automatically check if user is logged in and automatically set their id as owner
    // record special society id and creation date
    event.preventDefault();
    SetError(false);

    SetLoading(true);

    if (access === "description") {
      SetLoading(false);
      SetError("Please, choose level of access");
      console.log(error);
    } else if (name.length < 5) {
      SetLoading(false);
      SetError("Try to keep name of society unique and more that 5 character");
      console.log(error);
    } else {
      SetError("");
      const userInfo = localStorage.getItem("userInfo");
      const userData = JSON.parse(userInfo);

      console.log("trying to create a society for user " + userData.data.email);
      console.log(" with id: " + userData.data._id);

      SetOwnerId(userData.data._id);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .post("api/societies/create", {
          name: name,
          owner_id: userData.data._id,
          description: description,
          access_type: access,
        })
        .then((response) => {
          console.log(response);

          if (response.data.status == "error") {
            SetError(true);
          } else {
            SetError(false);
            SetLoading(false);
            navigate("/societies");
          }
        })
        .catch(function (error) {
          console.log("Could't fetch the data");
          return Promise.reject(error);
          SetLoading(false);
          SetError(true);
        });
    }

    //navigate("/societies");
  }

  function setDefaultAccess() {
    //const index = target.options.selectedIndex;
    const { label, lbl, description } = access_opt[0];

    SetAccessTitle(label);
    SetAccessDescription(description);
    SetAccess(lbl);
  }

  function switchAccess({ target }) {
    const index = target.options.selectedIndex;
    const { label, lbl, description } = access_opt[index];

    SetAccessTitle(label);
    SetAccessDescription(description);

    SetAccess(lbl);
  }

  return (
    <div className="main_page">
      <div className="back">
        <Link to="/societies">Back</Link>
      </div>

      <div className="container">
        {error != "" && (
          <ErrorMessage className="error" variant="danger">
            {error}
          </ErrorMessage>
        )}
        {loading && <Loading />}
        <h1>Create Society</h1>

        <p className="comment">You will be set as owner</p>
        <form className="create_society" onSubmit={registerSociety}>
          <select value={access_title} onChange={switchAccess}>
            {access_opt.map(({ label, description }) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          <p className="comment">{access_desciption}</p>
          <input
            value={name}
            onChange={(e) => SetName(e.target.value)}
            type="text"
            placeholder="society name"
            required
          />

          <input
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
            type="text"
            placeholder="description"
          />

          <input className="button" type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default CreateSociety;

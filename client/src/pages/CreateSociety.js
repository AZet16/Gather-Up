import React, { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function CreateSociety() {
  const navigate = useNavigate();

  const [name, SetName] = useState("");
  const [owner_id, SetOwnerId] = useState("");
  const [description, SetDescription] = useState("");
  const [access, SetAccess] = useState(false);

  let access_opt = [
    {
      label: "Select Level of Access",
      value: "description",
      description:
        "choose if you want your society to be visible to everyone (public) or only to the members (private)",
    },
    {
      label: "Public",
      value: "pubic_opt",
      description:
        "your society can be viewed by users and non-users, further visibility of challenges and members can be adjusted in the settings later.",
    },
    {
      label: "Private",
      value: "private_opt",
      description:
        "your societty won't be visible to non-members, to join your society a user should have an account and be invited by the owner(you).",
    },
  ];

  async function registerSociety(event) {
    // automatically check if user is logged in and automatically set their id as owner
    // record special society id and creation date
    event.preventDefault();
    console.log("trying to create a society");
    navigate("/societies");
  }

  async function closeForm(event) {
    event.preventDefault();
    console.log("cancel creation");
    navigate("/societies");
  }

  return (
    <div className="main_page">
      <div className="back">
        <Link to="/societies">Back</Link>
      </div>
      <div className="container">
        <h1>Create Society</h1>
        <p className="comment">You will be set as owner</p>
        <form className="create_society" onSubmit={registerSociety}>
          <select>
            <option value="public_opt">Public</option>
            <option value="private_opt">Private</option>
          </select>
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

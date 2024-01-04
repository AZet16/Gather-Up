import React, { useEffect, useState } from "react";
//import CreateSociety from "./CreateSociety";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [createButton, SetCreateButton] = useState(false);

  async function openSocietyForm(event) {
    event.preventDefault();
    console.log("Oppenning the form to create a society");
    navigate("/societies-create");
  }

  return (
    <div className="main_page">
      <div className="containter">
        <h1>Societies</h1>
        <div>
          <button type="button" onClick={openSocietyForm}>
            Create New Society
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

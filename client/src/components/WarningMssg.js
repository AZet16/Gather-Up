import React from "react";
import { Alert } from "react-bootstrap";
import style from "./style.css";

//warning
const WarningMessage = ({ variant = "info", children }) => {
  return (
    <Alert>
      <strong className="warning" variant={variant}>
        {children}
      </strong>
    </Alert>
  );
};

export default WarningMessage;

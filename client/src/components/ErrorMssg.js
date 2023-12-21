import React from "react";
import { Alert } from "react-bootstrap";
import style from "./style.css";

const ErrorMessage1 = ({ children }) => {
  return (
    <Alert>
      <strong className={style.error}>{children}</strong>
    </Alert>
  );
};

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;

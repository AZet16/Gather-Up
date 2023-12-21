import React from "react";
import { Alert } from "react-bootstrap";
import style from "./style.css";

const ErrorMessage2 = ({ variant = "info", children }) => {
  return (
    <Alert>
      <strong variant={variant} className={style.error}>
        {children}
      </strong>
    </Alert>
  );
};

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert>
      <strong
        className="error"
        variant={variant}
        style={{
          fontSize: 20,
          backgroundColor: Object.f55c5c,
          color: Object.white,
          padding: 20,
          borderRadius: 5,
        }}
      >
        {children}
      </strong>
    </Alert>
  );
};

const ErrorMessage1 = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

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

export default ErrorMessage;

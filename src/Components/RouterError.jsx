import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.group(err);
  const errorMessage = "An unknown error occured";
  const status = "Unknown";
  const statusText = "";
  if (err) {
    if (err.message) {
      errorMessage = err.message;
    } else if (err.error && err.error.message) {
      errorMessage = err.message;
    }
    if (err.status) {
      status = err.status;
    }
    if (err.statusText) {
      statusText = err.statusText;
    }
  }
  return (
    <div>
      <h1>Error = {errorMessage}</h1>
      <h3>
        {status} - {statusText}
      </h3>
    </div>
  );
};
export default Error;

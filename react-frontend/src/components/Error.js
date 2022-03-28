import React from "react";
import { Link } from "react-router-dom";
import error from "../images/error.jpeg"

const Error = () => {
  return (
    <div className="error">
      <h3>ohh! page not found</h3>
      <img className="event-img" src={error} alt="error" />
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;

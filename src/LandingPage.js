// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our Survey!</h1>
      <p>Click the button below to start the survey.</p>
      <Link to="/survey">
        <button>Start Survey</button>
      </Link>
    </div>
  );
};

export default LandingPage;

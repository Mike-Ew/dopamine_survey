// // LandingPage.js
// import React from "react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Welcome to Our Survey!</h1>
//       <p>Click the button below to start the survey.</p>
//       <Link to="/survey">
//         <button>Start Survey</button>
//       </Link>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Are you hooked on dopamine?</h1>

      <div className="landing-section">
        <h2>Section Title 1</h2>
        <p>Content for section 1...</p>
      </div>

      <div className="landing-section">
        <h2>What Even is Dopamine?</h2>
        <p>Content for section 2...</p>
      </div>

      <div className="landing-section">
        <h2>Why should I canre about it?</h2>
        <p>Content for section 3...</p>
      </div>

      <button
        className="start-button"
        onClick={() => (window.location.href = "/survey")}
      >
        Start the Survey
      </button>
    </div>
  );
};

export default LandingPage;

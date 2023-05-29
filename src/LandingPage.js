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
        <h2 className="section-title">Section Title 1</h2>
        <p>
          Here's 10 quick questions to rate your dopamine dependence.{" "}
          <p>
            You'll understand your behavior and instincts––and learn about key
            ways to retrain your brain.
          </p>
        </p>

        <button
          className="start-button"
          onClick={() => (window.location.href = "/survey")}
        >
          Start the Survey
        </button>
      </div>

      <div className="landing-section">
        <h2 className="section-title">What Even is Dopamine?</h2>
        <p>
          It’s the chemical in our brains that makes us sit up and pay
          attention, and rewards us when we discover things that are new,
          pleasant or dangerous (the fancy term is salience).
        </p>
        <p>
          For all of human evolution, dopamine was a way to encourage us to seek
          novelty, take risks, and pay attention to danger.
        </p>
        <p>
          But lately, with the advent of digital media and one click buying,
          this powerful motivator has been hijacked, and most of us have barely
          noticed.
        </p>
        <p>
          Taking this quiz is just the first step in a much more detailed
          process of discovery, learning, training, and leveling up your game
          (if you’re into that).
        </p>
      </div>

      <div className="landing-section">
        <h2 className="section-title">Why should I care about it?</h2>
        <p>
          Today we’re in this weird spot where this “pleasure” chemical is
          actually causing us a ton of grief. In lost productivity, watered down
          attention, shallow relationships, irritability, anxiety, sleeplessness
          and distraction. What started out as ways to engineer better
          “retention” on apps and screens has now hijacked many of our most
          personal choices.
        </p>
        <p>
          Each time we have that itch to scratch, that’s a signal our dopamine
          levels are dropping and we’re unconsciously looking to top them up.
        </p>
        <p>
          Answer these questions as honestly as you can to see whether you have
          dopamine, or if dopamine has you!
        </p>
      </div>

      <div className="landing-section">
        <h2 className="section-title">What's your dopamine Score?</h2>
        <p>STRAIGHT SHOOTER</p>
        <p>DOPAMINE DABBLER</p>
        <p>SENSATION SEEKER</p>
      </div>
    </div>
  );
};

export default LandingPage;

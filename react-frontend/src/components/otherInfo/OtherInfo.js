import React from "react";
import { Link } from "react-router-dom";
import { OtherInfoContainer } from "./OtherInfoStyles";
const OtherInfo = () => {
  return (
    <OtherInfoContainer>
      {" "}
      <h3>Experience Bremen</h3>
      <p className="landing-places">
        Bremen is a beautiful city. Its inhabitants are amongst the nicest
        people you will find in Germany. Low cost of living , and a friendly
        environment makes it a perfect choice for your study and work life.
        We've coalated a list of useful locations
        <Link to="places" className="landing-link">
          ...see more
        </Link>
      </p>
      <p style={{ width: "80vw", maxWidth: "" }}>
        Be involved, and contribute to our commmunity life, share experiences
        and information with others
        <Link to="/blog" className="landing-link">
          ...visit our blog page
        </Link>
      </p>
    </OtherInfoContainer>
  );
};

export default OtherInfo;

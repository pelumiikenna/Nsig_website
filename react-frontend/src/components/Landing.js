import React from "react";
import landingVideo from "../images/landingVideo.mp4";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Features } from ".";
import { Faq} from ".";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="video-div">
        <video className="video" autoPlay={true} loop={true} muted={true}>
          <source src={landingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="overlay "></div>

      <div className="landing-hero">
        <p style={{ color: "var(--clr-white)", fontSize: "var(--large-text)" }}>
          Get All information in one place
        </p>
        <p
          style={{
            color: " var(--clr-white)",
            fontSize: "var(--small-text)",
          }}
        >
          We've got you covered
        </p>
        <button className="btn btn-hero">Get Connected</button>
      </div>
      <div className="landing-content">
        <Features />
        <Faq />
        <h3>Experience Bremen</h3>
        <p style={{width: "80vw", maxWidth: ""}}>
          Bremen is a beautiful city. Its inhabitants are amongst the nicest
          people you will find in Germany. Low cost of living , and a friendly
          environment makes it a perfect choice for your study and work life. We've
          coalated a list of useful locations
          <Link
            to="places"
            className="places-link"
            style={{ color: "var(--gold)" }}
          >
            ...see more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Landing;
// its always fun when we are together

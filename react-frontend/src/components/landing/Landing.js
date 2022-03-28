import React from "react";
import landingVideo from "../../images/landingVideo.mp4";
import { Link } from "react-router-dom";
import { Features } from "..";
import { FaqLanding } from "..";
import OtherInfo from "../otherInfo/OtherInfo";
import { LandingContainer } from "./LandingStyles";

const Landing = () => {
  return (
    <LandingContainer>
      <div>
        <video className="video" autoPlay={true} loop={true} muted={true}>
          <source src={landingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>

      <div className="landing-hero">
        <p className="large-text">Welcome to Nisig Bremen</p>
        <p className="small-text">
          The official body of Nigerian scholars in Bremen
        </p>
      </div>
      <div className="landing-content">
        <Features />
        <FaqLanding />
        <OtherInfo />
      </div>
    </LandingContainer>
  );
};

export default Landing;

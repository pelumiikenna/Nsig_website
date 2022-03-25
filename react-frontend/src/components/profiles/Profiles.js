import React from "react";
import { ProfileContainer, ProfileContent } from "./ProfilesStyles";

import { profiles } from "../../data.js";
import Logo from "../../images/logo.png";
const Profiles = () => {
  return (
    <ProfileContainer>
      <ProfileContent>
        {profiles.map(
          ({ id, url, position, name, jobTitle, interests, course }) => {
            return (
              <div key={id}>
                <img src={url} alt="" />
                <h4>Name : {name}</h4>
                <h5>Position : {position}</h5>
                <h5>Program : {course}</h5>
                <h5>Job title :{jobTitle}</h5>
                <p>Interests : {interests}</p>
              </div>
            );
          }
        )}
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profiles;

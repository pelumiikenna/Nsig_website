import React from "react";
import { ProfileContainer, ProfileContent } from "./ProfilesStyles";

import { profiles } from "../../data.js";
import Logo from "../../images/logo.png";
const Profiles = () => {
  return (
    <ProfileContainer>
      <h3>Meet our officials</h3>
      <ProfileContent>
        {profiles.map(
          ({ id, url, position, name, jobTitle, interests, course }) => {
            return (
              <div key={id}>
                <img src={url} alt="" className="profile-img" />
                <h4>Name : {name}</h4>
                <h5>Position : {position}</h5>
                <h5>Program : {course}</h5>
                <h5>Job title :{jobTitle}</h5>
                <h5>Interests : {interests}</h5>
              </div>
            );
          }
        )}
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profiles;

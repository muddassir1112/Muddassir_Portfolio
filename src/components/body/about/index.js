import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Muddassir Ansari</span>.
          <br /> I have experience working with React JS and Javascript.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt="No Pic Found"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

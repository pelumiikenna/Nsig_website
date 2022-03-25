import React from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../../data";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  SocialLinks,
  FooterText,
} from "./FooterStyles";

const Footer = () => {
  var options = { year: "numeric", month: "long" };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  return (
    <FooterContainer className="footer">
      <FooterContent className="footer-content">
        <FooterLinks className="footer-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </FooterLinks>

        <SocialLinks className="social">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link to={url}>{icon}</Link>
              </li>
            );
          })}
        </SocialLinks>

        <FooterText className="footer-text">
          <span> &copy; {currentDate}  </span>Nisig Bremen
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

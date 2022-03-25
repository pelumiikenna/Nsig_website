import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../images/nisigLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const changeNavbarColor = () => {
    if (window.scrollY >= 0) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav style={ colorChange ?   {zIndex : 10} : {}}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* {`${showLinks? 'links-container show-container' :'links-container'}`} */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

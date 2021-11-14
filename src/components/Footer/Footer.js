import React from "react";
import "./footer.css";
import PageLogo from "../../images/page-logo.svg";
import InstaLogo from "../../images/insta-logo.svg";
import SocialLogo from "../../images/social-icons.svg";
import FacebookLogo from "../../images/facebook-icon.svg";
import YoutubeLogo from "../../images/youtube-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item-div">
        {/* <p>Footer</p> */}
        <div className="footer-logo">
          {/* <p>Logo</p> */}
          <img className="footer-logo-img" src={PageLogo} />
        </div>
        <div className="footer-items">
          <p>About Us</p>
          <p>Term of Use</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer-links">
          <img style={{ width: "2rem" }} src={InstaLogo} />
          <img
            style={{ width: "2rem", marginLeft: "1rem", marginRight: "1rem" }}
            src={SocialLogo}
          />
          <img
            style={{ width: "2rem", marginRight: "1rem" }}
            src={FacebookLogo}
          />
          <img style={{ width: "2rem" }} src={YoutubeLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

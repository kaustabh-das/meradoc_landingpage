import React from "react";
import "./hero.css";
import HeroImg from "../../images/heroimg.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-header">
        <p className="hero-header-p">
          Feel better after speaking <br /> to a MeraClinic <br /> Doctor
        </p>
      </div>
      <div className="hero-bottom">
        <div className="hero-button">
          <p>Book Consultation</p>
        </div>
        <div className="hero-img-div">
          <img className="hero-img" src={HeroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

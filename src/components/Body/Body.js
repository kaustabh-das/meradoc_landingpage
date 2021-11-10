import React, { useState, useEffect } from "react";
import "./body.css";
import MeraclinicImg from "../../images/meraclincBanner.png";
import MeraclinicWorksImg from "../../images/meraclinic-works.svg";
import ResponsiveMeraclinicWorksImg from "../../images/Responsive-meraclinic-works.svg";
import Vector from "../../images/Vector.svg";

const Body = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // let display_val=""

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="body-section">
      <div className="meraClinic">
        <div className="meraClinic-left-div">
          <p className="meraClinic-header">MeraClinic</p>
          <p className="meraClinic-pera">Powered by</p>
          <p className="meraClinic-desc">
            But it can do more! You can control how much you get, place it
            within HTML structure as it expands, and get different bits of it in
            repeated elements. But it can do more! You can control how much you
            get, place it within HTML structure as
          </p>
          <div className="meraClinic-button">
            <p>Book Consultation</p>
          </div>
        </div>
        <div className="meraClinic-right-div">
          <img className="meraClinicImg" src={MeraclinicImg} />
        </div>
      </div>

      <div className="meraClinic-works">
        <div className="meraClinic-works-header">
          <p>How MeraClinic works</p>
        </div>
        <div>
          <img className="meraClinic-works-img" src={MeraclinicWorksImg} />
        </div>
      </div>

      <div className="meraClinic-feature">
        <div className="meraClinic-feature-header">
          <p>Our MeraClinic Features</p>
        </div>
        <div className="meraClinic-feature-cards">
          <div className="meraClinic-feature-card">
            <img src={Vector} />
            <p className="meraClinic-feature-card-header">Need Assistance</p>
            <div className="meraClinic-feature-card-buttom">
              Speak to a Doctor
            </div>
          </div>
          <div className="meraClinic-feature-card">
            <img src={Vector} />
            <p className="meraClinic-feature-card-header">Need Medicines</p>
            <div className="meraClinic-feature-card-buttom">Call to Order</div>
          </div>
          <div className="meraClinic-feature-card">
            <img src={Vector} />
            <p className="meraClinic-feature-card-header">Book a Lab test</p>
            <div className="meraClinic-feature-card-buttom">Call to Order</div>
          </div>
        </div>
      </div>

      <div className="speakers-profile"></div>
    </div>
  );
};

export default Body;

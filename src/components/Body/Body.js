import React, { useState, useEffect } from "react";
import "./body.css";
import MeraclinicImg from "../../images/meraclincBanner.png";
import MeraclinicWorksImg from "../../images/meraclinic-works.svg";
import ResponsiveMeraclinicWorksImg from "../../images/Responsive-meraclinic-works.svg";
import Vector from "../../images/Vector.svg";
import Preson1 from "../../images/person1.svg";
import webinarBannerImg from "../../images/webinar-banner.svg";
import Bluestar from "../../images/blue-stars.svg";
import Meradoc from "../../images/meradoc.svg";
import Webainars from "../../sections/Webainars/Webainars";

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

      <div className="speakers-profile">
        <p className="speakers-profile-header">Speakers Profiles</p>
        <p className="speakers-profile-desc">
          The best of the healthcare industry
        </p>
        <div className="speakers-profile-cards">
          <div className="speakers-profile-card">
            <img className="speakers-profile-card-img" src={Preson1} />
            <p className="speakers-profile-card-header">Dr. Naresh Trehan</p>
            <p className="speakers-profile-card-desc">Chairman & MD Medanta</p>
          </div>
          <div className="speakers-profile-card">
            <img className="speakers-profile-card-img" src={Preson1} />
            <p className="speakers-profile-card-header">Dr. Naresh Trehan</p>
            <p className="speakers-profile-card-desc">Chairman & MD Medanta</p>
          </div>
          <div className="speakers-profile-card">
            <img className="speakers-profile-card-img" src={Preson1} />
            <p className="speakers-profile-card-header">Dr. Naresh Trehan</p>
            <p className="speakers-profile-card-desc">Chairman & MD Medanta</p>
          </div>
        </div>
      </div>

      <div className="webainars-banner">
        <div className="webainars-banner-left-div">
          <p className="webainars-banner-header">
            Get more engaged with our Webinars
          </p>
          <p className="webainars-banner-desc">
            But it can do more! You can control how much you get, place it
            within HTML structure as it expands, and get different bits of it in
            repeated elements. But it can do more! You can control how much you
            get, place it within HTML structure as
          </p>
          <div className="webainars-banner-button">
            <p>Join Newsletter Upcomming Webainars</p>
          </div>
        </div>
        <div className="webainars-banner-right-div">
          <img className="webainars-banner-img" src={webinarBannerImg} />
        </div>
      </div>

      <Webainars />

      <div className="aliances">
        <p className="aliances-header">Our Aliances</p>
        <p className="aliances-desc">The best of healthcare industry</p>
        <div className="aliances-cards">
          <div className="aliances-cards-div-left">
            <div className="aliances-card">
              <p>Logo</p>
            </div>
            <div className="aliances-card">
              <p>Logo</p>
            </div>
          </div>
          <div className="aliances-cards-div-right">
            <div className="aliances-card">
              <p>Logo</p>
            </div>
            <div className="aliances-card">
              <p>Logo</p>
            </div>
          </div>
        </div>
        <div className="aliances-cards">
          <div className="aliances-cards-div-left">
            <div className="aliances-card">
              <p>Logo</p>
            </div>
            <div className="aliances-card">
              <p>Logo</p>
            </div>
          </div>
          <div className="aliances-cards-div-right">
            <div className="aliances-card">
              <p>Logo</p>
            </div>
            <div className="aliances-card">
              <p>Logo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <p className="testimonials-header">Testimonials</p>
        <p className="testimonials-desc">The best of the healthcare industry</p>
        <div className="testimonials-cards">
          <div className="testimonials-card">
            <p className="testimonials-card-desc">
              "For example, the smallest screen size in active use is currently
              the iPhone 5, which comes in at 320 pixels wide. From there, most
              subsequent iPhone models toggle between 375 and 414 pixels wide
              and tablets."
            </p>
            <p className="testimonials-card-name">Harshit Suneja</p>
            <div className="testimonials-card-stars">
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
            </div>
          </div>
          <div className="testimonials-card">
            <p className="testimonials-card-desc">
              "For example, the smallest screen size in active use is currently
              the iPhone 5, which comes in at 320 pixels wide. From there, most
              subsequent iPhone models toggle between 375 and 414 pixels wide
              and tablets."
            </p>
            <p className="testimonials-card-name">Harshit Suneja</p>
            <div className="testimonials-card-stars">
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
            </div>
          </div>
          <div className="testimonials-card">
            <p className="testimonials-card-desc">
              "For example, the smallest screen size in active use is currently
              the iPhone 5, which comes in at 320 pixels wide. From there, most
              subsequent iPhone models toggle between 375 and 414 pixels wide
              and tablets."
            </p>
            <p className="testimonials-card-name">Harshit Suneja</p>
            <div className="testimonials-card-stars">
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
              <img src={Bluestar} />
            </div>
          </div>
        </div>
      </div>

      <div className="meraDoc-Banner">
        <div className="meraDoc-Banner-left-div">
          <p className="meraDoc-Banner-header">Join the MERADOC Revolution</p>
          <p className="meraDoc-Banner-desc">
            But it can do more! You can control how much you get, place it
            within HTML structure as it expands.
          </p>
          <div className="meraDoc-Banner-button">
            <p>Join Our Team</p>
          </div>
        </div>
        <div className="meraDoc-Banner-right-div">
          <img className="meraDoc-BannerImg" src={Meradoc} />
        </div>
      </div>
    </div>
  );
};

export default Body;

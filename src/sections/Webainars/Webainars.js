import React from "react";
import "./webainars.css";
import WebainarsDoc from "../../images/webainarsdoc.svg";
import webinarImg from "../../images/webinars_img.svg";

const Webainars = () => {
  const cardsArray = [0, 1, 2];

  return (
    <div>
      <div className="webainars">
        <p className="webainars-header">Webainars</p>
        <div className="webainars-cards">
          {cardsArray.map((cards) => (
            <div className="webainars-card">
              <img className="webainars-card-img" src={webinarImg} />
              <div className="webainars-card-body">
                <p className="webainars-card-body-p">
                  Life after COVID: Facts & Fear
                </p>
                <p>04:00 PM @ 18th November 2021</p>
                <div className="webainars-card-doctor-div">
                  <img
                    style={{ width: "3.5rem", borderRadius: "3rem" }}
                    src={WebainarsDoc}
                  />
                  <div className="webainars-card-doctor-detail">
                    <p>Dr. Randhir Sud</p>
                    <p>Chairman Gastroenterology, Medanta</p>
                  </div>
                </div>
                <div className="webainars-card-button">
                  <p>Register for Webinars</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="webainars-card"></div>
          <div className="webainars-card"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Webainars;

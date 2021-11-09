import React, { useWindowDimensions, useState, useEffect } from "react";
import { Menu as MenuIcon } from "react-feather";
import "./navbar.css";

const Navbar = () => {
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
    <div className="navbar">
      <div className="navbar_item_div">
        <div className="navbar_item_div-left">
          {windowDimensions.width < 748 ? (
            <MenuIcon style={{ marginRight: ".5rem" }} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          <h1 className="navbar_logo">Navbar</h1>
          <p className="item">Medicines</p>
          <p className="item">Diagnostic</p>
          <p className="item">Covid-19</p>
          <p className="item">About Us</p>
        </div>
        <div className="navbar_item_div-right">
          <div className="nav-button">
            <p>How to use MeraClinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

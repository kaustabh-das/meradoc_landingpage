import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </>
  );
};

export default home;

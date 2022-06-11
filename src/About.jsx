import React from "react";
import web from "../src/images/photo2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name="Welcome to About Page" 
      imgsrc={web} visit="/contact" 
      btn="Contact Now"/>
    </>
  );
};
export default About;

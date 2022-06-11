import React from "react";
import web from "../src/images/photo1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
     <Common name="You have Business, we have Strategy. Grow your business with" 
      imgsrc={web} visit="/contact" 
      btn="Get Started"/>
    </>
  );
};
export default Home;

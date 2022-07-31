import React from "react";
import Carousel from "../components/Carousel";
import Collaborators from "../components/Collaborators";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import FixedButton from "../components/SideFixedButton";
import SummarySection from "../components/SummarySection";

const Homepage = () => {
  return (
    <>
      <FixedButton />
      <NavigationBar />
      <Hero />
      <SummarySection />
      <Collaborators />
      <Carousel />
      <Footer />
    </>
  );
};

export default Homepage;

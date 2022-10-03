import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

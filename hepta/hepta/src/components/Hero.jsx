import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Success Starts Here</h1>
        <p>We provide innovative solutions for your business needs</p>
        <a href="#services" className="btn">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;

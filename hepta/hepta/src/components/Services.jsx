import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="services-cards">
          <ServiceCard
            title="Web Development"
            description="We provide high-quality web development services to help you build your dream website."
          />
          <ServiceCard
            title="Mobile App Development"
            description="Our team specializes in mobile app development for both Android and iOS platforms."
          />
          <ServiceCard
            title="Digital Marketing"
            description="We offer digital marketing services to help your business grow and succeed online."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

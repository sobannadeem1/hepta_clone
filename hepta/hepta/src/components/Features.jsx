import React from "react";
import "./Features.css";
import ServiceCard from "./ServiceCard";

const Features = () => {
  return (
    <section className="features" id="services">
      <div className="container">
        <h2>Our Features</h2>
        <div className="features-grid">
          <ServiceCard
            title="Fast Delivery"
            description="Quick and efficient service"
          />
          <ServiceCard
            title="24/7 Support"
            description="We're here for you anytime"
          />
          <ServiceCard
            title="Affordable Prices"
            description="High quality at great prices"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

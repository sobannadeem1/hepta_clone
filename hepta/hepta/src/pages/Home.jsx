import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1.5, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <section className="hero-section">
        <div className="hero-content">
          <p style={{ fontSize: "6rem", color: "black", fontWeight: "bolder" }}>
            {" "}
            Travel & Tours
          </p>
          <p>
            Explore the world with us. Discover new destinations and adventures.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="card-container">
          <div className="card" data-aos="fade-up">
            <h3>Discover Santorini</h3>
            <p>
              Experience the stunning views and vibrant culture of Santorini,
              Greece.
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h3>Paris Getaway</h3>
            <p>
              Visit the romantic city of Paris and indulge in its rich history
              and cuisine.
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <h3>Bali Adventure</h3>
            <p>
              Explore the tropical paradise of Bali, known for its beaches and
              temples.
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h3>Alaskan Expedition</h3>
            <p>Embark on a thrilling journey through the Alaskan wilderness.</p>
          </div>
        </div>
      </section>
      <section className="service-section">
        <h2>Experience Once In Your Life Time</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <img src="1509483.png" alt="Good Foods" />
            <h3>Good Foods</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="service-card">
            <img src="travelicon.png" alt="Travel Anywhere" />
            <h3>Travel Anywhere</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="service-card">
            <img src="airplane.webp" alt="Airplane" />
            <h3>Airplane</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="service-card">
            <img src="download.png" alt="Beach Resort" />
            <h3>Beach Resort</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="service-card">
            <img src="mountain.jpg" alt="Mountain Climbing" />
            <h3>Mountain Climbing</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="service-card">
            <img
              src="hot-air-balloon-icon.png"
              alt="Hot Air Balloon"
              style={{ borderRadius: "2.2rem", height: "3rem" }}
            />
            <h3>Hot Air Balloon</h3>
            <p>Far far away, behind the word mountains...</p>
          </div>
        </div>
      </section>
      <section className="happy-customers-section">
        <h2>Happy Customers</h2>

        <div className="customer-reviews">
          <div className="customer-card">
            <img className="image-placeholder" src="download1.jpeg" />
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h4>— Clare Gupta</h4>
          </div>

          <div className="customer-card">
            <img src="download.jpeg" className="image-placeholder" />
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h4>— Rogie Slater</h4>
          </div>

          <div className="customer-card">
            <img className="image-placeholder" src="download (1).jpeg" />
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h4>— John Doe</h4>
          </div>
        </div>
      </section>
      <section className="top-destinations-section">
        <h2>Top Destinations</h2>
        <div className="destination-cards">
          <div className="destination-card">
            <img src="img.jpg" alt="Food&Wines" />
            <h3>Food&Wines</h3>
          </div>
          <div className="destination-card">
            <img src="restort.jpg" alt="Resort&Spa" />
            <h3>Resort&Spa</h3>
          </div>
          <div className="destination-card">
            <img src="img_4.jpg" alt="Hotel Rooms" />
            <h3>Hotel Rooms</h3>
          </div>
          <div className="destination-card">
            <img src="mountainclimbing.jpg" alt="Mountains Climbing" />
            <h3>Mountains Climbing</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2 className="section-title">Who are we?</h2>
        <p>
          We are a travel agency based in Toronto, Ontario, specializing in
          providing travel and related services to destinations worldwide. We
          focus on offering customer-oriented, high-quality travel services at
          competitive rates.
        </p>
        <p>
          Mok Travel & Tours aims to be a leading travel agency, known for its
          exceptional customer service and expertise in the travel and tourism
          industry.
        </p>

        <h2 className="section-title">Our Mission</h2>
        <p>
          To be a world-renowned travel agency offering high-quality, prompt,
          and stress-free service delivery in the travel and tourism industry,
          using modern information technology, highly skilled and competent
          manpower.
        </p>

        <h2 className="section-title">Our Vision</h2>
        <p>
          To be a household name in reliable and efficient service delivery in
          the travel and tourism industry in the world.
        </p>
      </div>

      <div className="about-image-wrapper">
        <img src="./gaap.jpg" alt="Travelers" className="about-image" />
      </div>
    </section>
  );
};

export default About;

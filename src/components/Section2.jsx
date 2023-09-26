import React from "react";
import img1 from "/images/thomas.webp";
import img2 from "/images/carl.webp";

const Section2 = () => {
  return (
    <section className="section-2">
      <div className="container">
        <div className="sect-2-content">
          <div className="content-1">
            <p className="blue-text">
              We believe in building each other and hence
            </p>
            <h1>Work with some amazing partners</h1>
            <p>
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          <div className="carousel-div">
            <div className="carousel-card">
              <img src={img1} alt="" />
              <div className="carousel-text">
                <p>
                  It seems that only fragments of the original text remain in
                  the tech texts are used today.
                </p>
                <p>Thomas Israel</p>
                <p>Staff Engineer</p>
              </div>
            </div>
            <div className="carousel-card">
              <img src={img2} alt="" />
              <div className="carousel-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vel laborum vitae dolore? Sint ducimus dignissimos libero.
                  Nihil, qui nulla aspernatur debitis incidunt dicta voluptates
                  deserunt perspiciatis dolorem est quod.
                </p>
                <p>Jill Valentine</p>
                <p>Staff Engineer</p>
              </div>
            </div>
          </div>

          <div className="rates-div">
            <div className="rates-left">
              <h1>Our Comfortable Rates</h1>
              <p>
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <button>Subscribe Now</button>
            </div>
            <div className="rates-right">
              <div className="starter rate-col">
                <h3>Starter</h3>
                <h1>$39/mo</h1>
                <ul>
                  <li>Full Access</li>
                  <li>Source Files</li>
                  <li>Free Appointments</li>
                  <li>Enhanced Security</li>
                </ul>
                <button>Get Started</button>
              </div>
              <div className="professional rate-col">
                <h3>Professional</h3>
                <h1>$59/mo</h1>
                <ul>
                  <li>Full Access</li>
                  <li>Source Files</li>
                  <li>Free Appointments</li>
                  <li>Enhanced Security</li>
                </ul>
                <button>Try it Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

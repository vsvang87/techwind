import React from "react";

const Section2 = () => {
  return (
    <section className="section-2">
      <div className="container">
        <div className="sect-2-content">
          <p>We believe in building each other and hence</p>
          <h1>Work with some amazing partners</h1>
          <p>
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
          <div className="carousel-div"></div>

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

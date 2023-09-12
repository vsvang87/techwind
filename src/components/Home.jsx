import React from "react";
import img from "/images/startup.svg";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { HiOutlineDocument } from "react-icons/hi";
import "../sass/home.scss";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="flex-start">
            <div className="left col">
              <h1>
                Our Creativity Is Your{" "}
                <span className="blue-text">Success</span>
              </h1>
              <p>
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>
              <button className="btn start-btn">
                <PiEnvelopeSimpleLight className="icon" /> Get Started
              </button>
              <button className="btn doc-btn">
                <HiOutlineDocument className="icon" /> Documentation
              </button>
            </div>
            <div className="right col">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

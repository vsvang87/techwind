import React from "react";
import img from "/images/startup.svg";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { HiOutlineDocument } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <div className="left">
            <h1>
              Our Creativity Is Your <span>Success</span>
            </h1>
            <p>
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS v3.x html page.
            </p>
            <button>
              <PiEnvelopeSimpleLight /> Get Started
            </button>
            <button>
              <HiOutlineDocument /> Documentation
            </button>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

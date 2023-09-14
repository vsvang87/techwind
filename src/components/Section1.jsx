import React from "react";
import seo from "/images/seo.svg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import img from "/images/heart-phone.svg";

const Section1 = () => {
  return (
    <section className="middle-section">
      <div className="container">
        <div className="middle-content">
          <div className="content-1">
            <h1>How it Work?</h1>
            <p>
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          <div className="content-2">
            <div className="content-2-left">
              <img src={seo} alt="" />
            </div>
            <div className="content-2-right">
              <h1>Change the way you build websites</h1>
              <p>
                You can combine all the Techwind templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul>
                <li>Digital Marketing Solutions for Tomorrow</li>
                <li>Our Talented & Experienced Marketing Agency</li>
                <li>Create your won skin to match your brand</li>
              </ul>
            </div>
          </div>
          <div className="content-3">
            <div className="content-3-left">
              <h1>Speed up your development with Techwind.</h1>
              <p>
                You can combine all the Techwind templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul>
                <li>Digital Marketing Solutions for Tomorrow</li>
                <li>Our Talented & Experienced Marketing Agency</li>
                <li>Create your own skin to match your brand</li>
              </ul>
              <Link to="">
                Find Out More <FiChevronRight />
              </Link>
            </div>
            <div className="content-3-right">
              <div className="form">
                <img src={img} alt="phone-heart img" />
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

import React from "react";
import seo from "/images/seo.svg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { RiKey2Line } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
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
              <ul className="list">
                <li>
                  <BsCheckCircle className="list-icon" />
                  Digital Marketing Solutions for Tomorrow
                </li>

                <li>
                  <BsCheckCircle className="list-icon" />
                  Our Talented & Experienced Marketing Agency
                </li>

                <li>
                  <BsCheckCircle className="list-icon" />
                  Create your won skin to match your brand
                </li>
              </ul>
              <Link to="" className="link">
                Find Out More <FiChevronRight />
              </Link>
            </div>
          </div>
          <div className="content-3">
            <div className="content-3-left">
              <h1>
                Speed up your development with{" "}
                <span className="blue-text">Techwind.</span>
              </h1>
              <p>
                You can combine all the Techwind templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul className="left-list">
                <li>
                  <BsCheckCircle className="list-icon" />
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li>
                  <BsCheckCircle className="list-icon" />
                  Our Talented & Experienced Marketing Agency
                </li>
                <li>
                  <BsCheckCircle className="list-icon" />
                  Create your own skin to match your brand
                </li>
              </ul>
              <Link to="" className="link">
                Find Out More <FiChevronRight />
              </Link>
            </div>
            <div className="content-3-right">
              <div className="form-div">
                <img src={img} alt="phone-heart img" />
                <form>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser />
                      Name:
                    </label>

                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <PiEnvelopeSimpleThin />
                      Email:
                    </label>

                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <RiKey2Line />
                      Password:
                    </label>

                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <button>Download</button>
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

import React from "react";
import amazon from "/images/amazon.svg";
import google from "/images/google.svg";
import lenovo from "/images/lenovo.svg";
import paypal from "/images/paypal.svg";
import shopify from "/images/shopify.svg";
import spotify from "/images/spotify.svg";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="banner-content">
          <div className="img-div">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="img-div">
            <img src={google} alt="google" />
          </div>
          <div className="img-div">
            <img src={lenovo} alt="lenovo" />
          </div>
          <div className="img-div">
            <img src={paypal} alt="paypal" />
          </div>
          <div className="img-div">
            <img src={spotify} alt="spotify" />
          </div>
          <div className="img-div">
            <img src={shopify} alt="shopify" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

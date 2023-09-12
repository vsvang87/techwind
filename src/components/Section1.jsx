import React from "react";
import seo from "/images/seo.svg";

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

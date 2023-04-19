import React from "react";

const Intro = () => {
  return (
    <div className="container mt-10">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="hiring-title">
          OneApp - everything you need to hire, all in one place
        </h1>
        <p className="hiring-desc">
          With our user-friendly interface and powerful search tools, finding
          the right employee for your business has never been easier.
        </p>
        <div className="hiring-intro-cards">
          <div className="hiring-intro-card">
            <p className="hiring-count">
              1.5K <span className="count-plus">+</span>
            </p>
            <p className="hiring-card-title">Companies</p>
          </div>
          <div>
            <p className="hiring-count">
              18.16K <span className="count-plus">+</span>
            </p>
            <p className="hiring-card-title">Applicants</p>
          </div>
        </div>
        <div className="d-flex gap-2 ">
          <button className="btn btn-black py-3 rounded-5">Start Hiring</button>
          <button className="btn btn-blue py-3 rounded-5">Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

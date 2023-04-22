import React from "react";
import "./style.css";

const index = () => {
  return (
    <div className="dream-wrapper mt-5  ">
      <div className="container">
        <div className="top-wrapper  flex-wrap d-flex">
          <div>
            <h1 className="dream-title">
              How to land your <span className="span-color">dream job</span> ?
            </h1>
            <p className="dream-desc">
              Filling out countless of job application forms are a thing of the
              past.
            </p>
          </div>
          <a href="#">
            <button className="btn btn-blue rounded-5">Create a profile</button>
          </a>
        </div>
        <div className="HowTo_infoContainer__8_Psm flex flex-wrap ">
          <div className="HowTo_leftSide__fCgE0">
            <div className="HowTo_info__DibNn">
              <span className="HowTo_number__jA_17">1</span>
              <p className="HowTo_text___Zw_u">
                Sign up to create a OneApp profile - a new generation resume
                that helps you stand out
              </p>
            </div>
            <div className="HowTo_info__DibNn">
              <span className="HowTo_number__jA_17">2</span>
              <p className="HowTo_text___Zw_u">
                Use your OneApp profile to apply to multiple jobs, across the
                world with just one click
              </p>
            </div>
            <div className="HowTo_info__DibNn">
              <span className="HowTo_number__jA_17">3</span>
              <p className="HowTo_text___Zw_u">
                Track and manage all your job applications in one place
              </p>
            </div>
            <div className="HowTo_info__DibNn">
              <span className="HowTo_number__jA_17">4</span>
              <p className="HowTo_text___Zw_u">
                Be discovered by top companies worldwide!
              </p>
            </div>
          </div>
          <div className="HowTo_rightSide__McpuC  d-flex flex-wrap">
            <span className="HowTo_imgLeft__SVmWb">
              <img
                src="https://oneapp.uz/images/platforms.png"
                width="360"
                height="290"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </span>
            <span className="HowTo_icon__eeUD5">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 29.5H8.5V18.5H24H24.5V18V9.52711L38.9729 24L24.5 38.4729V30V29.5H24Z"
                  fill="#6FCF97"
                  stroke="black"
                ></path>
                <path
                  d="M8 30.0003V18.0003H24V8.32031L39.68 24.0003L24 39.6803V30.0003H8Z"
                  fill="#6FCF97"
                ></path>
              </svg>
            </span>
            <span className="HowTo_imgRight__ErD4o">
              <img
                src="https://oneapp.uz/images/oa.png"
                width="250"
                height="200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

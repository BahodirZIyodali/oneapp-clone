import React from "react";

const Works = () => {
  return (
    <div className="container mt-5">
      <h1 className="tech-title text-center">How It Works</h1>
      <p className="tech-desc text-center">
        Our job site is designed to connect job seekers with employers who are
        looking to hire talented individuals. Here's a brief overview of how it
        works.
      </p>
      <div className="block">
        <div className="d-flex  justify-content-between align-items-center works mb-5">
          <div>
            <h1 className="works-title">Start using OneApp for Free</h1>
            <p className="works-desc">
              We offer a free plan that includes all the basic ATS features.
              Under this plan, you can post 1 free vacancy every month. If you
              wish to post more, you can upgrade your plan or pay separately for
              each additional vacancy.
            </p>
          </div>
          <div className="works-img-wrap">
            <img
              className="works-img"
              src="https://oneapp.uz/_next/static/media/howWorksEmp1.726b8e51.png"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center works  mb-5">
          <div className="works-img-wrap">
            <img
              className="works-img"
              src="https://oneapp.uz/_next/static/media/howWorksEmp2.778f999f.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="works-title">Your company's own career page </h1>
            <p className="works-desc">
              Once you create your company profile we generate a career page for
              all the vacancies that you post as well as information about your
              company to attract talent. You can integrate it with your company
              site or share it with your network to get all applicants in once
              place.
            </p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center works  mb-10">
          <div>
            <h1 className="works-title">
              Gather applicants from your network in one place
            </h1>
            <p className="works-desc">
              No more cluttered mailbox. Create a vacancy and share it across
              your social media to attract candidates across your network in
              once place. There you can track and filter all candidates in one
              spot.
            </p>
          </div>
          <div className="works-img-wrap">
            <img
              className="works-img"
              width="590"
              height="370"
              src="https://oneapp.uz/_next/static/media/howWorksEmp3.e9ecaf21.png"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center works  mb-5">
          <div className="works-img-wrap">
            <img
              className="works-img"
              width="590"
              height="370"
              src="https://oneapp.uz/_next/static/media/howWorksEmp4.8e06c015.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="works-title">Track applicants using our free ATS</h1>
            <p className="works-desc">
              While our paid plans give you access to many useful features, you
              can manage your applicants and vacancies using our free HRM.
            </p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center works  mb-10">
          <div>
            <h1 className="works-title">
              Source from 18,000 qualified applicants
            </h1>
            <p className="works-desc">
              There are over 18,000 applicants looking for opportunities in
              OneApp as well as more experienced applicants that are not
              actively applying for jobs but are open to better opportunities.
              You can reach out to all of these applicants when you publish your
              vacancy.
            </p>
          </div>
          <div className="works-img-wrap">
            <img
              className="works-img"
              width="590"
              height="370"
              src="https://oneapp.uz/_next/static/media/howWorksEmp4.8e06c015.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

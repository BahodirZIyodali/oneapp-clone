import React from "react";

const Works = () => {
  return (
    <div className="container mt-10">
      <h1 className="tech-title text-center">How It Works</h1>
      <p className="tech-desc text-center">
        The structure of the program for all the participants.
      </p>
      <div className="block">
        <div className="d-flex  justify-content-between align-items-center works mb-5">
          <div>
            <h1 className="works-title">For interns</h1>
            <p className="works-desc">
              Tech internship programs provide an opportunity to gain valuable
              experience in the technology industry and to develop the skills
              and knowledge necessary to succeed in their future careers.
              Interns work alongside experienced professionals and receive
              mentorship and guidance throughout the program, which can help
              them build their network and identify potential career paths.
            </p>
            <a href="#" className="works-link">
              Apply to Internships
            </a>
          </div>
          <div className="works-img-wrap">
            <img
              className="works-img"
              width="590"
              height="370"
              src="https://oneapp.uz/images/howWorksIntern1.png"
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
              src="https://oneapp.uz/images/howWorksIntern2.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="works-title">For Companies</h1>
            <p className="works-desc">
            Tech internship programs provide an opportunity to invest in the development of new talent, identify and evaluate potential future employees, and drive innovation by bringing fresh perspectives and new ideas to the company. Companies can tailor the internship program to meet their specific needs and goals, and the program can provide extra resources and support to increase productivity and efficiency.
            </p>
            <a href="#" className="works-link">
             Hire Interns
            </a>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center works  mb-10">
          <div>
            <h1 className="works-title">For Universities and Learning Centre's</h1>
            <p className="works-desc">
            Tech internship programs provide an opportunity to connect students with industry professionals and to provide students with practical, real-world experience in the technology industry. Universities and learning centre's can work with companies to develop programs that align with their curriculum and academic requirements, and they can provide academic credit to participants.
            </p>
            <a href="#" className="works-link">
            Contact Us

            </a>
          </div>
          <div className="works-img-wrap">
            <img
              className="works-img"
              width="590"
              height="370"
              src="https://oneapp.uz/images/howWorksIntern3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

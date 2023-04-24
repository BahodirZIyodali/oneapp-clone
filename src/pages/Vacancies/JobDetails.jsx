import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const JobDetails = () => {
  const [job, setJob] = useState({});
  const { position } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleGoBack = () => {
    navigate(-1); // Go back to previous route
  };

  useEffect(() => {
    fetch(`https://courageous-lime-betta.cyclic.app/vacancies/${position}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
        setIsLoading(false);
      });
  }, [position]);

  return (
    <section className="mt-5">
      <div className="container">
        <button className="details__top backButton" onClick={handleGoBack}>
          <span>
            <IoIosArrowBack size={20} />
          </span>{" "}
          go back
        </button>{
        isLoading ? (
       <div className="text-center mt-5">
       <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
     </div>
        ) : (
        <div className="details__wrapper">
          <div className="details__top">
            <div>
              <h1>{job.company}</h1>
            </div>
            <button>
              <a href={job.companySite}>Company Site</a>
            </button>
          </div>
          <div className="job__details">
            <div className="about__job">
              <div>
                <h6>
                  {job.postedAt} - {job.contract}
                </h6>
                <h1>{job.position}</h1>
                <span>{job.location}</span>
              </div>
              <button className="btn btn-blue">Apply</button>
            </div>
            <p className="job__desc">{job.desc}</p>
            <div className="requirements">
              <h1>Requirements</h1>
              <p>{job.requirements && job.requirements.reqTitle}</p>
              <ul className="requirement__item">
                {job.requirements &&
                  job.requirements.reqItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="responsibility">
              <h1>What you will do?</h1>
              <p>{job.responsibility && job.responsibility.resTitle}</p>
              <ol type="1" className="responsibility__item">
                {job.responsibility &&
                  job.responsibility.resItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ol>
            </div>
          </div>
        </div>)}
      </div>
    </section>
  );
};

export default JobDetails;

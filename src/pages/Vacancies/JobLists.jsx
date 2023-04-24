import React, { useState ,useEffect} from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobLists = () => {
  const [originalData, setOriginalData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchTermValue = searchTerm.toLowerCase();
  
  useEffect(() => {
    fetch("https://courageous-lime-betta.cyclic.app/vacancies")
      .then((response) => response.json())
      .then((data) => {
        setOriginalData(data);
        setJobData(data);
        setIsLoading(false);
      });
  }, []);
  
  // ======== search data by location =====
  
  const locationSearchHandler = () => {
    const filteredData = originalData.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
  
    setJobData(filteredData);
  };
  const positionOrCompSearchHandler = () => {
    const filteredData = originalData.filter((job) =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  
    setJobData(filteredData);
  };
  
  // ======== Filter data by part-time, full-time, freelance etc======
  const filterJobData = (e) => {
    const filterValue = e.target.value;
  
    let filteredData;
  
    if (filterValue === "full-time") {
      filteredData = originalData.filter((job) => job.contract === "Full Time");
    } else if (filterValue === "part-time") {
      filteredData = originalData.filter((job) => job.contract === "Part Time");
    } else if (filterValue === "freelance") {
      filteredData = originalData.filter((job) => job.contract === "Freelance");
    } else if (filterValue === "contract") {
      filteredData = originalData.filter((job) => job.contract === "Contract");
    } else if (filterValue === "apprenticeship") {
      filteredData = originalData.filter((job) => job.contract === "Apprenticeship");
    } else if (filterValue === "self-employed") {
      filteredData = originalData.filter((job) => job.contract === "Self-employed");
    } else if (filterValue === "seasonal") {
      filteredData = originalData.filter((job) => job.contract === "Seasonal");
    } else if (filterValue === "internship") {
      filteredData = originalData.filter((job) => job.contract === "Internship");
    } else {
      filteredData = originalData;
    }
  
    if (searchByLocation) {
      filteredData = filteredData.filter((job) =>
        job.location.toLowerCase().includes(searchByLocation.toLowerCase())
      );
    }
  
    setJobData(filteredData);
  };
  
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault(); // Prevent form submission
      locationSearchHandler(); // Call locationSearchHandler function
    }
  };
  
  const handleKeyPress2=(e)=>{
    if(e.keyCode===13){
      e.preventDefault()
      positionOrCompSearchHandler()
    }
  }
 

  return (
    <section className="job__list mt-5">
      <div className="container">        {isLoading ? (
       <div className="text-center mt-5">
       <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
     </div>
        ) : (

        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                <i className="ri-search-line"></i>
              </span>
              <input
                type="text"
                placeholder="Search by title, companies"
                value={searchTerm}
                onKeyDown={handleKeyPress2}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="search__panel-02">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <input
                type="text"
                placeholder="Search by location"
                value={searchByLocation}
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button className="btn btn-blue" onClick={locationSearchHandler}>
                Search
              </button>
            </div>

            <div className="search__panel-03">
              <select onChange={filterJobData}>
                <option>Filter job by</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
                <option value="apprenticeship">Apprenticeship</option>
                <option value="self-employed">Self-employed</option>
                <option value="seasonal">Seasonal</option>
                <option value="internship"> Internship</option>
              </select>
            </div>
          </div>
          <h3 className="companies_searchResult__jm93C">
          <span className="found-res">Founded jobs:  {jobData.length}</span>
        </h3>
          <div className="jobs__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return job;
                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)  
                  )
                  return job;
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <img src={item.logo} style={{borderRadius:"50%", objectFit:"cover "}} alt="" />

                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>

                    <div className="location">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>)}
      </div>
    </section>
  );
};

export default JobLists;
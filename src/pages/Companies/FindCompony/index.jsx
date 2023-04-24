import React, { useState,useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./style.css";


const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [compData, setCompData] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [loadMore, setLoadMore] = useState(9);
  
  useEffect(() => {
    fetch("https://courageous-lime-betta.cyclic.app/componies")
      .then((response) => response.json())
      .then((data) => {
        setCompData(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter companies based on company name and location
    const filteredCompanies = companies.filter(
      (c) =>
        c.company.toLowerCase().includes(companyName.toLowerCase()) &&
        c.location.toLowerCase().includes(location.toLowerCase())
    );

    // Update compData state with filtered companies
    setCompData(filteredCompanies);
  };

  const handleLoadMore = () => {
    setLoadMore(loadMore + 9);
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleSearch(); // Call handleSearch function
    }
  };

  return (
    <div className="find-comp text-center">
      <div className="container">
        <form className="style_form__BitEr">
          <input
            className="style_input__HmV20"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company"
            onKeyDown={handleKeyPress}
          />
          <input
            className="style_input__HmV20"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            onKeyDown={handleKeyPress}
          />
          <button
            className="btn btn-blue style_searchBtn___ivSL"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
        <h3 className="companies_searchResult__jm93C">
          Found results: <span className="found-res">{compData.length}</span>
        </h3>
        {
        isLoading ? (
       <div className="text-center mt-5">
       <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
     </div>
        ) : (
        <section className="style_companiesContainer__CPqRt">
          {compData.slice(0, loadMore).map((c) => {
            return (
              <a className="card_card__E68iI" href="#" key={c.id}>
                <div className="card_cardheader__Vqio_">
                  <img
                    alt="c02451c0-477a-438d-ab35-6d218bb08132.png"
                    src={c.img}
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="card_logo__gyb7m"
                    loading="lazy"
                  />
                  <h1 className="card_companyTitle__1N_a5">{c.company}</h1>
                </div>
                <div className="card_footer__8dQn8">
                  <div className="card_location__uwUva">
                    {c.location}
                    <div className="card_jobNums__eGM4c">
                      <strong className="text-danger"> {c.vac}</strong> jobs
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </section>)}
        {compData.length > loadMore && (
          <div className="style_footerContainer__oK2aN">
            <button
              className="Button_button__XAWhu Button_contained__lHiVY Button_medium__B37yi Button_primary__Fu8l7 "
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;

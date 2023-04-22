import React, { useState } from "react";
import "./style.css";
const companies = [
  {
    id: 1,
    company: "iTechArt",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/9debef5d-bf6b-4e1f-99b9-3439548ee5ec.png",
    location: "New York, United States",
    vac: 11,
  },
  {
    id: 2,
    company: "INTER NATION School",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/1ce57560-4d9c-45b0-829c-0b0a0861f899.png",
    location: "  Tashkent, Uzbekistan",
    vac: 7,
  },
  {
    id: 3,
    company: "Korzinka",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/b4cd0b9c-190a-40dd-adc7-b37eca559598.jpg",
    location: " Tashkent, Uzbekistan",
    vac: 2,
  },
  {
    id: 4,
    company: "AB. Solutions",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/185601ce-74fa-4daf-b75b-55680f21b434.png",
    location: "  Tashkent, Uzbekistan",
    vac: 1,
  },
  {
    id: 5,
    company: "MBMC Agency",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/8b91afb0-a82a-449f-a1e0-d6ba8a6faeb0.jpg",
    location: "New York, USA",
    vac: 1,
  },
  {
    id: 6,
    company: "Uniplaces",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/40a2deac-fd93-4b60-9aaf-395f32680c66.png",
    location: " Lisboa, Portugal",
    vac: 9,
  },
  {
    id: 7,
    company: "Qalampir uz",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/8e83b3ab-98e7-4127-84c5-f5a3675e4153.png",
    location: "Tashkent,Uzbekistan",
    vac: 5,
  },
  {
    id: 8,
    company: "Novalab Tech",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.amazonaws.com/538ca6ff-9f85-4f38-99d0-f179dbb3ce9a.jpeg",
    location: "Tashkent,Uzbeksitan",
    vac: 8,
  },
  {
    id: 9,
    company: "Najot talim",
    img: "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_96,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/c5078225-bc76-4f21-9fa2-0fea7161961e.jpg",
    location: "Tashkent,Uzbekistan",
    vac: 2,
  },
  {
    id: 21,
    company: "Digital Solutions Ltd.",
    img: "https://picsum.photos/200/200/?random=21",
    location: "London, United Kingdom",
    vac: 7,
  },
  {
    id: 22,
    company: "InnovateX Inc.",
    img: "https://picsum.photos/200/200/?random=22",
    location: "Sydney, Australia",
    vac: 5,
  },
  {
    id: 23,
    company: "TechRevolution",
    img: "https://picsum.photos/200/200/?random=23",
    location: "Tokyo, Japan",
    vac: 3,
  },
  {
    id: 24,
    company: "FutureTech Solutions",
    img: "https://picsum.photos/200/200/?random=24",
    location: "San Francisco, USA",
    vac: 6,
  },
  {
    id: 25,
    company: "Innovative Minds",
    img: "https://picsum.photos/200/200/?random=25",
    location: "Amsterdam, Netherlands",
    vac: 4,
  },
  {
    id: 26,
    company: "TechWizards",
    img: "https://picsum.photos/200/200/?random=26",
    location: "São Paulo, Brazil",
    vac: 8,
  },
  {
    id: 27,
    company: "NextGen Solutions",
    img: "https://picsum.photos/200/200/?random=27",
    location: "Moscow, Russia",
    vac: 2,
  },
  {
    id: 28,
    company: "InnovateTech Inc.",
    img: "https://picsum.photos/200/200/?random=28",
    location: "Toronto, Canada",
    vac: 5,
  },
  {
    id: 29,
    company: "Global Innovations",
    img: "https://picsum.photos/200/200/?random=29",
    location: "Seoul, South Korea",
    vac: 7,
  },
  {
    id: 30,
    company: "TechGenius Solutions",
    img: "https://picsum.photos/200/200/?random=30",
    location: "Berlin, Germany",
    vac: 3,
  },
  {
    id: 111,
    company: "Globetech Inc.",
    img: "https://picsum.photos/200/200/?random=11",
    location: "Austin, USA",
    vac: 6,
  },
  {
    id: 122,
    company: "Alpha Solutions",
    img: "https://picsum.photos/200/200/?random=12",
    location: "Paris, France",
    vac: 4,
  },
  {
    id: 123,
    company: "TechGenius",
    img: "https://picsum.photos/200/200/?random=13",
    location: "Singapore",
    vac: 7,
  },
  {
    id: 141,
    company: "InnovaCorp",
    img: "https://picsum.photos/200/200/?random=14",
    location: "Vancouver, Canada",
    vac: 3,
  },
  {
    id: 153,
    company: "EcoTech Solutions",
    img: "https://picsum.photos/200/200/?random=15",
    location: "Stockholm, Sweden",
    vac: 5,
  },
  {
    id: 136,
    company: "Digital Innovations",
    img: "https://picsum.photos/200/200/?random=16",
    location: "Shanghai, China",
    vac: 8,
  },
  {
    id: 173,
    company: "TechConnect",
    img: "https://picsum.photos/200/200/?random=17",
    location: "Toronto, Canada",
    vac: 2,
  },
  {
    id: 138,
    company: "Innovative Solutions Inc.",
    img: "https://picsum.photos/200/200/?random=18",
    location: "Seoul, South Korea",
    vac: 6,
  },
  {
    id: 139,
    company: "GlobalTech Solutions",
    img: "https://picsum.photos/200/200/?random=19",
    location: "Berlin, Germany",
    vac: 9,
  },
  {
    id: 230,
    company: "NextGen Enterprises",
    img: "https://picsum.photos/200/200/?random=20",
    location: "New Delhi, India",
    vac: 4,
  },
];

const index = () => {
  const [compData, setCompData] = useState(companies);
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [loadMore, setLoadMore] = useState(9);

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
        </section>
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

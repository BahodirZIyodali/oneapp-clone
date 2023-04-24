import React,{useState,useEffect} from "react";
import "./style.css";
import { FcDiploma1, FcSettings } from "react-icons/fc";
import { MdPersonOutline } from "react-icons/md";
import { IoLaptopOutline, IoLogoDesignernews } from "react-icons/io5";
import { GrStatusDisabled } from "react-icons/gr";
import { Spinner } from "react-bootstrap";  
import { Link } from 'react-router-dom';


const index = () => {

  const [jobData, setJobData] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://courageous-lime-betta.cyclic.app/jobs")
      .then((response) => response.json())
      .then((data) =>{ 
        setJobData(data)
        setIsLoading(false);

      });
  }, []);
  
 
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between flex-wrap ">
        <div className="explore-wrapper mt-5">
          <div className="d-flex ">
            <h1 className="explore-title">
              Explore <span>920 job</span> opportunities
            </h1>
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0946 30.2658C22.9213 29.4726 25.8807 29.0724 28.7516 28.7059C29.3699 28.629 29.944 29.0579 29.9882 29.6621C30.0765 30.2667 29.6346 30.8197 29.0604 30.8965C26.2779 31.2494 23.4073 31.6271 20.7131 32.3907C20.1389 32.5563 19.5203 32.2154 19.3436 31.6288C19.167 31.0427 19.5204 30.4319 20.0946 30.2658Z"
                fill="#6DD0E7"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5275 19.0199C16.0767 14.3775 21.2001 10.3326 25.661 5.56568C26.0585 5.12047 26.7651 5.09662 27.2068 5.51224C27.6485 5.92829 27.6925 6.6279 27.2508 7.0731C22.7899 11.8538 17.6665 15.9118 13.1173 20.5679C12.6756 21.0025 11.9691 21.0087 11.5275 20.5812C11.13 20.1541 11.0858 19.4545 11.5275 19.0199Z"
                fill="#6DD0E7"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.00029 1.16414C2.86779 3.82123 2.73554 6.47833 2.60304 9.13587C2.60304 9.74449 2.07278 10.2144 1.45444 10.1848C0.836099 10.1548 0.394686 9.63672 0.394686 9.02766C0.527187 6.36615 0.65943 3.70507 0.791932 1.044C0.836099 0.435381 1.36619 -0.0314661 1.98453 0.00165925C2.5587 0.0347846 3.04446 0.555959 3.00029 1.16414Z"
                fill="#6DD0E7"
              ></path>
            </svg>
          </div>
          <p className="explore-desc">
            Personalized filters make it easy to find the your dream job
          </p>
        </div>
        <div className="d-flex justify-content-evently">
          <svg
            className="img_explore"
            width="77"
            height="77"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4448_117371)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.828 32.5151C28.2062 31.1576 26.1615 30.4376 23.6605 30.6559C15.924 31.3313 11.8217 36.4624 10.0642 43.1668C7.49838 52.9564 10.0099 66.1387 13.2234 73.0839C13.3753 73.413 13.7654 73.5553 14.0929 73.4031C14.422 73.2513 14.5658 72.8616 14.4139 72.5324C11.2945 65.7917 8.84329 52.9995 11.3328 43.4984C12.9467 37.3425 16.6692 32.5826 23.7751 31.9632C25.8899 31.7773 27.6134 32.3907 28.9876 33.535C28.2536 34.4445 27.555 35.3628 26.8937 36.2886C25.069 38.8446 21.6205 46.2652 21.1767 52.1406C20.8594 56.3554 22.0842 59.7718 26.1168 60.4677C28.3583 60.8541 30.2492 59.788 31.6783 57.7755C33.6446 55.0098 34.7288 50.3866 34.6658 45.7362C34.614 41.8645 33.7714 37.9812 32.0412 35.1421C31.6596 34.5189 31.2381 33.9434 30.7725 33.4282C41.1915 21.0069 57.9701 10.8005 73.62 8.21256C73.9763 8.15227 74.2191 7.81611 74.1591 7.45813C74.1008 7.10048 73.7626 6.85894 73.4066 6.91761C57.5016 9.54903 40.4499 19.8982 29.828 32.5151ZM29.9266 34.4588C29.2387 35.3151 28.583 36.1796 27.9613 37.0508C26.2135 39.5008 22.9101 46.6095 22.4851 52.2389C22.2238 55.6936 23.035 58.6052 26.34 59.1758C28.0759 59.4744 29.5017 58.5734 30.61 57.0165C31.8274 55.3025 32.6591 52.8177 33.0686 50.0728C33.6902 45.9055 33.3333 41.1389 31.7791 37.5047C31.2873 36.3531 30.6728 35.317 29.9266 34.4588Z"
                fill="#A5B4CB"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.9098 26.9569C60.7185 19.6547 67.2731 12.5927 73.7165 8.08382C74.0128 7.8765 74.0846 7.46726 73.8773 7.17091C73.67 6.87456 73.2611 6.80115 72.9647 7.00847C66.3195 11.6575 59.5821 18.958 56.686 26.4858C56.5562 26.8226 56.7249 27.2024 57.0633 27.3326C57.4002 27.4625 57.7799 27.2938 57.9098 26.9569Z"
                fill="#A5B4CB"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.9086 6.85677C66.7283 8.91376 58.1331 7.64861 52.2527 4.80217C51.9265 4.64405 51.5331 4.77964 51.3767 5.1061C51.2185 5.43223 51.3544 5.82395 51.6805 5.98207C57.841 8.96389 66.8478 10.2558 73.3228 8.10083C73.6662 7.98731 73.8523 7.61444 73.7388 7.27105C73.6236 6.92734 73.2524 6.74163 72.9086 6.85677Z"
                fill="#A5B4CB"
              ></path>
            </g>
            <d efs>
              <clipPath id="clip0_4448_117371">
                <rect width="77" height="77" fill="white"></rect>
              </clipPath>
            </d>
          </svg>

          <Link to="/vacancies">
            <button className="btn btn-blue">find a job</button>
          </Link>
        </div>
      </div>
      {isLoading ? (
       <div className="text-center mt-5">
       <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
     </div>
        ) : (
      <div className="d-flex align-items-center justify-content-evenly gap-5 flex-wrap ">
      {jobData.map((job) => (
   <Link to='/vacancies'>
     <div key={job.id} className="Card_container__GLlD_ mt-3">
    {/* Render the icon based on the job's id */}
    {job.id === 1 && <FcDiploma1 size={30} />}
    {job.id === 2 && <FcSettings size={30} />}
    {job.id === 3 && <IoLaptopOutline size={30} />}
    {job.id === 4 && <MdPersonOutline size={30} />}
    {job.id === 5 && <IoLogoDesignernews size={30} />}
    {job.id === 6 && <GrStatusDisabled size={30} />}
    <h3 className="Card_title__MKB0t">{job.name}</h3>
    <p className="Card_description__JBddQ">{job.desc}</p>
    {job.number && (
      <span className="job-number">{job.number} jobs available</span>
    )}
  </div>
   </Link>
))}
      </div>)}
    </div>
  );
};
export default index;



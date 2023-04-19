import React,{useState,useEffect} from "react";
import "./style.css";
import { FcDiploma1, FcSettings } from "react-icons/fc";
import { MdPersonOutline } from "react-icons/md";
import { IoLaptopOutline, IoLogoDesignernews } from "react-icons/io5";
import { GrStatusDisabled } from "react-icons/gr";
import { Link } from 'react-router-dom';


const index = () => {
  const jobs = [
    {
      id: 1,
      number: 21,
      name: " Internship jobs",
      desc: "Explore Internship jobs from different companies like iTechArt, Netflix, Uniplaces",
    },
    {
      id: 2,
      number:10,
      name: " Sales jobs",
      desc: " Explore Sales jobs from different companies like UXSSR, QALAMPIR",
    },
    {
      id: 3,
      number: 15,
      name: " Developer jobs",
      desc: " Explore Web Development jobs from different companies like Data",
    },
    {
      id: 4,
      number: 66,
      name: " Junior jobs",
      desc: "Explore Junior jobs from different companies like Studlandia.com,",
    },
    {
      id: 5,
      number: 7,
      name: " Design jobs",
      desc: "Explore Design jobs from different companies like CodeSmart, Najot Ta'lim",
    },
    {
      id: 6,
      number: 34,
      name: " Marketing jobs",
      desc: "  Explore Marketing jobs from different companies like Artel, HR Network, Sibdev",
    },
  ];
    
  const [jobData, setJobData] = useState(jobs);

  
 
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between flex-wrap ">
        <div className="explore-wrapper">
          <svg
            className="svg-explore"
            width="145"
            height="72"
            viewBox="0 0 145 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4248_87095)">
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M109.819 68.3857C120.616 64.9634 131.382 60.6859 142.88 60.8287C143.565 60.8349 144.128 60.2896 144.139 59.6035C144.145 58.9189 143.6 58.3557 142.914 58.3448C131.147 58.1997 120.116 62.5158 109.068 66.0189C108.414 66.2228 108.052 66.9248 108.26 67.5775C108.464 68.2318 109.164 68.5895 109.819 68.3857Z"
                fill="#6DD0E7"
              ></path>
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M103.511 53.1681C105.794 48.9496 108.646 45.3966 112.658 42.7427C113.231 42.3641 113.386 41.5941 113.011 41.0218C112.631 40.451 111.859 40.2951 111.29 40.6721C106.927 43.5574 103.813 47.4006 101.33 51.9853C101.002 52.5884 101.225 53.3429 101.83 53.6682C102.431 53.9947 103.188 53.7696 103.511 53.1681Z"
                fill="#6DD0E7"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.6945 22.8263C82.4219 17.0538 84.0254 11.9138 87.6265 7.36224C88.0508 6.82531 87.9607 6.04371 87.4213 5.61965C86.8865 5.19399 86.1043 5.2854 85.6799 5.82233C81.6951 10.8611 79.9133 16.5517 80.2149 22.943C80.2455 23.6275 80.8313 24.1559 81.5133 24.1241C82.2001 24.0912 82.7297 23.5092 82.6945 22.8263Z"
                fill="#6DD0E7"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.5058 33.8332C26.9633 35.2181 26.5434 36.6537 26.2711 38.1221C26.1494 38.776 26.0046 40.1265 26.263 41.1532C26.5344 42.2484 27.2041 43.0209 28.2959 43.1737C29.7459 43.3756 30.7094 42.9715 31.3398 42.3313C31.9471 41.7157 32.2741 40.8038 32.3061 39.7209C32.3665 37.6514 31.3007 34.8864 30.39 33.4126C31.0172 32.0758 31.7704 30.8001 32.6333 29.5996C39.0616 20.658 52.2893 18.5943 64.9748 24.3006C69.4149 26.299 73.305 32.3636 76.6 39.2169C81.7318 49.8873 85.2541 62.5644 86.4014 66.2388C86.6868 67.1454 86.9546 67.6497 87.0381 67.7402C87.4389 68.1883 87.8753 68.1905 88.1654 68.1485C88.5839 68.0834 88.8726 67.9002 89.081 67.6816C89.3617 67.3836 89.5344 66.9694 89.4976 66.4345C89.4751 66.1399 89.3644 65.7569 89.2171 65.3588C89.112 65.0836 88.9511 64.7987 88.9388 64.5798C88.8658 63.1761 88.8783 61.7765 88.8782 60.3713C88.8675 55.6511 89.3707 51.0514 90.082 46.3854C92.341 31.5598 94.1395 16.097 101.633 2.81765C101.969 2.22188 101.761 1.46302 101.163 1.12697C100.569 0.789294 99.8118 1.00009 99.4714 1.59794C91.8266 15.1408 89.933 30.8918 87.6281 46.0115C87.0236 49.9804 86.5663 53.904 86.4345 57.8889C84.4286 51.6093 81.4117 42.9994 77.6473 35.7578C74.2999 29.3172 70.3083 23.9804 65.9923 22.0375C52.0958 15.7862 37.6565 18.3567 30.6184 28.1509C29.8658 29.199 29.1843 30.3015 28.5912 31.4471C20.7014 24.3293 9.06797 24.3879 1.30187 31.7583C0.802782 32.2306 0.784022 33.016 1.25412 33.5133C1.72892 34.0089 2.51311 34.0302 3.0122 33.5579C10.0105 26.9165 20.5856 27.0625 27.5058 33.8332ZM29.198 36.5424C29.0023 37.2102 28.8416 37.888 28.7107 38.5765C28.6432 38.9452 28.5468 39.6423 28.6198 40.2671C28.6385 40.4129 28.707 40.6277 28.7409 40.7263C29.1197 40.7746 29.3997 40.7644 29.5706 40.5897C29.7849 40.3733 29.8131 40.0276 29.8245 39.6483C29.8543 38.6964 29.5739 37.5445 29.198 36.5424Z"
                fill="#6DD0E7"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_4248_87095">
                <rect width="145" height="72" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
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
      </div>
    </div>
  );
};
export default index;



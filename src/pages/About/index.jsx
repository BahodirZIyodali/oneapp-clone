import React from "react";
import "./style.css";

const texts = [
  {
    id: 1,
    title: "Why OneApp?",
    desc: "At OneApp, we know first-hand how difficult it is to find a job. The tedious and often unrewarding process of job searching is the reason OneApp was created — it is what we wished existed back when we were looking for jobs ourselves    Our mission is to make the lives of applicants and employers easier. We are building a platform that makes the application process effortless for job searchers, while also providing a system where employers and universities can easily manage their entire hiring/acceptance process in one place.",
  },
  {
    id: 2,
    title: "For Applicants",
    desc: "Sign up as an applicant, complete a 15-minute application and send it to any and all available listings. No fuss, no additional requirements and completely free!",
  },
  {
    id: 3,
    title: "For Companies",
    desc: "Sign up as an employer, post jobs and manage the entire hiring process in one place. We offer various free and paid plans for businesses at every stage of growth. Check out the Pricing page to find out more.",
  },
  {
    id: 4,
    title: "For Universities",
    desc: "Attract lots of applicants to your university page through OneApp. Contact us at support@oneapp.ly and we will tailor the entire process to your needs!",
  },
];
const index = () => {
    const [textData,setTextData]=React.useState(texts)
  return (
    <>
        <h1 className="about">About us</h1>
         <div className="about-bg">
         <div className="container">
         { textData.map(({id,title,desc})=>{
            return(
                <div  className="about-text" key={id}>
                <h1 className="about-title">{title}</h1>
                <p className="about-desc">{desc} </p>
                
                <hr />
              </div>
            )
         })

         }</div>
         </div>
    </>
  );
};

export default index;

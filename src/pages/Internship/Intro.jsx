import React from 'react'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-evenly mt-10 align-items-center flex-wrap   tech-intr'>
         <div className='tech'>
         <h1 className='tech-title'>Tech Internship 2023</h1>
          <p className='tech-desc'>Program designed to provide junior professionals with hands-on experience in tech companies.</p>
         <div className='d-flex gap-3 '>
         <Link to="/vacancies"> <button className='btn btn-blue  rounded-3 tech-btn'>Browse Internship</button></Link>
         <Link to="/employer-home">
         <button className='btn btn-black tech-btn rounded-3'>I'm Hiring</button>
         </Link>
         </div>
         </div>
        <div className='tech-video'>
          <video className='tech-video-item ' height='315px'  controls>
          <source src="https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/videos/tech_internship_2023_en.mp4" type="video/mp4"/>
         </video>
        </div>
      </div>
    </div>
    
  )
}

export default Intro
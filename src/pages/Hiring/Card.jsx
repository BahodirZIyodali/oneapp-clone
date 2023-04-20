import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Card = () => {
  return (
    <div className='container mb-10' >
      <h2 className='simple-title'>Simple, transparent pricing</h2>
      <p className='simple-desc'>Everything you need to know about the product and billing.</p>
      <div className='d-flex flex-wrap justify-content-center gap-lg-5 simple-cards'>
       <div className='simple-card'>
        <div className='card-top'>
          <h3 className='card-top-title'>Basic</h3>
          <p className='card-top-desc'>Perfect plan for starters</p>
        </div>
          <button className='simple-card-btn'>Get Started for free</button>
        <div className='card-mid'>
          <h3 className='card-mid-title'>Free</h3>
        </div>
        <ul className='card-bottom'>
          <li className='card-bottom-li'>
            <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Unlimited vacancies</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Full access to ATS features</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>1 HR user per company</span>
          </li>
        </ul>
       </div>
       <div className='simple-card'>
        <div className='card-top'>
          <h3 className='card-top-title'>Starter</h3>
          <p className='card-top-desc'>Hit the ground running</p>
        </div>
          <button className='simple-card-btn'>Choose Plan</button>
        <div className='card-mid'>
          <h3 className='card-mid-title'>$50</h3>
        </div>
        <ul className='card-bottom'>
          <li className='card-bottom-li'>
            <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Unlimited vacancies</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Full access to ATS features</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Limited access to our Testing Platform</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Limited access to our Applicant Pool</span>
          </li>  <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>1 HR user per company</span>
          </li>
        </ul>
       </div>
       <div className='simple-card'>
        <div className='card-top'>
          <h3 className='card-top-title'>Pro</h3>
          <p className='card-top-desc'>Power-up your business</p>
        </div>
          <button className='simple-card-btn'>Contact Sales</button>
        <div className='card-mid'>
          <h3 className='card-mid-title'>$200</h3>
        </div>
        <ul className='card-bottom'>
          <li className='card-bottom-li'>
            <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Unlimited vacancies</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Full access to ATS features</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Full access to our Testing Platform</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>Full access to our Applicant Pool</span>
          </li>
          <li  className='card-bottom-li'>
          <AiOutlineCheckCircle size={20} className="text-primary"/>
            <span className='li-title'>1 HR user per company</span>
          </li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Card
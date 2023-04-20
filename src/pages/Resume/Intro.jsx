import React from 'react'

const Intro = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-between  mt-5 align-items-center intro-wrapper '>
        <div className=' resume-intro-right'>
            <div className='d-flex  align-items-center'>
                <div >
                    <img className='resume-icon' src="https://oneapp.uz/images/icons/online.svg" alt="" />
                </div>
                <p className='resume-top-title'>ONEAPP RESUME BUILDER</p>
            </div>
           <h1 className='resume-title'><b>Free Resume Builder</b></h1>
           <button className='resume-btn'>Create my resume</button> 
        </div>
        <div className=' resume-intro-left'>
          <img  src="https://oneapp.uz/images/illustration.png" alt="" />    
         </div>
      </div>
    </div>
  )
}

export default Intro
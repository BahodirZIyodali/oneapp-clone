import React from 'react'

const Bottom = () => {
  return (
    <div className='container mt-5'>
      <h2 className='bottom-title'>Write your <span className='text-primary'>professional resume</span> online</h2>
     <div className='bottom-wrapper'>
      <div className='d-flex'>
        <div className='bottom-big-card'>
          <h3 className="bottom-big-title">Download with a single clickLand that dream job</h3>
        <button className='btn btn-blue rounded-6'>Choose a Template</button>
        <div className='bottom-big-img1'> 
          <img width="224" height="317" src="https://oneapp.uz/images/resumeTemplate.png" alt="" />
        </div>
        <div className='bottom-big-img2'>
          <img width="224" height="317" src="https://oneapp.uz/images/resumeTemplate.png" alt="" />
        </div>
        <div className='bottom-big-img3'>
          <img width="224" height="317" src="https://oneapp.uz/images/resumeTemplate.png" alt="" />
        </div>
         </div>
        <div className='d-flex gap-5'>
          <div className='bottom-card'>
            <p className="bottom-card-desc">Retro</p>
            <span className="bottom-card-span">STYLE</span>
            <div className='bottom-card-img'>
              <img className='rounded-5'  width="224" height="317" src="https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/resume-templates/retro.png" alt="" />
            </div>
          </div>
          <div className='bottom-card'>
          <p className="bottom-card-desc">Modern</p>
            <span className="bottom-card-span">STYLE</span>
            <div className='bottom-card-img'>
              <img className='rounded-5'  width="224" height="317" src="https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/resume-templates/modern.png" alt="" /></div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Bottom
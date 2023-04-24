import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const img=[
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/najot-talim.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/novalab.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/lebazar.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/internation.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/erudit.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/dekos.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/space.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/impact.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/qalampir.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/rasta.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/qulix.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/cambridge.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/it-park.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/elma.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/express24.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/tass-vision.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/itechart.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/korzinka.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/ab-solutions.png",
"https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/netflix.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/my-taxi.png"
]
const Componies = () => {
  const [imgData,setImgData]=useState(img)
  

  return (
    <div className='hiring-hero'>
     <div className='container'>
       <div className='hiring-hero-wrapper'>
        <h1 className='hiring-hero-title'>Top-Tier Companies on Our Job Search Site</h1>
        <p className='hiring-hero-desc'>Our website is a go-to destination for many famous companies that are actively seeking talented candidates for their open positions.

</p>
        <div >
          {imgData.map((img,idx)=>{
     return(
      <img alt="image" key={idx} src={img } width="100" height="40"  className="hiring-comp-logo" style={{color:"transparent"}}/>
     )
 })}
        </div>
        <div className='d-flex  gap-3 justify-content-center mt-4'>
          <button className="btn btn-black">Start Hiring</button>
          <button className="btn btn-blue">
            <Link to='/companies'>View more</Link>
          </button>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Componies
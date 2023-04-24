import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Componies = () => {
  const [imgData,setImgData]=useState([])
  
  useEffect(() => {
    fetch("https://courageous-lime-betta.cyclic.app/partner")
      .then((response) => response.json())
      .then((data) => setImgData(data));
  }, []);
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
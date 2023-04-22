import React,{useRef,useEffect} from 'react';
import {CiSearch} from 'react-icons/ci'
import "./style.css";
import Typed from 'typed.js'
import { Link } from 'react-router-dom';
const index = () => {
   const inputRef = useRef(null);
  let typed = null;

  useEffect(() => {
    const options = {
      strings: ['Intern',"Team Lead","Junior", "Middle","Senior","React"],
      typeSpeed: 100,
      startDelay: 200,
      backDelay: 200,
      backSpeed: 100,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    };

    typed = new Typed(inputRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleFocus = () => {
    typed.stop();
    typed.reset()
  };

  const handleBlur = () => {
    typed.start();
  };
   return (
      <div>
      <div className="container">
       <div className="home_find_wrapper ">
       <h1 className='text-center mt-5 find_title'>Find the job you love</h1>
       <p className='text-center text-secondary find_desc'>OneApp - fastest way to land your dream job!</p>
       <form className="HeroBanner_jobForm__4jzpU"><div className="HeroBanner_jobFormBox__IjgXc">
        <CiSearch size={30} style={{fontSize:"24px" ,color:"rgb(63, 140, 255)"}}/>
       <input className="HeroBanner_jobFormInput__tpgne" type="text" id="searchbox"             ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
  name="searchbox"  /></div>
     </form>
       <div className="style_orContainer__NJ1Zn">or</div>
       <div className=''>
       <button className=' find-btn'>  <Link to="/employer-home">I’m Hiring </Link></button>
       </div>
       </div>
      </div>
      </div>
   );
};

export default index;<h1>About</h1>
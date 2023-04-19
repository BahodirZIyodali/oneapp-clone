import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const images = [
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/netflix.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/it-park.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/najot-talim.png",
  "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_128,q_auto/https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/dekos.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/internation.png",
  "https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_128,q_auto/https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/erudit.png",
  "https://onapplyimagesbucket.s3.ap-south-1.amazonaws.com/partners/novalab.png",
];
const index = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 2500;
  function Slideshow() {
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);
  }
  Slideshow();
  return (
    <div className="dream-wrapper  mt-5  ">
      <div className="container">
        <div className="slideshow ">
          <h1 className="comp_title ">
            Apply for jobs in over
            <strong className="text-dark"> 29 companies</strong>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.004 9.414L7.39697 18.021L5.98297 16.607L14.589 8H7.00397V6H18.004V17H16.004V9.414Z"
                  fill="#111111"
                ></path>
              </svg>
            </span>
          </h1>
          <Link to='/companies'>    <div
            className="slideshowSlider "
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((background, index) => (
              <div className="slide" key={index}>
                <img src={background} alt="" />
              </div>
            ))}
          </div></Link>

          <div className="slideshowDots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
import React,{useState,useEffect,useRef} from "react";
import "./style.css";
import { Link } from "react-router-dom";
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

const index = () => {
  const [images,setImages]=useState(img)
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;
  function Slideshow() {
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
     
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
    }, [index])}
    Slideshow()
  

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
          <Link to="/companies">
            <div
              className="slideshowSlider "
              style={{   transform: `translate3d(${-index * 150}px, 0, 0)`,
              transition: "transform ease-out 0.20s", }}
            >
              {images.map((background, index) => (
                <div className="slide" key={index}>
                  <img src={background} alt=""  width='200' />
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;

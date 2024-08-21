import { Carousel } from "bootstrap";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const FrameComponent4 = ({ className = "", ytLink, imgLinks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [len, setLen] = useState(0);
  const carouselRef = React.createRef();

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, {
      interval: 7000,
    });
    return () => {
      carousel.dispose();
    };
  }, [carouselRef]);

  useEffect(() => {
    if (ytLink === '404') {
      setLen(imgLinks.length);
    } else {
      setLen(imgLinks.length+1);
    }
  }, [ytLink, imgLinks]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (len));
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + (len)) % (len));
  };
  
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-0 pr-5 pl-[21px] box-border max-w-full mq750:box-border`}
    >
      <div className="w-[1199px] flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="w-[255px] flex flex-row items-start justify-start gap-[23px]">

        </div>
        <div className="self-stretch rounded-xl bg-orange flex flex-row items-start justify-start relative max-w-full">
          <div className="carousel slide w-full h-[460px] relative" ref={carouselRef} id="carouselExampleControls" data-bs-ride="carousel" data-bs-interval="7000">
            <div className="carousel-inner relative w-full overflow-hidden">
              {(ytLink && ytLink !=="404") && (
                <div className={`carousel-item ${currentIndex === len-1 ? "active" : ""} w-full h-[460px] relative`}>
                  <iframe
                    className="h-[460px] w-full relative rounded-xl max-w-full overflow-hidden 
                    "
                    // object-cover"
                    src={`https://www.youtube.com/embed/${ytLink}`}
                    title="Live Satsang Event"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}
              {imgLinks.map((imgLink, index) => (
                <div key={index} className={`carousel-item ${currentIndex === index ? "active" : ""} w-full h-[460px] relative`}>
                  <img src={imgLink} alt="EventPoster" className="h-[460px] w-full relative rounded-xl max-w-full overflow-hidden 
                  " 
                  // object-cover" 
                  />
                </div>
              ))}
            </div>
            <button className="carousel-prev absolute top-0 left-0 z-30 flex items-center justify-center w-10 h-10 text-white cursor-pointer" style={{ borderTopLeftRadius: "1rem", backgroundColor: "rgba(0,0,0,0.4)"}} onClick={handlePrev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="carousel-next absolute top-0 right-0 z-30 flex items-center justify-center w-10 h-10 text-white cursor-pointer" style={{ borderTopRightRadius: "1rem", backgroundColor: "rgba(0,0,0,0.4)"}} onClick={handleNext}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

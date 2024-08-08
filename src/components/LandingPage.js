import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import SearchBox from "./SearchBox";
import '../Csss/LandingPage.css'
import { HashLink } from "react-router-hash-link";

const contentArray = [
  {
    index: 0,
    imgSrc: "/assets-2@2x.png",
    heading: "Get yourself into the Real cause of Your Life",
    description: "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.",
  },
  {
    index: 1,
    imgSrc: '/untitled-design-6-1@2x.png',
    heading: "Discover the Secrets of Success",
    description: "Join us for an exclusive event and unlock the secrets to achieving your dreams.",
  },
  // Add more content objects as needed
];

const LandingPage = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Function to go to the next content
  const goToNextContent = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
  }, []);

  // Set up an interval to automatically change the content every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNextContent, 10000); // 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [goToNextContent]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 box-border relative gap-[69px] max-w-full mq750:gap-[34px] mq750:box-border mq450:gap-[17px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal z-[1]"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>

        <div style={{ width: "100vw", padding: "21.7rem 0", zIndex: '2' }} className="flex flex-row items-center justify-center box-border max-w-full lg:pl-[38px] lg:pr-[38px] lg:box-border">
          {contentArray.map((item, index) => (
            <div key={index} className={`fade-in ${currentIndex === item.index ? "active " : ""}absolute`}>
              <div style={{ maxWidth: "90%" }} className="flex flex-row items-center justify-start max-w-full mq1050:flex-wrap">
                <div className="relative flex item-center justify-center min-w-[504px] max-w-full mq750:min-w-full">
                  <img
                    style={{
                      filter: 'drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.6))',
                    }}
                    className="img-resp w-1/2 mq750:w-5/6 object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src={item.imgSrc}
                  />
                </div>
                <div style={{ width: "35%" }} className="flex flex-col items-start justify-start px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[30.1px] max-w-full mq450:gap-[15px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                      <div className="flex-1 px-3 flex flex-col items-start justify-start gap-[13.4px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2] mq1050:text-13xl mq450:text-5xl">
                          {item.heading}
                        </h1>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-lg">
                          <div className="flex-1 relative leading-[130%] inline-block max-w-full z-[2]">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-96 px-3 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
                      <Button
                        className="h-[60.2px] flex-1 min-w-[118px] z-[10]"
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "18",
                          background: "#ff5f17",
                          borderRadius: "50px",
                          "&:hover": { background: "#ff5f17" },
                          height: 60.2,
                        }}
                      >
                        <HashLink className="no-underline text-white" to="/#upcomingEvents">
                          Explore
                        </HashLink>
                      </Button>
                      <Button
                        className="h-[60.2px] flex-1 min-w-[118px] z-[10]"
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "18",
                          borderColor: "#fff",
                          borderRadius: "50px",
                          "&:hover": { borderColor: "#fff" },
                          height: 60.2,
                        }}
                      >
                        <HashLink className="no-underline text-white" to="/aboutus">
                          Learn More
                        </HashLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>


        {/* External Buttons for Changing Content */}
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-80px] text-base font-dm-sans">
        <SearchBox />
      </div>
    </section>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;

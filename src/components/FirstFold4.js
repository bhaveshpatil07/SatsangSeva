import { useMemo, useState, useEffect } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import FrameComponent from "./FrameComponent";

const FirstFold = ({
  className = "",
  iconsxCircle,
  rectangleIconAlignSelf,
  rectangleIconFlex,
}) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstFold1Style = useMemo(() => {
    return {
      alignSelf: rectangleIconAlignSelf,
      flex: rectangleIconFlex,
    };
  }, [rectangleIconAlignSelf, rectangleIconFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center pt-0 px-0 box-border relative gap-[23.7px] max-w-full text-left text-14xl-6 text-white font-sacramento mq750:pb-[46px] mq750:box-border ${className}`}
      style={{
        ...firstFold1Style,
        minHeight: '100vh', // Ensure the container fills the viewport height
        backgroundColor: '#000', // Set your desired background color here
      }}
    >
      <div
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]"
        style={{ zIndex: 1 }}
      >
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal z-[2]"
          alt=""
          src="/rectangle-10.svg"
        />
      </div>
     
      <div
        className="w-full flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full text-21xl font-montserrat lg:pl-[38px] lg:pr-[38px] lg:box-border"
        style={{ paddingTop: '100px' }} // Add padding to avoid hiding behind the navbar
      >
        <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
            <div className="h-[511.7px] flex-1 relative min-w-[504px] max-w-full mq750:min-w-full">
              <div className="absolute top-[420.3px] left-[0px] w-[776px] h-[91.4px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[12px] top-[0px] [transform:scale(3.188)]"
                  alt=""
                  src="/group-30.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[152px] w-[472px] h-[466px] object-cover z-[4]"
                alt=""
                src="/assets-2@2x.png"
              />
            </div>
            <div className="w-[451px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30.1px] max-w-full mq450:gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13.4px] max-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 z-[2] mq1050:text-13xl mq450:text-5xl">
                      Get yourself into the Real cause of Your Life
                    </h1>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-lg">
                      <div className="flex-1 relative leading-[130%] inline-block shrink-0 max-w-full z-[2]">
                        Look no further! Our SBS The Show tickets are the
                        simplest way for you to experience a live Kpop
                        recording.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full text-center text-lg font-dm-sans mq450:flex-wrap">
                  <div className="shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-31xl bg-orangered flex flex-row items-start justify-start py-[18.1px] pr-11 pl-[46px] whitespace-nowrap z-[2]">
                    <div className="h-[60.2px] w-[182px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-31xl bg-orangered hidden" />
                    <b className="relative inline-block min-w-[92px] z-[1]">
                      Get Ticket
                    </b>
                  </div>
                  <Button
                    className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] min-w-[118px] z-[2]"
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
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FirstFold.propTypes = {
  className: PropTypes.string,
  iconsxCircle: PropTypes.string,

  /** Style props */
  rectangleIconAlignSelf: PropTypes.any,
  rectangleIconFlex: PropTypes.any,
};

export default FirstFold;

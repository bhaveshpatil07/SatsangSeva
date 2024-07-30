import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import SearchBox from "./SearchBox";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onListYourEventClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[250px] box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[250px] box-border relative gap-[69px] max-w-full mq750:gap-[34px] mq750:pb-[200px] mq750:box-border mq450:gap-[17px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <img
            className="absolute h-full w-full top-0 right-0 bottom-0 left-0 mix-blend-normal z-[1] object-cover"
            alt=""
            src="/rectangle-10.svg"
          />
        </div>
        <div className="w-[1339px] flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full lg:pl-[38px] lg:pr-[38px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
            <div className="h-[550.7px] flex-1 relative min-w-[504px] max-w-full mq750:min-w-full">
              <div className="absolute top-[500px] left-[0px] w-[776px] h-[91.4px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[12px] top-[0px] [transform:scale(3.188)]"
                  alt=""
                  src="/group-30.svg"
                />
              </div>
              <img
                className="absolute top-[100px] left-[101px] w-[522px] h-[520px] object-contain z-[4]"
                loading="lazy"
                alt=""
                src="/untitled-design-6-1@2x.png"
              />
            </div>
            <div className="w-[451px] flex flex-col items-start justify-start pt-[100px] px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31.3px] max-w-full mq450:gap-[16px]" style={{ marginTop: '100px' }}>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                  <b className="flex-1 relative inline-block max-w-full z-[2] mq1050:text-13xl mq450:text-5xl">
                    <p className="m-0">Live Event Starts In </p>
                    <p className="m-0 text-45xl">00:00:00 hrs</p>
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-lg">
                  <div className="flex-1 relative leading-[130%] inline-block max-w-full z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
                  </div>
                </div>
                <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap" style={{ marginTop: '30px' }}>
                  <Button
                    className="h-[60.2px] flex-1 min-w-[118px] z-[2] border-[2px] border-solid border-[#ff5f17] bg-[#ff5f17] text-white"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      fontSize: "18px",
                      borderRadius: "50px",
                      "&:hover": { background: "#ff5f17", borderColor: "#ff5f17" },
                      height: 60.2,
                    }}
                  >
                    Join Now
                  </Button>
                  <Button
                    className="h-[60.2px] flex-1 min-w-[118px] z-[2] border-[2px] border-solid border-white text-white"
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "18px",
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
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-150px] text-base font-dm-sans"> {/* Adjusted margin-top */}
        <SearchBox />
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;



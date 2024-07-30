import { Button } from "@mui/material";
import PropTypes from "prop-types";
import FrameComponent from "./FrameComponent"; // Make sure the path to FrameComponent is correct

const FirstFold2 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[37.3px] max-w-full text-left text-14xl-6 text-white font-sacramento mq750:gap-[19px] mq450:pb-[37px] mq450:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-121@2x.png"
        />
        <img
          className="absolute h-full w-full top-0 right-0 bottom-0 left-0 object-cover"
          alt=""
          src="/rectangle-101.svg"
        />
      </div>
      <FrameComponent className="fixed top-0 left-0 right-0 z-[99]" />
      <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
      <div className="w-[1400px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full lg:pl-[37px] lg:pr-[37px] lg:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.7px] max-w-full">
            {/* Empty div */}
          </div>
          <div className="w-[1139px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-21xl font-montserrat">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="w-[443px] flex flex-col items-start justify-start gap-[49px] max-w-full mq450:gap-[24px]">
                <b className="self-stretch relative z-[2]">
                  <p className="m-0">Live Event Starts In</p>
                  <p className="m-0 text-45xl">00:00:00 hrs</p>
                </b>
                <div className="w-96 h-[60.2px] flex flex-row items-start justify-start gap-[20px] max-w-full">
                  <Button
                    className="h-[60.2px] flex-1 z-[2]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#ff5f17",
                      borderRadius: "50px",
                      boxShadow: "none", // Remove shadow
                      "&:hover": {
                        background: "#ff5f17",
                        transform: "scale(0.95)", // Zoom-out effect
                        boxShadow: "none", // Ensure shadow is not added on hover
                      },
                      height: 60.2,
                    }}
                  >
                    Join Now
                  </Button>
                  <Button
                    className="self-stretch flex-1 z-[2]"
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      borderColor: "#fff",
                      borderRadius: "50px",
                      boxShadow: "none", // Remove shadow
                      "&:hover": {
                        borderColor: "#fff",
                        transform: "scale(0.95)", // Zoom-out effect
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="w-[443px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-lg">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21.7px]">
                  <div className="self-stretch relative leading-[130%] shrink-0 z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                  <div className="self-stretch relative leading-[130%] shrink-0 z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FirstFold2.propTypes = {
  className: PropTypes.string,
};

export default FirstFold2;

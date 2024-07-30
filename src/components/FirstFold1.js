import { Button } from "@mui/material";
import PropTypes from "prop-types";
import FrameComponent from "./FrameComponent"; // Import FrameComponent

const FirstFold1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[27px] max-w-full text-left text-14xl-6 text-white font-sacramento mq450:pb-[37px] mq450:box-border ${className}`}
    >
      {/* FrameComponent in place of navbar */}
      
                {/* top-image start */}

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
      <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
      <div className="flex flex-row items-start justify-center py-0 px-[75px] box-border w-full lg:pl-[37px] lg:pr-[37px] lg:box-border">
        <div className="flex flex-col items-start justify-start gap-[11.7px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="w-[501px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 box-border gap-[44.7px] max-w-full mq750:gap-[22px]">
              <div className="w-[264.9px] flex flex-row items-start justify-start gap-[4.7px]">
                {/* Additional content or components can go here */}
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full text-21xl font-montserrat">
                <b className="flex-1 relative inline-block max-w-full z-[2]">
                  <p className="m-0">Live Event Starts In</p>
                  <p className="m-0 text-45xl">00:00:00 hrs</p>
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[29.6px] px-0 pb-0 text-sm font-poppins">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                {/* Additional content or components can go here */}
              </div>
            </div>
            <div className="w-[575px] flex flex-col items-start justify-start pt-[19.6px] px-0 pb-0 box-border max-w-full text-lg font-montserrat">
              <div className="self-stretch flex flex-col items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
                  {/* Additional content or components can go here */}
                </div>
                <div className="w-[443px] flex flex-col items-start justify-start gap-[21.7px] max-w-full">
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

          {/* top-image end */}
          <div className="w-[426px] h-[60.2px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[20px] max-w-full">
              <Button
                className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18px",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 60.2,
                }}
              >
                Join Now
              </Button>
              <Button
                className="self-stretch flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18px",
                  borderColor: "#fff",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FirstFold1.propTypes = {
  className: PropTypes.string,
};

export default FirstFold1;

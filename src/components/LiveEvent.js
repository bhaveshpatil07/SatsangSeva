import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const LiveEvent = ({ className = "", propWidth }) => {
  const liveEventStyle = useMemo(() => {
    return {
      width: propWidth,
      paddingBottom: '70px', // Adjusted bottom padding
    };
  }, [propWidth]);

  return (
    <div
      className={` flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`}
      style={liveEventStyle}
    >
      <div className="w-[1097px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <div className="w-[443px] flex flex-col items-start justify-start gap-[49px] max-w-full mq450:gap-[24px]">
          <b className="self-stretch relative z-[2] mq450:text-5xl mq1050:text-13xl" style={{ marginTop: '60px' }}>
            <p className="m-0">Live Event Starts In</p>
            <p className="m-0 text-45xl">00:00:00 hrs</p>
          </b>
          <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
            <Button
              className="h-[60.2px] flex-1 min-w-[118px] z-[2]" // Removed shadow class
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#ff5f17",
                borderRadius: "50px",
                transition: "transform 0.3s ease", // Smooth zoom-out effect
                "&:hover": {
                  background: "#ff5f17",
                  transform: "scale(0.95)", // Zoom-out effect
                },
                height: 60.2,
              }}
            >
              Join Now
            </Button>
            <Button
              className="h-[60.2px] flex-1 min-w-[118px] z-[2]" // Removed shadow class
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                borderColor: "#fff",
                borderRadius: "50px",
                transition: "transform 0.3s ease", // Smooth zoom-out effect
                "&:hover": {
                  borderColor: "#fff",
                  transform: "scale(0.95)", // Zoom-out effect
                },
                height: 60.2,
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-[443px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-lg">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21.7px]">
            <div className="self-stretch relative leading-[130%] z-[2]" style={{ marginTop: '40px' }}>
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </div>
            <div className="self-stretch relative leading-[130%] z-[2]" style={{ marginTop: '20px' }}>
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LiveEvent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default LiveEvent;





import { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import '../Csss/ProfilePage.css';
import { HashLink } from "react-router-hash-link";

const LiveEvent = ({ className = "", propWidth }) => {
  const getTargetDate = () => {
    const now = new Date();
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + 1); 
    targetDate.setHours(16, 0, 0, 0); 
    return targetDate;
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = getTargetDate();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      // Handle the case when the timer has finished
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  // State to store the time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const liveEventStyle = useMemo(() => {
    return {
      width: propWidth,
      paddingBottom: '70px', // Adjusted bottom padding
    };
  }, [propWidth]);

  return (
    <div
      className={` flex flex-row items-center justify-center py-0 px-3 box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`}
      style={liveEventStyle}
    >
      <div style={{padding: "4rem 0"}} className="w-[1097px] flex flex-row items-center justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <div style={{fontSize:"3rem"}} className="w-[540px] flex flex-col items-center justify-center gap-[49px] max-w-full mq450:gap-[24px]">
          <b className="self-stretch flex flex-col items-center justify-center relative z-[2] mq450:text-5xl mq1050:text-13xl">
            <p className="m-0 mq750:text-9xl">Live Event Starts In</p>
            <p style={{fontSize:"1.5em"}} className="m-0 time-category">
              <span>
                {String(timeLeft.hours).padStart(2, '0')}:
              </span>
              <span>
                {String(timeLeft.minutes).padStart(2, '0')}:
              </span>
              <span>
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="pl-3">hrs</span>
            </p>
          </b>
          <div className="w-96 flex flex-row items-center justify-center gap-[20px] max-w-full mq450:flex-wrap">
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
              <HashLink className="text-white no-underline" to="/#upcomingEvents"> Join Now</HashLink>
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
              <HashLink className="text-white no-underline" to="/#upcomingEvents">Learn More</HashLink>
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





import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "./FrameComponent"; // Adjust the import path as needed

const FirstFold3 = ({
  className = "",
  group,
  rectangle10,
  group1,
  firstFoldAlignSelf,
  firstFoldFlex,
}) => {
  const firstFoldStyle = useMemo(() => {
    return {
      alignSelf: firstFoldAlignSelf,
      flex: firstFoldFlex,
    };
  }, [firstFoldAlignSelf, firstFoldFlex]);

  return (
    <section
      className={`self-stretch h-[428px] relative z-[1] text-left text-base text-white font-montserrat ${className}`}
      style={firstFoldStyle}
    >

      {/* Main Content */}
      <div className="pt-[80px]"> {/* Adjust padding top to account for fixed navbar height */}
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          alt=""
          src="/rectangle-12@2x.png"
          style={{ bottom: '10px' }}  // Adjust this value as needed
        />
        <img
          className="absolute h-full w-full top-0 right-0 bottom-0 left-0 mix-blend-normal z-[1] object-cover"  // Adjust top value hereabsolute h-full w-full top-0 right-0 bottom-0 left-0 mix-blend-normal z-[1] object-cover
          alt=""
          src={rectangle10}
        />
        <div className="absolute top-[0px] left-[0px] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] w-[1440px] h-[5.4px] z-[2]" />
        <b className="absolute top-[135px] left-[96px] inline-block w-[443px] h-[127px] z-[2] text-21xl mq450:text-5xl mq1050:text-13xl">
          <p className="m-0">Live Event Starts In</p>
          <p className="m-0 text-45xl">00:00:00 hrs</p>
        </b>
        <Button
          className="absolute top-[311px] left-[96px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18px",
            background: "#ff5f17",
            borderRadius: "50px",
            "&:hover": { background: "#ff5f17" },
            width: 182,
            height: 60.2,
          }}
        >
          Join Now
        </Button>
        <Button
          className="absolute top-[311px] left-[298px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18px",
            borderColor: "#fff",
            borderRadius: "50px",
            "&:hover": { borderColor: "#fff" },
            width: 182,
            height: 60.2,
          }}
        >
          Learn More
        </Button>
        <div className="absolute top-[139px] left-[750px] text-lg leading-[130%] inline-block w-[443px] h-[69.3px] z-[2]">
          Look no further! Our SBS The Show tickets are the simplest way for you
          to experience a live Kpop recording.
        </div>
        <div className="absolute top-[230px] left-[750px] text-lg leading-[130%] inline-block w-[443px] h-[69.3px] z-[2]">
          Look no further! Our SBS The Show tickets are the simplest way for you
          to experience a live Kpop recording.
        </div>
      </div>
    </section>
  );
};

FirstFold3.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  rectangle10: PropTypes.string,
  group1: PropTypes.string,

  /** Style props */
  firstFoldAlignSelf: PropTypes.any,
  firstFoldFlex: PropTypes.any,
};

export default FirstFold3;



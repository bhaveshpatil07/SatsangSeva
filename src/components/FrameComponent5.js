import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[29px] box-border max-w-full text-left text-14xl-6 text-white font-sacramento ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[13.1px] max-w-full z-[1] mq450:pb-[37px] mq450:box-border">
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full">
          <a className="[text-decoration:none] h-[20.8px] w-[170.9px] absolute !m-[0] top-[12.9px] left-[153px] text-[inherit] inline-block mq1050:text-8xl mq450:text-xl">
            SatsangSeva
          </a>
          <img
            className="h-[18.7px] w-[50px] absolute !m-[0] top-[12.5px] left-[99px]"
            loading="lazy"
            alt=""
            src="/group2.svg"
          />
          <img
            className="h-[428px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/rectangle-121@2x.png"
          />
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full mix-blend-normal z-[1]"
          alt=""
          src="/rectangle-101.svg"
        />
        <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <header className="w-[1417.5px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full shrink-0 text-left text-14xl-6 text-white font-sacramento lg:pl-[37px] lg:pr-[37px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
            <div className="w-[464px] flex flex-col items-start justify-start gap-[79.7px] min-w-[464px] max-w-full lg:flex-1 mq750:min-w-full mq450:gap-[40px]">
              <div className="w-[264.9px] h-[35.5px] flex flex-row items-start justify-start gap-[4.7px]">
                <img
                  className="h-[31.1px] w-[58.9px] relative z-[2]"
                  alt=""
                  src="/group-1.svg"
                />
                <a className="[text-decoration:none] h-[34.7px] flex-1 relative text-[inherit] inline-block z-[2]">
                  SatsangSeva
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full text-21xl font-montserrat">
                <b className="flex-1 relative inline-block max-w-full z-[2]">
                  <p className="m-0">Live Event Starts In</p>
                  <p className="m-0 text-45xl">00:00:00 hrs</p>
                </b>
              </div>
            </div>
            <div className="w-[592.5px] flex flex-col items-start justify-start pt-[11.2px] px-0 pb-0 box-border min-w-[592.5px] max-w-full text-lg font-montserrat lg:flex-1 mq1050:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[67px] max-w-full mq750:gap-[33px] mq450:gap-[17px]">
                <nav className="m-0 self-stretch h-[41px] flex flex-row items-start justify-between gap-[20px] text-left text-base text-white font-dm-sans">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                      Upcoming Events
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[2]">
                      List Your Event
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] z-[2]">
                      Categories
                    </a>
                  </div>
                  <Button
                    className="self-stretch w-[123.5px] z-[2]"
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      borderColor: "#fff",
                      borderRadius: "50px",
                      "&:hover": { borderColor: "#fff" },
                      width: 123.5,
                    }}
                  >
                    Login
                  </Button>
                </nav>
                <div className="w-[443px] flex flex-col items-start justify-start gap-[21.7px] max-w-full">
                  <div className="self-stretch relative leading-[130%] z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                  <div className="self-stretch relative leading-[130%] z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[576px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
          <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
            <Button
              className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] min-w-[118px] z-[2] mq450:flex-1"
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
              Join Now
            </Button>
            <Button
              className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] min-w-[118px] z-[2] mq450:flex-1"
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
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;

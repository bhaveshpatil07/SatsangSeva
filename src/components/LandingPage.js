import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import SearchBox from "./SearchBox";
import PropTypes from "prop-types";

const LandingPage = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCategoriesTextClick = useCallback(() => {
    navigate("/categories-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[250px] box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`} // Bottom padding remains the same
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[250px] box-border relative gap-[69px] max-w-full mq750:gap-[34px] mq750:pb-[200px] mq750:box-border mq450:gap-[17px]"> {/* Bottom padding remains the same */}
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

        <div className="w-[1339px] flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full lg:pl-[38px] lg:pr-[38px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
            <div className="h-[511.7px] flex-1 relative min-w-[504px] max-w-full mq750:min-w-full">
              <div className="absolute top-[450px] left-[0px] w-[776px] h-[91.4px] z-[2] flex items-center justify-center"> {/* Top property adjusted */}
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[12px] top-[0px] [transform:scale(3.188)]"
                  alt=""
                  src="/group-30.svg"
                />
              </div>
              <img
                className="absolute top-[160px] left-[152px] w-[472px] h-[466px] object-contain z-[4]" // Increased top property
                loading="lazy"
                alt=""
                src="/assets-2@2x.png"
              />
            </div>
            <div className="w-[451px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30.1px] max-w-full mq450:gap-[15px]" style={{ marginTop: '100px' }}> {/* Margin-top adjusted */}
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13.4px] max-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2] mq1050:text-13xl mq450:text-5xl">
                      Get yourself into the Real cause of Your Life
                    </h1>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-lg">
                      <div className="flex-1 relative leading-[130%] inline-block max-w-full z-[2]">
                        Look no further! Our SBS The Show tickets are the
                        simplest way for you to experience a live Kpop
                        recording.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap" style={{ marginTop: '30px' }}> {/* Margin-top adjusted */}
                  <Button
                    className="h-[60.2px] flex-1 min-w-[118px] z-[2]" // Removed shadow property
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
                    Book Now
                  </Button>
                  <Button
                    className="h-[60.2px] flex-1 min-w-[118px] z-[2]" // Removed shadow property
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
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-40px] text-base font-dm-sans"> {/* Adjusted margin-top */}
        <SearchBox />
      </div>
    </section>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;



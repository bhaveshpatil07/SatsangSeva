import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[42px] box-border max-w-full text-left text-21xl text-goldenrod font-montserrat mq750:pb-5 mq750:box-border mq1050:pb-[27px] mq1050:box-border ${className}`}
    >
      <div className="w-[1086px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
            Upcoming Events
          </h1>
          <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <Button
                className="h-[46px] flex-1 min-w-[109px]"
                endIcon={<img width="10px" height="5px" src="/vector-1.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f58021",
                  fontSize: "14",
                  background: "#ffe6c5",
                  borderRadius: "50px",
                  "&:hover": { background: "#ffe6c5" },
                  height: 46,
                }}
              >
                Weekdays
              </Button>
              <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                <div className="relative font-medium inline-block min-w-[74px] z-[1]">
                  Event Type
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                  <img
                    className="w-2.5 h-[5px] relative z-[2]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="rounded-31xl bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px]">
                <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                <div className="relative font-medium inline-block min-w-[91px] z-[1]">
                  Any Category
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                  <img
                    className="w-2.5 h-[5px] relative z-[2]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.5px_26.5px] min-h-[698px] max-w-full">
            <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-1@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.7px]">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="w-[26.6px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                      <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
                        APR
                      </b>
                    </div>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
                        14
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                  <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                    Wonder Girls 2010 Wonder Girls World Tour San Francisco
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-left">
              <img
                className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-2@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[12.5px] mq450:flex-wrap">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                      <b className="relative inline-block min-w-[25px] shrink-0 z-[1]">
                        AUG
                      </b>
                    </div>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[1] mq450:text-4xl">
                        20
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-base text-black">
                  <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                    JYJ 2011 JYJ Worldwide Concert Barcelona
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-3@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.8px]">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="w-[26.5px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="w-[25.6px] relative inline-block shrink-0 z-[1]">
                      SEP
                    </b>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[25.2px] shrink-0 z-[1] mq450:text-4xl">
                        18
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                  <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                    2011 Super Junior SM Town Live '10 World Tour New York City
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-4@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.7px]">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="w-[26.6px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                      <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
                        APR
                      </b>
                    </div>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
                        14
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                  <b className="self-stretch relative leading-[150%] z-[1]">
                    Wonder Girls 2010 Wonder Girls World Tour San Francisco
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-left">
              <img
                className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-5@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[12.5px] mq450:flex-wrap">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                      <b className="relative inline-block min-w-[25px] shrink-0 z-[1]">
                        AUG
                      </b>
                    </div>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[1] mq450:text-4xl">
                        20
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-base text-black">
                  <b className="self-stretch relative leading-[150%] z-[1]">
                    JYJ 2011 JYJ Worldwide Concert Barcelona
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-12-6@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.8px]">
                <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="w-[26.5px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="w-[25.6px] relative inline-block shrink-0 z-[1]">
                      SEP
                    </b>
                    <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                      <b className="mt-[-3.8px] relative inline-block min-w-[25.2px] shrink-0 z-[1] mq450:text-4xl">
                        18
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                  <b className="self-stretch relative leading-[150%] z-[1]">
                    2011 Super Junior SM Town Live '10 World Tour New York City
                  </b>
                  <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <Button
              className="self-stretch w-[182px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)]"
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": { borderColor: "#ff5f17" },
                width: 182,
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;

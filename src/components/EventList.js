import { Button } from "@mui/material";
import FrameComponent14 from "./FrameComponent14";
import PropTypes from "prop-types";

const EventList = ({ className = "", data }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-center text-21xl text-gray-500 font-poppins ${className}`}
    >
      <div className="w-[1275px] flex flex-col items-start justify-start max-w-full">
        <div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-10 box-border max-w-full">
          <h1 className="m-0 pl-3 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
            <span>Events</span>
            <span className="text-tomato">{` `}</span>
            <span>for you</span>
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-left text-lg text-black">
            {data && data.map((item) => (
                <FrameComponent14 key={item._id} item={item} />
            ))}
          {/* <div className="self-stretch rounded-11xl box-border flex flex-row items-start justify-between py-[18px] pr-[21px] pl-[19px] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-100 mq1050:flex-wrap">
            <div className="w-[581px] flex flex-row items-center justify-center gap-[49px] max-w-full mq750:flex-wrap mq750:gap-[24px]">
              <img
                className="h-[133px] w-[133px] relative object-cover"
                loading="lazy"
                alt=""
                src="/group-23@2x.png"
              />
              <div className="flex-1 flex flex-row items-start justify-start gap-[12px] min-w-[259px] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[4px] min-w-[211px] max-w-full">
                  <b className="relative">Bhajan/Kirtan by Narendra Chopra</b>
                  <div className="h-6 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[3px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/iconsmappin11.svg"
                    />
                    <div className="relative">
                      <span className="font-semibold">{`NSP, New Delhi `}</span>
                      <span className="font-medium">(within 2km)</span>
                    </div>
                  </div>
                  <div className="relative text-base font-medium whitespace-nowrap">
                    Aug 13 • Sun • 10:00am • 2hr
                  </div>
                  <div className="rounded-3xs flex flex-row items-end justify-start text-3xs text-chocolate border-[1px] border-solid border-chocolate">
                    <div className="w-[30px] rounded-3xs box-border flex flex-row items-start justify-center pt-[3px] px-[7px] pb-1 border-[1px] border-solid border-chocolate">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center py-[5px] px-2">
                      <div className="relative font-medium inline-block min-w-[115px]">
                        569 Already Interested
                      </div>
                    </div>
                    <div className="w-[51px] rounded-3xs bg-chocolate box-border flex flex-row items-center justify-center py-[3px] px-[9px] border-[1px] border-solid border-chocolate">
                      <input
                        className="w-[calc(100%_-_32px)] [border:none] [outline:none] font-medium font-poppins text-3xs bg-[transparent] h-[15px] relative text-whitesmoke-100 text-left inline-block min-w-[19px] p-0"
                        placeholder="Public"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-6 rounded-8xs box-border flex flex-row items-start justify-start py-[3px] px-1 h-6 border-[1px] border-solid border-chocolate">
                  <img
                    className="h-3.5 w-3.5 relative"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <div className="w-[26px] rounded-8xs box-border flex flex-col items-start justify-start py-[3px] px-1 border-[1px] border-solid border-chocolate">
                  <img
                    className="w-4 h-[14.4px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[158px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-end justify-start gap-[15px]">
                <Button
                  className="self-stretch h-[33px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#d26600",
                    fontSize: "14",
                    borderColor: "#d26600",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#d26600" },
                    height: 33,
                  }}
                >
                  View Details
                </Button>
                <Button
                  className="self-stretch h-[33px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ff5f17",
                    border: "#f7f7f7 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#ff5f17" },
                    height: 33,
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div> */}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
          <Button
            className="h-[33px] w-[149px] m-8 z-[1]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#ff5f17",
              fontSize: "14",
              borderColor: "#ff5f17",
              borderRadius: "50px",
              "&:hover": { borderColor: "#ff5f17" },
              width: 149,
              height: 33,
            }}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

EventList.propTypes = {
  className: PropTypes.string,
};

export default EventList;

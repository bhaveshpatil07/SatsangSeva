import WatchLiveInnerWrapper from "./WatchLiveInnerWrapper";
import PropTypes from "prop-types";

const WatchLiveWrapper = ({ className = "", watchLiveSatsang, theSatsangChannel }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-black font-poppins mq1050:flex-wrap ${className}`}
    >
      <WatchLiveInnerWrapper
        watchLiveSatsang={watchLiveSatsang}
        theSatsangChannel={theSatsangChannel}
      />
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full text-5xl text-chocolate">
        <div className="rounded-3xs flex flex-row items-start justify-start py-0 pr-1.5 pl-0 gap-[8px] border-[1px] border-solid border-chocolate mq450:flex-wrap mq450:pl-1.5 mq450:pt-1.5 mq450:pb-1.5 mq450:box-border">
          <div className="h-[46px] w-[47px] rounded-3xs box-border flex flex-row items-center justify-center py-[5px] px-[7px] border-[1px] border-solid border-chocolate">
            <img
              className="h-[30px] w-[30px] relative"
              loading="lazy"
              alt="Interest Icon"
              src="/vector-3.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lg">
              569 Already Interested
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

WatchLiveWrapper.propTypes = {
  className: PropTypes.string,
  watchLiveSatsang: PropTypes.string.isRequired,
  theSatsangChannel: PropTypes.string.isRequired,
};

export default WatchLiveWrapper;

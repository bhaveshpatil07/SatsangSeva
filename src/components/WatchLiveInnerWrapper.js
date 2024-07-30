import { useMemo } from "react";
import PropTypes from "prop-types";

const WatchLiveInnerWrapper = ({
  className = "",
  watchLiveSatsang,
  theSatsangChannel,
  propWidth,
  propMinWidth,
}) => {
  const watchLiveInnerWrapperStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div
      className={`w-[520px] flex flex-col items-start justify-start gap-[5px] min-w-[520px] max-w-full text-left text-xl text-black font-poppins mq750:min-w-full mq1050:flex-1 ${className}`}
      style={watchLiveInnerWrapperStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-21xl">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit mq1050:text-13xl mq450:text-5xl">
          {watchLiveSatsang}
        </h1>
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <div className="w-[38px] h-[38px] rounded-8xs box-border flex flex-row items-center justify-center p-[5px] border-[1px] border-solid border-chocolate">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <div className="w-[41px] h-[38px] rounded-8xs box-border flex flex-col items-center justify-center p-[5px] border-[1px] border-solid border-chocolate">
            <img
              className="w-6 h-[21.6px] relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
      {/* <h3 className="m-0 relative text-inherit font-medium font-inherit mq450:text-base">
        
      </h3> */}
      <div className="flex flex-row items-start justify-start gap-[3px] max-w-full">
        <img
          className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconsmappin1.svg"
        />
        <h3 className="m-0 relative text-inherit font-medium font-inherit mq450:text-base">
          {theSatsangChannel}
        </h3>
      </div>
    </div>
  );
};

WatchLiveInnerWrapper.propTypes = {
  className: PropTypes.string,
  watchLiveSatsang: PropTypes.string,
  theSatsangChannel: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default WatchLiveInnerWrapper;

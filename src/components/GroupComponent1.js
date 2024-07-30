import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  rectangle12,
  propMinWidth,
  propWidth,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <div
      className={`w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-center text-xs-4 text-orangered font-dm-sans ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={rectangle12}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[23.5px] relative gap-[26.8px] mq450:flex-wrap">
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
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[157px] text-left text-base text-black">
          <b className="self-stretch relative leading-[150%] z-[1]">
            Sadhguru World Tour San Francisco
          </b>
          <div className="flex flex-col items-start justify-start gap-[3px] text-2xs font-poppins">
            <div className="relative font-medium z-[1]">
              NSP, New Delhi (within 2km)
            </div>
            <div className="relative text-xs font-medium whitespace-nowrap z-[1]">
              Aug 13 • Sun • 10:00am • 2hr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle12: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent1;

import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  rectangle12,
  aPR,
  emptyMonthTwo,
  propHeight,
  propMinWidth,
  propPadding,
  propWidth,
  propFlex,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
      padding: propPadding,
      width: propWidth,
      flex: propFlex,
    };
  }, [propHeight, propMinWidth, propPadding, propWidth, propFlex]);

  return (
    <div
      className={`h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-center text-xs-4 text-orangered font-dm-sans ${className}`}
      style={groupDiv2Style}
    >
      <img
        className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle12}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[20.9px] px-[22px] pb-[22.5px] relative gap-[22.7px]">
        <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <div className="w-[26.6px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
            <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
              {aPR}
            </b>
          </div>
          <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
            <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
              {emptyMonthTwo}
            </b>
          </div>
        </div>
        <div className="w-[241.6px] flex flex-col items-start justify-start gap-[9px] text-left text-base text-black">
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

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle12: PropTypes.string,
  aPR: PropTypes.string,
  emptyMonthTwo: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default GroupComponent;

import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const GroupComponent2 = ({
  className = "",
  map = false,
  eventCardImage,
  event,
  title,
  date,
  endDate,
  address,
  imgSrc,
  aPR,
  emptyMonth,
  propHeight,
  propMinWidth,
  propWidth,
  onGroupContainerClick1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propHeight, propMinWidth, propWidth]);

  const history = useNavigate();

  // const handleClick = () => {
  //   history(`/live-event`, { state: { event: event } });
  // };
  const handleClick = () => {
    history('/live-event?q=' + event._id);
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = end - start;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    let durationString = '';
    if (days > 0) {
      durationString += `${days} Days`;
    }
    if (hours > 0) {
      if (durationString.length > 0) durationString += ', ';
      durationString += `${hours} Hrs`;
    }
    if (minutes > 0) {
      if (durationString.length > 0) durationString += ', ';
      durationString += `${minutes} Mins`;
    }

    return durationString;
  };

  function getDay(dateTimeString) {
    const date = new Date(dateTimeString);
    const day = date.getDate();
    if (day < 10) {
      return `0${day}`;
    }
    return `${day}`;
  }
  function getTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute.toString().padStart(2, '0')}`;
  }

  function getMonth(dateTimeString) {
    const date = new Date(dateTimeString);
    const month = date.toLocaleString('default', { month: 'short' });
    return month;
  }

  return (
    <div
      className={`h-[334.5px] w-[343px] relative cursor-pointer flex flex-col items-start justify-start min-w-[326px] max-w-full text-center text-xs-4 text-orangered font-dm-sans ${className}`}
      style={groupDivStyle}
      onClick={handleClick}
    >
      <img
        className="self-stretch bg-orange flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full 
        "
        // object-cover"
        loading="lazy"
        alt=""
        src={eventCardImage}
      />
      <div className="self-stretch relative flex flex-col items-end justify-start relative">
        {map &&
          <span style={{ zIndex: "1", color: "#D26600" }} className="absolute text-sm fw-bold pr-2">
            {event.dist} away
            {/* , {event.time} */}
          </span>
        }
        {/* <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" /> */}
        <span className="self-stretch relative flex flex-row px-[22px] py-3 pr-0 gap-4 relative">
          <div className="w-[26.6px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                <b style={{ fontSize: "1rem" }} className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
                  {date ? getMonth(date) : "Jul"}
                </b>
              </div>
              <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
                  {date ? getDay(date) : "07"}
                </b>
              </div>
            </div>
          </div>
          <div className="w-[241.6px] flex flex-col items-start justify-start gap-[9px] text-left text-base text-black">
            <b className="self-stretch relative leading-[150%] z-[1]">
              {title ? title : "Sadhguru World Tour San Francisco"}
            </b>
            <div className="flex flex-col items-start justify-start gap-[3px] text-2xs font-poppins">
              <div className="relative font-medium pr-1 z-[1]">
                {address ? (address.length > 77 ? `${address.substring(0, 72)}...` : address) : "NSP, New Delhi"}
              </div>
              <div className="relative text-xs font-medium whitespace-nowrap z-[1]">
                {endDate ? getDuration(event.startDate, event.endDate) : "(2Hrs, 25Mins)"}
              </div>
            </div>
          </div>
        </span>

      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  eventCardImage: PropTypes.string,
  aPR: PropTypes.string,
  emptyMonth: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,

  /** Action props */
  onGroupContainerClick1: PropTypes.func,
};

export default GroupComponent2;

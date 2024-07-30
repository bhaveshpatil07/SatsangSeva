import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupComponent3 from "./GroupComponent3";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/perticular-event-a");
  }, [navigate]);

  return (
    <section
      className={`w-[1428px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-5xl text-orangered font-dm-sans ${className}`}
    >
      <div className="w-[1086px] flex flex-row items-start justify-start gap-[91px] max-w-full mq1100:gap-[45px] mq750:gap-[23px] mq1025:flex-wrap">
        <div
          className="flex-1 flex flex-col items-start justify-start min-w-[357px] max-w-full cursor-pointer mq450:min-w-full"
          onClick={onGroupContainerClick}
        >
          <img
            className="self-stretch h-[370px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-12-11@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start pt-[37.4px] px-[38px] pb-[44.2px] box-border relative gap-[24px] max-w-full mq750:flex-wrap">
            <div className="h-full w-full absolute !m-[0] top-[258px] right-[-549px] bottom-[-258px] left-[549px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
            <div className="w-[53px] flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h2 className="m-0 self-stretch relative text-inherit leading-[28px] font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[22px]">
                  APR
                </h2>
                <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px text-left text-29xl text-black">
                  <b className="h-[70px] relative inline-block min-w-[50px] z-[1] mq450:text-10xl mq1025:text-19xl">
                    14
                  </b>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[34.6px] min-w-[252px] max-w-full text-left text-black mq450:gap-[17px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[29px]">
                Sadhguru World Tour San Francisco
              </h2>
              <div className="w-[291px] flex flex-col items-start justify-start gap-[5.9px] text-xl font-poppins">
                <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit shrink-0 z-[1] mq450:text-base">
                  NSP, New Delhi (within 2km)
                </h3>
                <div className="relative font-medium shrink-0 whitespace-nowrap z-[1] mq450:text-base">
                  Aug 13 • Sun • 10:00am • 2hr
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[446px] flex flex-col items-start justify-start gap-[33.3px] min-w-[446px] max-w-full text-left text-21xl text-darkorange-200 font-montserrat mq450:gap-[17px] mq750:min-w-full mq1025:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq1025:text-13xl">
            Book Event
          </h1>
          <div className="w-[414.8px] flex flex-col items-start justify-start gap-[12.5px] max-w-full text-base text-black font-poppins">
            <GroupComponent3
              enterYourUsernameOrEmailA="Event Name"
              usernameOrEmailAddress="Email address"
            />
            <GroupComponent3
              enterYourUsernameOrEmailA="Event ID"
              usernameOrEmailAddress="Email address"
            />
            <GroupComponent3
              enterYourUsernameOrEmailA="Enter your contact number"
              usernameOrEmailAddress="Contact number"
            />
          </div>
          <div className="w-[422px] flex flex-col items-end justify-start gap-[7px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[55px] pl-14 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-[101px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/screenshot-20240711-at-31838am-1@2x.png"
              />
            </div>
            <Button
              className="self-stretch h-[46.1px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ff5f17",
                borderRadius: "10px",
                "&:hover": { background: "#ff5f17" },
                height: 46.1,
              }}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

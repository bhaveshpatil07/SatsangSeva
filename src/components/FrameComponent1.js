import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import CreateEvents from "./CreateEvents";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/perticular-event-a");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full shrink-0 text-left text-21xl text-goldenrod font-montserrat mq750:gap-[32px] mq450:gap-[16px] ${className}`}
      style={{ marginTop: "-200px" }} // Move content up further
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div
          className="w-[1086px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]"
          data-scroll-to="upcomingEventsContainer"
        >
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
              Featured Events
            </h1>
            <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                <div className="flex-1 rounded-[20px] bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px] shadow-lg">
                  <div className="h-[46px] w-[168px] relative rounded-[20px] bg-bisque hidden" />
                  <div className="relative font-medium inline-block min-w-[68px] z-[1]">
                    Weekdays
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[5px] relative z-[2]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 rounded-[20px] bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px] shadow-lg">
                  <div className="h-[46px] w-[168px] relative rounded-[20px] bg-bisque hidden" />
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
                <div className="rounded-[20px] bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px] shadow-lg">
                  <div className="h-[46px] w-[168px] relative rounded-[20px] bg-bisque hidden" />
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[62.5px] max-w-full lg:gap-[31px] mq750:gap-[16px]">
            <div className="relative self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.5px_26.5px] min-h-[698px] max-w-full">
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bisque to-transparent rounded-b-[20px] z-[-1]" />
              <GroupComponent2
                eventCardImage="/rectangle-12-1@2x.png"
                aPR="APR"
                emptyMonth="14"
                propHeight="334.5px"
                propMinWidth="326px"
                propWidth="343px"
                onGroupContainerClick1={onGroupContainerClick}
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
              <GroupComponent2
                eventCardImage="/rectangle-12-2@2x.png"
                aPR="AUG"
                emptyMonth="20"
                propHeight="unset"
                propMinWidth="326px"
                propWidth="343px"
                onGroupContainerClick1={onGroupContainerClick}
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
              <GroupComponent1
                rectangle12="/rectangle-12-3@2x.png"
                propMinWidth="326px"
                propWidth="343px"
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
              <GroupComponent
                rectangle12="/rectangle-12-4@2x.png"
                aPR="APR"
                emptyMonthTwo="14"
                propHeight="334.5px"
                propMinWidth="326px"
                propPadding="unset"
                propWidth="343px"
                propFlex="unset"
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
              <GroupComponent
                rectangle12="/rectangle-12-5@2x.png"
                aPR="AUG"
                emptyMonthTwo="20"
                propHeight="unset"
                propMinWidth="326px"
                propPadding="unset"
                propWidth="343px"
                propFlex="unset"
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
              <GroupComponent1
                rectangle12="/rectangle-12-6@2x.png"
                propMinWidth="326px"
                propWidth="343px"
                className="transition-transform transform hover:scale-105 rounded-[20px] shadow-lg relative z-[1]"
              />
            </div>
            <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <Button
                className="self-stretch w-[182px]" // Removed shadow
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#ff5f17",
                  fontSize: "18px",
                  borderColor: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#ff5f17" },
                  width: 182,
                  boxShadow: "none", // Removed shadow
                }}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CreateEvents
        listYourOwnEvent="Make your own Event "
        propFlex="unset"
        propAlignSelf="stretch"
      />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;



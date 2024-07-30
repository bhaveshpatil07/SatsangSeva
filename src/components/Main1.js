import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LiveEvent from "./LiveEvent";
import FrameComponent from "./FrameComponent"; // Imported FrameComponent
import PropTypes from "prop-types";

const Main1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCategoriesTextClick = useCallback(() => {
    navigate("/categories-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[25px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[50px] max-w-full text-left text-14xl-6 text-white font-sacramento mq450:pb-[37px] mq450:box-border">
        <div className="">
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full object-cover"
            alt=""
            src="/rectangle-121@2x.png"
          />
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full object-cover mix-blend-normal z-[1]"
            alt=""
            src="/rectangle-1011.svg"
          />
        </div>
        <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <div className="w-[1392.5px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full shrink-0 lg:pl-[37px] lg:pr-[37px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[54.5px] max-w-full mq750:gap-[27px]">
            <LiveEvent propWidth="1139px" />
          </div>
        </div>
      </header>
    </section>
  );
};

Main1.propTypes = {
  className: PropTypes.string,
};

export default Main1;



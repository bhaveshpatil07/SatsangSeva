import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1176px] flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xl text-black font-poppins ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-base">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.Corem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis.Corem ipsum dolor sit amet.
      </h3>
      <FrameComponent3
        group227="List Your Own Event"
        listYourEventInJustOneCli="List your event in just one click"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

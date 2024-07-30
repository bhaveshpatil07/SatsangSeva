import FirstFold3 from "./FirstFold3";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full ${className}`}
    >
      <FirstFold3
        group="/group3.svg"
        firstFoldMenu="/rectangle-121@2x.png"
        rectangle10="/rectangle-101.svg"
        group1="/group-11.svg"
        firstFoldAlignSelf="unset"
        firstFoldFlex="1"
      />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

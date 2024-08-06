import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "", ytLink, imgLink }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-0 pr-5 pl-[21px] box-border max-w-full mq750:box-border ${className}`}
    >
      <div className="w-[1199px] flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="w-[255px] flex flex-row items-start justify-start gap-[23px]">

        </div>
        <div className="self-stretch rounded-xl bg-orange flex flex-row items-start justify-start relative max-w-full">
          {ytLink !== "404" ?
            <iframe className="h-[460px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover" src={"https://www.youtube.com/embed/" + ytLink} title="Live Satsang Event" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            :
            <img src={imgLink} alt="EventPoster" className="h-[460px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover"/>
          }
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

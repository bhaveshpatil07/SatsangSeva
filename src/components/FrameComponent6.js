import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[110px] box-border max-w-full text-left text-15xl text-black font-dm-sans mq450:pb-[71px] mq450:box-border ${className}`}
    >
      <div className="flex-1 bg-peachpuff flex flex-col items-start justify-start py-[35px] pr-5 pl-[762px] box-border relative gap-[11px] max-w-full lg:pl-[381px] lg:box-border mq750:pl-[190px] mq750:box-border mq450:pl-5 mq450:box-border">
        <div className="w-[1440px] h-[252px] relative bg-peachpuff hidden max-w-full z-[0]" />
        <h1 className="m-0 w-[417.2px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq1050:text-8xl mq450:text-xl">{`Make your own Event `}</h1>
        <div className="w-[382px] flex flex-col items-start justify-start gap-[21px] max-w-full text-lg text-gray-400">
          <div className="self-stretch relative z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          <Button
            className="w-[302px] h-[60px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#fe9509",
              borderRadius: "50px",
              "&:hover": { background: "#fe9509" },
              width: 302,
              height: 60,
            }}
          >
            Create Events
          </Button>
        </div>
        <img
          className="w-[344px] h-[337px] absolute !m-[0] bottom-[-48px] left-[288px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/untitled-design-3-1@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

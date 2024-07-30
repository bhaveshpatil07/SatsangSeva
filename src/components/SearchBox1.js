import PropTypes from "prop-types";

const SearchBox1 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1086px] !m-[0] absolute top-[650px] left-[calc(50%_-_543px)] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 flex flex-col items-start justify-start pt-[30px] px-12 pb-11 box-border gap-[4px] max-w-full z-[4] text-left text-base text-white font-dm-sans ${className}`}
    >
      <div className="w-[1086px] h-[140px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start relative gap-[224px] mq1050:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[11px]">
          <div className="relative inline-block min-w-[97px] z-[1]">
            Search Event
          </div>
          <b className="relative text-3xl inline-block min-w-[126px] z-[1] mq450:text-lg">
            Konser Jazz
          </b>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[11px]">
          <div className="relative inline-block min-w-[40px] z-[1]">Place</div>
          <h3 className="m-0 relative text-3xl font-bold font-inherit inline-block min-w-[105px] z-[1] mq450:text-lg">
            India
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[11px]">
          <div className="relative inline-block min-w-[37px] z-[1]">Time</div>
          <h3 className="m-0 relative text-3xl font-bold font-inherit inline-block min-w-[97px] z-[1] mq450:text-lg">
            Any date
          </h3>
        </div>
        <img
          className="h-[5px] w-2.5 absolute !m-[0] right-[0px] bottom-[7px] z-[1]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[60px]">
        <div className="h-px flex-1 relative box-border min-w-[218px] z-[1] border-t-[1px] border-solid border-sandybrown" />
        <div className="h-px flex-1 relative box-border min-w-[218px] z-[1] border-t-[1px] border-solid border-sandybrown" />
        <div className="h-px flex-1 relative box-border min-w-[218px] z-[1] border-t-[1px] border-solid border-sandybrown" />
      </div>
    </section>
  );
};

SearchBox1.propTypes = {
  className: PropTypes.string,
};

export default SearchBox1;

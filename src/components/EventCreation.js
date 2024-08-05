import CreateEvents from "./CreateEvents";
import PropTypes from "prop-types";

const EventCreation = ({ className = "" }) => {
  return (
    <section
      id="listEvent"
      className={`self-stretch flex flex-row items-start justify-start px-0 box-border max-w-full shrink-0 text-left text-15xl text-black font-dm-sans mq750:!pt-5 ${className}`}
      style={{paddingTop: "6rem"}}
    >
      <CreateEvents listYourOwnEvent="List your own Event " />
    </section>
  );
};

EventCreation.propTypes = {
  className: PropTypes.string,
};

export default EventCreation;

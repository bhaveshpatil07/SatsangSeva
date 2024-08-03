import Footer from "./Footer";
import PropTypes from "prop-types";

const EventListHeader = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex flex-row items-start justify-end py-0 px-0 box-border max-w-full ${className}`}
    >
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
        footerAlignSelf="unset"
        footerWidth="100%" // Ensure the footer takes full width
      />
    </section>
  );
};

EventListHeader.propTypes = {
  className: PropTypes.string,
};

export default EventListHeader;

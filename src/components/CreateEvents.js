import { useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import '../Csss/CreateEvents.css'; // Import the external CSS file

const CreateEvents = ({
  className = "",
  listYourOwnEvent,
  propFlex,
  propAlignSelf,
}) => {
  const createEventsStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/event-listing");
  }, [navigate]);

  return (
    <div
      className={`create-events-container ${className}`}
      style={createEventsStyle}
    >
      <img
        className="create-events-image"
        loading="lazy"
        alt=""
        src="/untitled-design-3-1@2x.png"
      />
      <div className="create-events-content" onClick={onGroupContainerClick}>
        <h1 className="create-events-heading">
          {listYourOwnEvent}
        </h1>
        <div className="create-events-description">
          <p>Lorem ipsum dolor sit  amet,<br/> consectetur  adipiscing elit. </p>
        </div>
        <Button
          className="create-events-button"
          variant="contained"
        >
          Create Events
        </Button>
      </div>
    </div>
  );
};

CreateEvents.propTypes = {
  className: PropTypes.string,
  listYourOwnEvent: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default CreateEvents;

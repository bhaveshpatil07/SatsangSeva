import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../Csss/HostingContent.css";

const HostingContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback((category) => {
    navigate("/search-bar?q="+category);
  }, [navigate]);

  const cardsData = [
    { src: "/rectangle-13611@2x.png", label: "Satsang" },
    { src: "/rectangle-1361-1@2x.png", label: "Bhajan" },
    { src: "/rectangle-1361-2@2x.png", label: "Samaroh" },
    { src: "/rectangle-1361-3@2x.png", label: "Langar" },
    
    { src: "/rectangle-13611@2x.png", label: "Satsang" },
    { src: "/rectangle-1361-1@2x.png", label: "Bhajan" },
    { src: "/rectangle-1361-2@2x.png", label: "Samaroh" },
    { src: "/rectangle-1361-3@2x.png", label: "Langar" },
    // Add more cards as needed
  ];

  return (
    <div className={`container ${className}`}>
      <div className="header">
        <div className="header-title ">
          <h1><b>What You Can Host ?</b></h1>
        </div>
        <div className="header-subtitle">
          <h2>
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h2>
        </div>
      </div>

      {/* Cards Start */}
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={()=>{onGroupContainerClick(card.label);}}
          >
            <img
              loading="lazy"
              alt=""
              src={card.src}
            />
            <div className="card-button-container">
              <Button
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                {card.label}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Cards End */}

      <div className="footer">
        <div className="footer-divider" />
        <div className="footer-content">
          <h1 className="footer-title">Sit back and enjoy your event </h1>
          <h2 className="footer-subtitle">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h2>
        </div>
      </div>
    </div>
  );
};

HostingContent.propTypes = {
  className: PropTypes.string,
};

export default HostingContent;

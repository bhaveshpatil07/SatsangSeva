import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import User from "@mui/icons-material/AccountCircleTwoTone";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "../Csss/FrameComponent.css";

const FrameComponent = ({
  className = "",
  onCategoriesTextClick,
  onListYourEventClick,
}) => {
  const url = process.env.REACT_APP_BACKEND;
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (userId) {
      verifyUser(userId);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [userId]);

  const verifyUser = async (userId) => {
    try {
      const resp = await axios.get(`${url}/user/${userId}`);
      const userName = resp.data.user.name;
      if (userName) {
        setName(trimFirstName(userName));
      }
    } catch (e) {
      setUserId(null);
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      console.log(e);
    }
  };

  function trimFirstName(fullName) {
    // Split the full name into individual names
    let names = fullName.split(' ');

    // Extract the first name
    let firstName = names[0];

    // Check if the first name is longer than 7 characters
    if (firstName.length > 7) {
      // Trim the first name to 7 characters and append an ellipsis
      return firstName.substring(0, 7) + '...';
    } else {
      // Return the original first name
      return firstName;
    }
  }

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-design-a-2");
  }, [navigate]);

  const onUpcomingEventsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='upcomingEventsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const handleLoginRedirect = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""} ${className}`}>
      <nav className="navbar header-nav navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <a style={{fontSize: "2rem", color: "white"}} className="navbar-brand" href="/">
            <img src="./group.svg" alt="Logo" width="50" height="40" className="d-inline-block align-text-top mr-3" />
            Satsang Seva
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="header-middle navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#upcomingEvents">Upcoming Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/event-listing">List Your Event</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories-page">Categories</a>
              </li>
            </ul>
            {!userId ? (
              <Button
                className="login-button"
                disableElevation
                variant="outlined"
                onClick={handleLoginRedirect}
              >
                Login
              </Button>
            ) : (
              <Button
                className="user-button"
                disableElevation
                variant="outlined"
                onClick={()=>{navigate("/profile-page")}}
              >
                <h6 className="user-name">{name}</h6>
                <User fontSize="large" />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  onCategoriesTextClick: PropTypes.func,
  onListYourEventClick: PropTypes.func,
};

export default FrameComponent;

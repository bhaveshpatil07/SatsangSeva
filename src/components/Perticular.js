import { Button } from "@mui/material";
import LiveEvent from "../components/LiveEvent";
import HostingContent from "../components/HostingContent";
import '../Csss/Perticular.css'

import FirstFold1 from "./FirstFold1";
import Footer from "./Footer"
import grou from '../img/Group 12.png'
import paymnet from '../img/payment.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Perticular = () => {
  const url = process.env.REACT_APP_BACKEND;
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;
  const [phoneNumber, setPhoneNumber] = useState(null);
  useEffect(() => {
    if (!event) {
      return navigate('/');
    }
  }, [event]);

  function getDay(dateTimeString) {
    const date = new Date(dateTimeString);
    return `${date}`;
  }

  const handleBookEvent = async () => {
    const eventId = event._id;
    const userId = localStorage.getItem('userId');
    const phoneNumberRegex = /^\d{10}$/;
    if(!eventId || !userId){
      return alert('Please login to book event');
    }
    if(!phoneNumber){
      return alert("Please Enter Contact Number.");
    }else if((!phoneNumberRegex.test(phoneNumber))){
      return alert("Invalid Contact Number!");
    }
    await axios.post(url + "/booking",
      {
        event: eventId,
        attendeeContact: phoneNumber,
        user: userId
      }).then((rep)=>{
        alert("Event Booked Successfully!");
        navigate("/profile-page");
      }).catch((e)=>{
        alert("Error in booking: " + e);
      });
  };

  return (
    <div>
      <FirstFold1 />
      <div className="event-booking">
        <div className="event-card">
          <img
            src={event.eventPoster ? `${url}/${event.eventPoster}` : "/rectangle-12-1@2x.png"}
            alt="Event"
            className="event-image"
          />
          <div className="content p-3">
            <h2>{event.eventName}</h2>
            <h6>Address: {event.eventAddress}</h6>
            <h6>StartDate: <br /><b>{getDay(event.startDate)}</b></h6>
            <h6>Host: <b><i>{event.hostName}</i></b></h6>
            <h6>HostContact: <a href={`tel:+${event.hostWhatsapp}`}><b><i>{event.hostWhatsapp}</i></b></a></h6>
            <h6>Sponser: <b><i>{event.sponserName}</i></b></h6>
          </div>
        </div>
        <div className="booking-form" style={{ minWidth: "30%" }}>
          <h3 className="form-title">Book Event</h3>
          <form>
            <label>Event Name</label>
            <input type="text" placeholder="Event Name" value={event.eventName} className="form-input" readOnly />
            <label>Event ID</label>
            <input type="text" placeholder="Event ID" value={event._id} className="form-input" disabled />
            <label>Enter your contact number</label>
            <input type="tel" onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder="Enter your contact number" className="form-input" autoComplete="phone" />
            <div className="payment-methods">
              <img src={paymnet} alt="Payment Method 1" />
              {/* Add more payment icons as needed */}
            </div>
          </form>
          <button onClick={handleBookEvent} className="pay-now-button">Book Now</button>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Perticular

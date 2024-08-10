import React from 'react';
import '../Csss/FrameComponent11.css';
import { Link } from 'react-router-dom';
import Like from '@mui/icons-material/ThumbUpTwoTone';
import Pin from '@mui/icons-material/LocationOnTwoTone';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Start from '@mui/icons-material/AlarmTwoTone';
import Map from '../img/Map.png';

const FrameComponent11 = ({ event = null }) => {
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date object');
    }
    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const [weekday, month, day, year, hour, minute] = formattedDate.split(/[\s,/]+/);

    return `${weekday} • ${month} ${day}, ${year} • ${hour}:${minute}`;
  }

  function formatNames(names) {
    if (names.split(",").length > 1) {
      const formattedNames = names.split(",").map((name, index) => {
        return `${index + 1}) ${name}`;
      }).join(" ");
      return formattedNames;
    } else {
      return names;
    }
  }

  function getTotalAttendees(bookings) {
    return bookings.reduce((total, booking) => total + parseInt(booking.noOfAttendee, 10), 0);
  }

  function extractCity(address) {
    const addressParts = address.split(',');
    return addressParts[addressParts.length-3].trim();
  }

  const handleCopy = () => {
    const publicURL = window.location.origin + "/live-event?q=" + event._id;
    navigator.clipboard.writeText(publicURL);
    alert("Event URL Copied to Clipboard!");
  };

  const capitalizedStr = (str) => { return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); }
  return (
    <div className="event-container">
      <div className="event-left">
        <div className="event-details p-0">
          <h1 className='py-2'>{(event?.eventName) ? event.eventName : "Loading..."}
            <img
              className="w-20 h-6 relative cursor-pointer mb-2"
              onClick={handleCopy}
              loading="lazy"
              title="Copy Event URL"
              src="/vector-6.svg"
            />
          </h1>
          <p><Start sx={{ color: "#D26600" }} /><strong> {event && formatDateTime(event?.startDate)}</strong></p>
          <p className='py-2 text-justify'>{event?.eventDesc}</p>
          <p><strong>Ends: </strong>{event && formatDateTime(event.endDate)}</p>
          <p><strong>Category: </strong>{event ? capitalizedStr(event.eventCategory) : "Loading..."}</p>
          {/* <p>
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet.
          </p> */}
          <p><strong>Host Name : </strong> {event ? <Link to={"/public-profile?q=" + event.user + "&name=" + encodeURIComponent(event.hostName)}>{event.hostName}</Link> : "Loading..."}</p>
          <p><strong>Sponsor Name : </strong>{event ? formatNames(event.sponserName) : " Loading..."}</p>
          <p><strong>Performer Name : </strong> {event ? formatNames(event.performerName) : " Loading..."}</p>
          <p><strong>Contact Details <WhatsApp sx={{ color: "#D26600" }} /> : </strong> {event ? `+91-${event.hostWhatsapp}` : " Loading..."}</p>
          <p><strong>Language : </strong> {event ? capitalizedStr(event.eventLang) : "Loading..."}</p>
        </div>
      </div>
      <div className="event-right">
        <div className="event-meta flex flex-col items-end gap-[20px] mq750:items-center">
          <div className="interest">
            <Like fontSize='large' className='like-icon' sx={{ color: "#D26600" }} /><span> {event ? getTotalAttendees(event.bookings) : "0"} Already Interested</span>
          </div>
          <div className="attendees">
            Expected Attendees : <strong style={{ color: "#D26600" }}>{event ? `(${event.noOfAttendees}) ` : "200 "}+</strong>
          </div>
        </div>
        <div className="event-map text-start" style={{ color: "#D26600" }}>
          <h4 className='text-center mb-0'>Location of the event</h4>
          <h4>{event ? extractCity(event.eventAddress) : ""}</h4>
          <p><Pin sx={{ color: "#D26600" }} /> <strong>{event?.eventAddress}</strong></p>
          <div className="map-container">
            <a target='blank' href={event?.location}>
              <img width={450} src={Map} alt="Location Map"/>
            </a>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283671.192382284!2d72.09916297514248!3d20.7359935153674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1722344493258!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;

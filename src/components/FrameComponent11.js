import React from 'react';
import '../Csss/FrameComponent11.css';
import { Link } from 'react-router-dom';
import Like from '@mui/icons-material/ThumbUpTwoTone';
import Pin from '@mui/icons-material/LocationOnTwoTone';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Start from '@mui/icons-material/AlarmTwoTone';
import EventMap from './EventMap';

const FrameComponent11 = ({ event = null }) => {

  function formatDateTime(dateString) {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date object');
    }

    // Convert the date to UTC
    const utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes());

    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
      hour12: false, // Add this to get 24-hour format
    };

    const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(utcDate);
    const [weekday, day, month, year, hour] = formattedDate.split(/[\s,/]+/).slice(0, 6);

    return `${weekday} • ${month} ${day}, ${year} • ${hour}`;
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
    return addressParts[addressParts.length - 4].trim();
  }

  const handleCopy = () => {
    const publicURL = window.location.origin + "/live-event?q=" + event._id;
    navigator.clipboard.writeText(publicURL);
    alert("Event URL Copied to Clipboard!");
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = end - start;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    let durationString = '';
    if (days > 0) {
      durationString += `${days} Days`;
    }
    if (hours > 0) {
      if (durationString.length > 0) durationString += ', ';
      durationString += `${hours} Hrs`;
    }
    if (minutes > 0) {
      if (durationString.length > 0) durationString += ', ';
      durationString += `${minutes} Mins`;
    }

    return durationString;
  };

  const capitalizedStr = (str) => { return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); }
  return (
    <div className="event-container">
      <div className="event-left py-2">
        <div className="event-details p-0">
          <div className="flex items-center justify-between">
            <h1 className='py-2'>{(event?.eventName) ? event.eventName : "Loading..."}</h1>
            <img
              className="w-6 h-6 relative cursor-pointer"
              onClick={handleCopy}
              loading="lazy"
              title="Copy Event URL"
              src="/vector-6.svg"
            />
          </div>
          <p><Start sx={{ color: "#D26600" }} /><strong> {event && formatDateTime(event?.startDate)} {event && ` • (${getDuration(event.startDate, event.endDate)})`}</strong></p>
          <p className='py-2 text-justify'>{event?.eventDesc}</p>
          {/* <p><strong>Ends: </strong>{event && formatDateTime(event.endDate)}</p>
          <p><strong>Category: </strong>{event ? capitalizedStr(event.eventCategory) : "Loading..."}</p> */}
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
      <div className="event-right pb-0 mq750:!p-0">
        <div className="event-meta flex flex-col items-end gap-[10px] mq750:items-center">
          <div className="interest">
            <Like fontSize='large' className='like-icon' sx={{ color: "#D26600" }} /><span> {event ? getTotalAttendees(event.bookings) : "0"} Already Interested</span>
          </div>
          <div className="attendees">
            Expected Attendees : <strong style={{ color: "#D26600" }}>{event ? `(${event.noOfAttendees}) ` : "200 "}+</strong>
          </div>
        </div>
        <div className="event-map text-start" style={{ color: "#D26600" }}>
          <h4 className='text-center mb-0'>Location of the event</h4>
          <span className="flex items-center">
            <h4>{event ? extractCity(event.eventAddress) : ""}</h4>
            <a className='pl-3' href={event?.location} target="_blank" rel="noopener noreferrer">[Get Direction]</a>
          </span>
          <p><Pin sx={{ color: "#D26600" }} /> <strong>{event?.eventAddress}</strong></p>
          <div className="map-container">
            {/* <a target='blank' href={event?.location}>
              <img width={450} src={Map} alt="Location Map" />
            </a> */}
            {event ?
              <EventMap center={{ lat: event.geoCoordinates.coordinates[1], lng: event.geoCoordinates.coordinates[0] }} />
              :
              <h1>Loading...</h1>
            }
            {/* <iframe
              src={event?.location}
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

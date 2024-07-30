import React from 'react';
import '../Csss/FrameComponent11.css';

const FrameComponent11 = ({event=null}) => {
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
  return (
    <div className="event-container">
      <div className="event-left">
        <div className="event-details">
          <h1>{event?.eventName}</h1>
          <p>Category: <strong>{event?event.eventCategory:"ABc"}</strong></p>
          <p>Starts: <strong>{event && formatDateTime(event?.startDate)}</strong></p>
          <p>Ends: <strong>{event && formatDateTime(event.endDate)}</strong></p>
          <p><span role="img" aria-label="location">📍</span> {event?.eventAddress}</p>
          <p><a target='blank' href={event?.location}>[Get Direction]</a></p>
          {/* <p>
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit amet.
          </p> */}
          <p><strong>Host Name :</strong> {event?event.hostName:"Rahul Sharma (also can be organization)"}</p>
          <p><strong>Sponsor Name :</strong>{event?event.sponserName:" SPONSER"}</p>
          <p><strong>Performer Name :</strong> {event?event.performerName:"Sham Sharma"}</p>
          <p><strong>Contact Details (WhatsApp) :</strong> {event?`+91-${event.hostWhatsapp}`:"9456976531"}</p>
          <p><strong>Language :</strong> {event?event.eventLang:"Hindi/English"}</p>
        </div>
      </div>
      <div className="event-right">
        <div className="event-meta">
          <div className="interest">
            <span role="img" aria-label="like">👍</span> 569 Already Interested
          </div>
          <div className="attendees">
            Expected Attendees : <strong>{event?event.noOfAttendees:"200"}+</strong>
          </div>
        </div>
        <div className="event-map">
          <h4>Location of the event</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283671.192382284!2d72.09916297514248!3d20.7359935153674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1722344493258!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;

import { useNavigate } from 'react-router-dom';
import '../Csss/Upcard.css';
import RectangleImage from '../img/Rectangle 1369.png';

const Upcard = () => {
  const navigate = useNavigate();
  const events = [
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'Sadhguru World Tour San Francisco',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'craze',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'Sadhguru World Tour San Francisco',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'Sadhguru World Tour San Francisco',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'Sadhguru World Tour San Francisco',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    {
      image: RectangleImage,
      month: 'APR',
      day: 14,
      title: 'Sadhguru World Tour San Francisco',
      location: 'NSP, New Delhi (within 2km)',
      details: 'Aug 13 • Sun • 10:00am • 2hr'
    },
    // ... other events
  ];

  const handleCardClick = (event) => {
    navigate('/live', { state: { event } });
  };

  return (
    <div className="upcard-container">
      {events.map((event, index) => (
        <div key={index} className="event-card" onClick={() => handleCardClick(event)}>
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-info">
            <div className="event-date">
              <span className="event-month">{event.month}</span>
              <span className="event-day">{event.day}</span>
            </div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
              <p className="event-details">{event.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcard;

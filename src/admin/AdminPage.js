import axios from 'axios';
import Calendar from '@mui/icons-material/CalendarMonthTwoTone';
import People from '@mui/icons-material/PeopleAltTwoTone';
import Event from '@mui/icons-material/EventNoteTwoTone';
import '../Csss/AdminPage.css';

import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const AdminPage = () => {
  const url = process.env.REACT_APP_BACKEND;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    users: 0,
    bookings: 0,
    events: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url + '/analytics');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const items = [
    {
      title: 'No. of Booking',
      value: data.bookings,
      description: 'Total bookings made',
      icons: <Calendar />
    },
    {
      title: 'Total Users',
      value: data.users,
      description: 'Total number of users',
      icons: <People />
    },
    {
      title: 'Events',
      value: data.events,
      description: 'Number of events',
      icons: <Event />
    }
  ];

  return (
    <div className='container'>
      {loading && <Loader />}
      <h1>Statistics</h1>
      <div className='admin-page'>
        {items.map((item, index) => (
          <div className='section' key={index}>
            <div className='text'>
              <p className='text-center text-xl fs-4'>{item.title}</p>
              <div className='icon flex items-center justify-evenly'>
                <p>{item.icons}</p>
                <p className='value'>{item.value}</p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

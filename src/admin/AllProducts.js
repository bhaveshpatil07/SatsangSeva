import React, { useEffect, useState } from 'react';
import '../Csss/AllProducts.css'; // Adjust the path if necessary
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const AllProducts = () => {
  const url = process.env.REACT_APP_BACKEND;
  const { id, name } = useParams(); // Get event ID from URL parameters
  const [bookings, setBookings] = useState([]); // State to store booking data
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}/booking/event/${id}`);
        const data = await response.json();
        setBookings(data.booking); // Update state with fetched bookings
      } catch (error) {
        console.error('Error fetching booking data:', error);
        alert("Error in fetching Bookings!");
        navigate(-1);
      }
      setLoading(false);
    };

    fetchBookings(); // Call the function to fetch bookings
  }, [id]); // Re-run when the event ID changes

  return (
    <div className='container'>
      {loading && <Loader />}
      <div className="head">
        <h1>Booking Details For: </h1>
        <h3>Event ID: {id}</h3>
        <h3>Event Name: <span className="text-tomato">{decodeURIComponent(name)}</span></h3>
      </div>
      <div className="table-container border">
        <table className="table table-responsive table-bordered table-hover m-0">
          <thead className='sticky-top'>
            <tr>
              <th>Booking ID</th>
              <th>Attendee Contact</th>
              <th>User Name</th>
              <th>No of Attendees</th>
              <th>Amount Paid</th>
              <th>Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {(bookings && bookings.length > 0) ? bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.attendeeContact}</td>
                <td>{booking.user ? booking.user.name : 'N/A'}</td> {/* Add a null check here */}
                <td>{booking.noOfAttendee}</td>
                <td>{booking.amountPaid}</td>
                <td>{booking.paymentId ? booking.paymentId : 'N/A'}</td>
              </tr>
            )) :
              <tr>
                <td colSpan={6} className='text-center fw-bolder text-danger'>No Bookings Found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;

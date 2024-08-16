import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import '../Csss/UserEvents.css';
import Edit from '@mui/icons-material/BorderColorTwoTone';
import Delete from '@mui/icons-material/DeleteForeverTwoTone';
import View from '@mui/icons-material/VisibilityTwoTone';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import Loader from '../components/Loader';

const UserEvents = () => {
  const url = process.env.REACT_APP_BACKEND;
  const { userId } = useParams();
  const [userEvents, setUserEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('name');
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/user/events/${userId}`);
        setUserEvents(response.data.events);
      } catch (error) {
        alert("Error: " + error);
      }
      setLoading(false);
    };

    fetchUserEvents();
  }, [userId]);

  const handleEditClick = (event) => {
    navigate('/admin/updateform', { state: { eventData: event } });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${url}/events/${selectedEvent._id}`, selectedEvent);
      setUserEvents(userEvents.map(event => (event._id === selectedEvent._id ? selectedEvent : event)));
      handleModalClose();
    } catch (error) {
      console.error('Error updating event:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookingsClick = (eventId, eventName) => {
    // console.log('Navigating to:', `/admin/allproduct/${eventId}/${encodeURIComponent(eventName)}`);
    navigate(`/admin/allproduct/${eventId}/${encodeURIComponent(eventName)}`);
  };

  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (eventToDelete) {
      try {
        setLoading(true);
        await axios.delete(`${url}/events/${eventToDelete._id}`);
        setUserEvents(userEvents.filter(event => event._id !== eventToDelete._id));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
      setLoading(false);
      setEventToDelete(null);
      setShowDeleteDialog(false);
    }
  };

  const cancelDelete = () => {
    setEventToDelete(null);
    setShowDeleteDialog(false);
  };

  const handleClick = (id) => {
    navigate('/live-event?q=' + id);
  };

  return (
    <div className='container pt-3'>
      {loading && <Loader />}
      <h1><span className="text-tomato">{userName}</span>'s Events</h1>
      {userEvents.length > 0 ? (
        <div className="table-container border">
          <table className="table table-bordered table-hover m-0">
            <thead className='sticky-top'>
              <tr>
                <th>ID</th>
                <th>Host Name</th>
                <th>Event Name</th>
                <th>Event Price</th>
                <th>View Bookings</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userEvents.map(event => (
                <tr key={event._id}>
                  <td>{event._id}</td>
                  <td>{event.hostName}</td>
                  <td>{event.eventName}</td>
                  <td>{event.eventPrice === '0' ? 'Free' : `₹${event.eventPrice}`}</td>
                  <td>
                    {event.bookings.length > 0 ? <button onClick={() => handleBookingsClick(event._id, event.eventName)}>View Bookings</button> : "NA"}
                  </td>
                  <td>
                    <View titleAccess='View Event'onClick={() => handleClick(event._id)} className='cursor-pointer' style={{ color: "#D26600" }} />
                  </td>
                  <td>
                    <Edit titleAccess='Edit Event' onClick={() => handleEditClick(event)} className='cursor-pointer' style={{ color: "#D26600" }} />
                  </td>
                  <td>
                    <Delete titleAccess='Delete Event' onClick={() => handleDeleteClick(event)} className='cursor-pointer' style={{ color: "#D26600" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className='text-danger fw-bolder'>No Events Found!</h1>
      )}

      {/* Edit Event Modal */}
      <Modal show={isModalOpen} onHide={handleModalClose} style={{ marginTop: '5%' }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event name"
                  name="eventName"
                  value={selectedEvent.eventName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEventLink">
                <Form.Label>Event Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event link"
                  name="eventLink"
                  value={selectedEvent.eventLink}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  value={selectedEvent.location}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEventPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event price"
                  name="eventPrice"
                  value={selectedEvent.eventPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Saving Changes...' : 'Save Changes'}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)} style={{ marginTop: '60px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to DELETE this event? <br />This action is irreversible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={handleConfirmDelete}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserEvents;

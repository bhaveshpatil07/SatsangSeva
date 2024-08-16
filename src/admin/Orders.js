import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Csss/Orders.css';
import SearchAndFilters from '../components/SearchAndFilters';
import Edit from '@mui/icons-material/BorderColorTwoTone';
import Delete from '@mui/icons-material/DeleteForeverTwoTone';
import View from '@mui/icons-material/VisibilityTwoTone';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Loader from '../components/Loader';

const Orders = () => {
  const url = process.env.REACT_APP_BACKEND;
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [data, setData] = useState(null);
  const [checkedEvents, setCheckedEvents] = useState({});
  const [checkedEventId, setCheckedEventId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showUncheckDialog, setShowUncheckDialog] = useState(false); // New state for uncheck confirmation dialog
  const [currentEventId, setCurrentEventId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url + '/events');
        const eventsData = response.data.events;
        setEvents(eventsData);

        // const initialCheckedEvents = eventsData.reduce((acc, event) => {
        //   if (event.approved) {
        //     acc[event._id] = true;
        //   }
        //   return acc;
        // }, {});

        // setCheckedEvents(prevCheckedEvents => ({
        //   ...prevCheckedEvents,
        //   ...initialCheckedEvents
        // }));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url + '/events/past');
        const pastEventsData = response.data.events;
        setPastEvents(pastEventsData);

        const initialCheckedEvents = pastEventsData.reduce((acc, event) => {
          if (event.approved) {
            acc[event._id] = true;
          }
          return acc;
        }, {});

        setCheckedEvents(prevCheckedEvents => ({
          ...prevCheckedEvents,
          ...initialCheckedEvents
        }));
      } catch (error) {
        console.error('Error fetching past events:', error);
      }
      setLoading(false);
    };

    fetchPastEvents();
  }, []);

  const handleSearchDataChange = (newData) => {
    setData(newData);
    setEvents(newData);
  };

  const handleClick = (id) => {
    navigate('/live-event?q=' + id);
  };

  const handleBookingsClick = (eventId, eventName) => {
    navigate(`/admin/allproduct/${eventId}/${encodeURIComponent(eventName)}`);
  };

  const handleEditClick = (event) => {
    navigate('/admin/updateform', { state: { eventData: event } });
  };

  const handleDeleteClick = (eventId) => {
    setCheckedEventId(eventId);
    setShowDeleteDialog(true);
  };

  const handleApprove = (eventId) => {
    setCurrentEventId(eventId);
    setShowApproveDialog(true);
  };

  const handleCheckboxChange = (eventId) => {
    setCurrentEventId(eventId);
    setShowUncheckDialog(true);
  };

  const confirmDelete = async () => {
    // console.log(`Deleting event: ${checkedEventId}`);
    setLoading(true);
    await axios.delete(url + "/events/" + checkedEventId).then((resp) => {
      // console.log(resp);
      setEvents(events.filter(item => item._id !== checkedEventId));
      alert("Event Deleted Successfully!");
    }).catch((e) => {
      console.log(e);
      alert("Error in Deleting Event. Try again later");
    }).finally(() => {
      setLoading(false);
    })
    setCheckedEventId(null);
    setShowDeleteDialog(false);
  };

  const cancelDelete = () => {
    console.log('Delete canceled');
    setShowDeleteDialog(false);
  };

  const handleCancel = (eventId) => {
    setCurrentEventId(eventId);
    setShowCancelDialog(true);
  };

  const confirmApprove = () => {
    console.log('Approved event ID:', currentEventId);
    setCheckedEvents(prev => ({ ...prev, [currentEventId]: true }));
    setShowApproveDialog(false);
  };

  const confirmCancel = () => {
    console.log('Canceled event ID:', currentEventId);
    setCheckedEvents(prev => ({ ...prev, [currentEventId]: false }));
    setShowCancelDialog(false);
  };

  const confirmUncheck = async () => {
    // console.log('Unchecked event ID:', currentEventId);
    setLoading(true);
    await axios.put(url + "/admin/reject/" + currentEventId).then((resp) => {
      setEvents(events.filter(item => item._id !== currentEventId));
      alert(resp.data.message);
    }).catch((e) => {
      alert("Error in Rejecting This Event. Try Again Later.");
      console.log(e);
    }).finally(() => {
      setLoading(false);
    });
    setShowApproveDialog(false);

    // setCheckedEvents(prev => ({ ...prev, [currentEventId]: false }));
    setShowUncheckDialog(false);
  };

  const cancelUncheck = () => {
    setShowUncheckDialog(false);
  };

  const cancelApprove = () => setShowApproveDialog(false);
  const cancelCancel = () => setShowCancelDialog(false);

  return (
    <div className='container gap-3 pt-3'>
      <SearchAndFilters handleSearchDataChange={handleSearchDataChange} />
      {loading && <Loader />}
      {/* Latest Events Table */}
      <h2>Latest Events</h2>
      <div className="table-container border">
        <table className="table table-bordered table-hover m-0">
          <thead className='sticky-top'>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Host</th>
              {/* <th scope="col">Location</th> */}
              <th scope="col">Price</th>
              <th scope="col">Bookings</th>
              <th scope="col">Edit</th>
              <th scope="col">View</th>
              <th scope="col">Delete</th>
              <th scope="col">Approve</th>
            </tr>
          </thead>
          <tbody>
            {events.length ? events.map(event => (
              <tr key={event._id}>
                <td>{event._id}</td>
                <td>{event.eventName}</td>
                <td>{event.hostName}</td>
                {/* <td><a href={event.location} target="_blank" rel="noopener noreferrer">Map</a></td> */}
                <td>{event.eventPrice === '0' ? 'Free' : `₹${event.eventPrice}`}</td>
                <td>{event.bookings.length > 0 ? <button onClick={() => handleBookingsClick(event._id, event.eventName)}>See Bookings</button> : "NA"}</td>
                <td>
                  <Edit titleAccess='Edit Event' className='cursor-pointer' style={{ color: "#D26600" }} onClick={() => handleEditClick(event)} />
                </td>
                <td>
                  <View onClick={() => handleClick(event._id)} titleAccess='View Event' className='cursor-pointer' style={{ color: "#D26600" }} />
                </td>
                <td>
                  <Delete titleAccess='Delete Event' onClick={() => handleDeleteClick(event._id)} className='cursor-pointer' style={{ color: "#D26600" }} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={event.approved || false}
                    onChange={() => handleCheckboxChange(event._id)}
                  />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="10">No pending approvals</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      {/* Past Events Table */}
      <h2>Past Events</h2>
      <div className="table-container pb-5">
        <table className="table table-bordered table-hover m-0">
          <thead className='sticky-top'>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Host</th>
              {/* <th scope="col">Location</th> */}
              <th scope="col">Price</th>
              <th scope="col">Bookings</th>
              {/* <th scope="col">Edit</th> */}
              <th scope="col">View</th>
              <th scope="col">Delete</th>
              {/* <th scope="col">Approve</th> */}
            </tr>
          </thead>
          <tbody>
            {pastEvents.map(event => (
              <tr key={event._id}>
                <td>{event._id}</td>
                <td>{event.eventName}</td>
                <td>{event.hostName}</td>
                {/* <td><a href={event.location} target="_blank" rel="noopener noreferrer">Map</a></td> */}
                <td>{event.eventPrice === '0' ? 'Free' : `₹${event.eventPrice}`}</td>
                <td><button onClick={() => handleBookingsClick(event._id, event.eventName)}>See Bookings</button></td>
                {/* <td>
                  <Edit titleAccess='Edit Event' onClick={() => handleEditClick(event)} className='cursor-pointer' style={{ color: "#D26600" }} />
                </td> */}
                <td><View titleAccess='View Event' onClick={() => handleClick(event._id)} className='cursor-pointer' style={{ color: "#D26600" }} /></td>
                <td>
                  <Delete onClick={() => handleDeleteClick(event._id)} titleAccess='Delete Event' className='cursor-pointer' style={{ color: "#D26600" }} />
                </td>
                {/* <td>
                  <input
                    type="checkbox"
                    checked={checkedEvents[event._id] || false}
                    onChange={() => handleCheckboxChange(event._id)}
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showApproveDialog && (
        <Modal show={showApproveDialog} onHide={cancelApprove}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Approval</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to approve this event?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelApprove}>
              Cancel
            </Button>
            <Button variant="primary" onClick={confirmApprove}>
              Approve
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showDeleteDialog && (
        <Modal show={showDeleteDialog} onHide={cancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to DELETE this event?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDelete}>
              Cancel
            </Button>
            <Button variant="outline-danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showCancelDialog && (
        <Modal show={showCancelDialog} onHide={cancelCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Cancellation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to cancel this event?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelCancel}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmCancel}>
              Cancel Event
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showUncheckDialog && (
        <Modal show={showUncheckDialog} onHide={cancelUncheck}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Reject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to Reject this Event?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelUncheck}>
              Cancel
            </Button>
            <Button variant="outline-danger" onClick={confirmUncheck}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Orders;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Edit from '@mui/icons-material/BorderColorTwoTone';
import Delete from '@mui/icons-material/DeleteForeverTwoTone';
import View from '@mui/icons-material/VisibilityTwoTone';
import { useNavigate } from 'react-router-dom';
import '../Csss/Approve.css';
import Loader from '../components/Loader';

const Approve = () => {
  const url = process.env.REACT_APP_BACKEND;
  const [pendingEvents, setPendingEvents] = useState([]);
  const [checkedEvents, setCheckedEvents] = useState({});
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(null);
  const [actionType, setActionType] = useState(null); // 'approve' or 'cancel'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Fetch pending events from API
    setLoading(true);
    axios.get(url + '/admin/event/pending')
      .then(response => {
        const data = response.data.pending;
        if (Array.isArray(data)) {
          setPendingEvents(data);
        } else {
          console.error('API response data.pending is not an array:', data);
          setPendingEvents([]); // Set to empty array to avoid map error
        }
      })
      .catch(error => {
        console.error('Error fetching pending events:', error);
        setPendingEvents([]); // Set to empty array in case of error
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  const handleApprove = (eventId) => {
    setCurrentEventId(eventId);
    setActionType('approve');
    setShowApproveDialog(true);
  };

  const handleCancel = (eventId) => {
    setCurrentEventId(eventId);
    setActionType('cancel');
    setShowCancelDialog(true);
  };

  const handleDeleteClick = (eventId) => {
    setCurrentEventId(eventId);
    setShowDeleteDialog(true);
  };

  const confirmApprove = async () => {
    // console.log('Approved event ID:', currentEventId);
    setLoading(true);
    await axios.put(url + "/admin/approve/" + currentEventId).then((resp) => {
      setPendingEvents(pendingEvents.filter(item => item._id !== currentEventId));
      alert(resp.data.message);
    }).catch((e) => {
      alert("Error in Approving This Event. Try Again Later.");
      console.log(e);
    }).finally(() => {
      setLoading(false);
    });
    setShowApproveDialog(false);
  };

  const confirmCancel = () => {
    console.log('Canceled event ID:', currentEventId);
    setCheckedEvents(prev => ({ ...prev, [currentEventId]: false }));
    setShowCancelDialog(false);
  };

  const confirmDelete = async() => {
    // console.log('Deleted event ID:', currentEventId);
    setLoading(true);
    await axios.delete(url + "/events/" + currentEventId).then((resp) => {
      // console.log(resp);
      setPendingEvents(pendingEvents.filter(item => item._id !== currentEventId));
      alert("Event Deleted Successfully!");
    }).catch((e) => {
      console.log(e);
      alert("Error in Deleting Event. Try again later");
    }).finally(() => {
      setLoading(false);
    })
    setCurrentEventId(null);
    setShowDeleteDialog(false);
  };

  const cancelApprove = () => {
    console.log('Canceled');
    setShowApproveDialog(false);
  };

  const cancelCancel = () => {
    console.log('Cancel canceled');
    setShowCancelDialog(false);
  };

  const cancelDelete = () => {
    console.log('Delete canceled');
    setShowDeleteDialog(false);
  };

  const handleCheckboxChange = (eventId) => {
    if (checkedEvents[eventId]) {
      // If unchecking, show cancel confirmation dialog
      handleCancel(eventId);
    } else {
      // If checking, show approval confirmation dialog
      handleApprove(eventId);
    }
  };

  const handleEditClick = (event) => {
    navigate('/admin/updateform', { state: { eventData: event } });
  };

  const handleClick = (id) => {
    navigate('/live-event?q=' + id);
  };

  return (
    <div className="container">
      {loading && <Loader />}
      <h2>Pending Approvals</h2>
      <div className="table-container border">
        <table className="table table-responsive table-bordered table-hover m-0">
          <thead className='sticky-top'>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>Event Category</th>
              <th>Host Name</th>
              <th>Host Contact</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {pendingEvents.length > 0 ? (
              pendingEvents.map(event => (
                <tr key={event._id}>
                  <td>{event._id}</td>
                  <td>{event.eventName}</td>
                  <td>{event.eventCategory}</td>
                  <td>{event.hostName}</td>
                  <td><a href={"tel:+91" + event.hostWhatsapp}>{event.hostWhatsapp}</a></td>
                  {/* <td>{new Date(event.startDate).toLocaleDateString()}</td>
                  <td>{new Date(event.endDate).toLocaleDateString()}</td> */}
                  <td>
                    <View onClick={() => handleClick(event._id)} titleAccess='View Event' className='cursor-pointer' style={{ color: "#D26600" }} /></td>
                  <td>
                    <Edit onClick={() => handleEditClick(event)} titleAccess='Edit Event Details' className='cursor-pointer' style={{ color: "#D26600" }} />
                  </td>
                  <td>
                    <Delete onClick={() => handleDeleteClick(event._id)} titleAccess='Delete Event' className='cursor-pointer' style={{ color: "#D26600" }} />
                  </td>
                  <td>
                    <input
                      className='cursor-pointer'
                      type="checkbox"
                      checked={checkedEvents[event._id] || false}
                      onChange={() => handleCheckboxChange(event._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No pending approvals</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* React Modal for approval confirmation */}
      {showApproveDialog && (
        <div className="modal show" style={{ display: 'block', marginTop: '50px' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Approval</h5>
                <button type="button" className="btn-close" onClick={cancelApprove}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to make this event PUBLIC?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelApprove}>Cancel</button>
                <button type="button" className="btn btn-outline-success" onClick={confirmApprove}>Approve</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* React Modal for cancel confirmation */}
      {showCancelDialog && (
        <div className="modal show" style={{ display: 'block', marginTop: '50px' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Cancellation</h5>
                <button type="button" className="btn-close" onClick={cancelCancel}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to cancel this event's approval?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelCancel}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={confirmCancel}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* React Modal for delete confirmation */}
      {showDeleteDialog && (
        <div className="modal show" style={{ display: 'block', marginTop: '50px' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={cancelDelete}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to DELETE this event?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
                <button type="button" className="btn btn-outline-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approve;

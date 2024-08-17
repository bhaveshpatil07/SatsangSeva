import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../Csss/AddProduct.css'; 
import { Form, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import View from '@mui/icons-material/VisibilityTwoTone';
import Events from '@mui/icons-material/ViewListTwoTone';
import Edit from '@mui/icons-material/BorderColorTwoTone';
import Delete from '@mui/icons-material/DeleteForeverTwoTone';
import Loader from '../components/Loader';

const AddProduct = () => {
  const url = process.env.REACT_APP_BACKEND;
  const [users, setUsers] = useState([]);
  // const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsersAndEvents = async () => {
      setLoading(true);
      try {
        const userResponse = await axios.get(url + '/user');
        const usersData = userResponse.data.users;

        // const eventResponse = await axios.get(url + '/events');
        // const eventsData = eventResponse.data.events;

        // const formattedEvents = eventsData.map(event => ({
        //   value: event._id,
        //   label: event._id
        // }));

        setUsers(usersData);
        setLoading(false);
        // setEvents(formattedEvents);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchUsersAndEvents();
  }, []);

  const handleViewBooking = (userId, userName) => {
    navigate(`/admin/userevents/${userId}?name=${encodeURIComponent(userName)}`);
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentUser(null);
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await axios.put(url + `/user/${currentUser._id}`, currentUser);
      setUsers(users.map(user => (user._id === currentUser._id ? currentUser : user)));
      handleCloseModal();
      alert("User Details Updated!");
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      setLoading(true);
      // Log the deletion action to the console
      // console.log(`User with ID ${selectedUser._id} would be deleted`);
      await axios.delete(url + "/user/" + selectedUser._id).then((resp) => {
        // console.log(resp);
        setUsers(users.filter(items => items._id !== selectedUser._id));
        alert("User deleted Successfully!");
      }).catch((e) => {
        alert("Error in Deleting User");
        console.log(e);
      }).finally(() => {
        setLoading(false);
      });
      // Reset selectedUserId and close the delete dialog
      setSelectedUser(null);
      setShowDeleteDialog(false);
    }
  };

  const cancelDelete = () => {
    // console.log('Delete canceled');
    setSelectedUser(null);
    setShowDeleteDialog(false);
  };
  const handleClick = (id) => {
    navigate('/public-profile?q=' + id);
  };

  return (
    <div className='container gap-3'>
      {loading && <Loader />}
      <h1>Total Users</h1>
      <div className="table-container border">
        <table className="table table-bordered table-hover m-0">
          <thead className='sticky-top' style={{zIndex: "1"}}>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">UserType</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Profile</th>
              <th scope="col">Events</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map(user => {

              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.userType}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <View titleAccess='View Public Profile' className='cursor-pointer' onClick={() => handleClick(user._id)} style={{ color: "#D26600" }} />
                    {/* <Form.Select aria-label="Events Select">
                      {userEvents.length > 0 ? (
                        userEvents.map(event => (
                          <option key={event.value} value={event.value}>
                            {event.label}
                          </option>
                        ))
                      ) : (
                        <option disabled>No Events</option>
                      )}
                    </Form.Select> */}
                  </td>
                  <td>
                    {user.events.length > 0 ?
                      <Events titleAccess='View User Events' className='cursor-pointer' onClick={() => handleViewBooking(user._id, user.name)} style={{ color: "#D26600" }} />
                  :
                  <p>NA</p>
                    }
                    </td>
                  <td>
                    <Edit titleAccess='Edit User Details' className='cursor-pointer' onClick={() => handleEditClick(user)} style={{ color: "#D26600" }} />
                  </td>
                  <td>
                    <Delete titleAccess='Delete User' className='cursor-pointer' onClick={() => handleDeleteClick(user)} style={{ color: "#D26600" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)} style={{ marginTop: '60px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to DELETE this user? <br /> This action is irreversible.</p>
          <p className='text-danger text-uppercase fw-bolder'>Deleting: {selectedUser && selectedUser.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={handleCloseModal} style={{ marginTop: '5%' }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentUser && (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={currentUser.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={currentUser.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={currentUser.phoneNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;

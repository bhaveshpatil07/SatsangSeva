import { useNavigate } from 'react-router-dom';
import '../Csss/Blog.css';
import { Table } from 'react-bootstrap';
import Delete from '@mui/icons-material/DeleteForeverTwoTone';
import View from '@mui/icons-material/VisibilityTwoTone';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  const handleCreateBlog = () => {
    navigate('/admin/createblog');
  };

  const [blogs, setBlogs] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch blog data from API when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url + '/admin/blog');
        const data = await response.json();
        setBlogs(data.blogs); // Assuming data.blogs contains the array of blogs
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewBlog = (id) => {
    navigate(`/blog?q=${id}`);
  };

  const confirmDelete = async() => {
    // console.log(`Deleting blog: ${currentBlogId}`);
    setLoading(true);
    await axios.delete(url + "/admin/blog/" + currentBlogId).then((resp)=>{
      setBlogs(blogs.filter(item => item._id !== currentBlogId));
      alert("Blog Deleted Successfully!");
    }).catch((e)=>{
      alert("Error in Deleting Blog!");
      console.log(e);
    });
    setLoading(false);
    setCurrentBlogId(null);
    setShowDeleteDialog(false);
  };

  const cancelDelete = () => {
    console.log('Delete canceled');
    setShowDeleteDialog(false);
  };

  return (
    <div className='container gap-3'>
      <div className="blog-container">
        <h1 className="text-tomato fw-bold">Blogs</h1>
        <button className="btn btn-outline-primary" onClick={handleCreateBlog}>
          Create A New Blog
        </button>
      </div>
        {/* <h2 className="table-title">Blog List</h2> */}
      <div className="table-container border">
        <Table bordered hover className='m-0'>
          <thead className='sticky-top'>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog._id}</td>
                <td>{blog.title.substring(0, 35)}{blog.title.length <= 35 ? "" : "..."}</td>
                <td>{blog.content.substring(0, 70)}{blog.content.length <= 70 ? "" : "..."}</td>
                <td>
                  <View onClick={() => handleViewBlog(blog._id)} titleAccess='View Blog' className='cursor-pointer' style={{ color: "#D26600" }} />
                </td>
                <td>
                  <Delete titleAccess='Delete Blog' className='cursor-pointer' style={{ color: "#D26600" }} onClick={() => {
                    setCurrentBlogId(blog._id);
                    setShowDeleteDialog(true);
                  }} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

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
                <p>Are you sure you want to DELETE this blog? <br /> This action is irreversible.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
                <button type="button" className="btn btn-outline-danger" onClick={confirmDelete}>DELETE</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;

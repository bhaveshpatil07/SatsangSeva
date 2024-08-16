import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../redux/AuthContext'; // Correct import path if necessary

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAdmin } = useAuth(); // Use isAdmin from context

  // Check if user is authenticated and is an admin
  const isAuthenticated = isAdmin;

  // Render the component if authenticated, otherwise redirect to AdminLogin
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default ProtectedRoute;

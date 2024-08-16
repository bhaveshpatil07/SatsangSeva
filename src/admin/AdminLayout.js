import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from './Sidenav';
import '../Csss/AdminLayout.css';

const AdminLayout = ({setAdmin}) => {
  return (
    <div className="admin-layout">
      <div style={{marginTop: "-5rem", minHeight: "5rem", backgroundColor: "#F58021", position: "fixed", zIndex: "1000"}} className="header absolute" />
      <Sidenav setAdmin={setAdmin} className="sidenav" />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout

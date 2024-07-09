// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/home" className="sidebar-link">Home</Link>
      <Link to="/recipe-type/continental" className="sidebar-link">Continental</Link>
      <Link to="/recipe-type/thai" className="sidebar-link">Thai</Link>
      <Link to="/recipe-type/chinese" className="sidebar-link">Chinese</Link>
    </div>
  );
};

export default Sidebar;

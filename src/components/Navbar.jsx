import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic based on searchQuery
    console.log('Performing search for:', searchQuery);
    // Example: Redirect or fetch data based on the searchQuery
  };

  return (
    <div className="navbar">
      <Link to="/" className="home-link">Home</Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>
      
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState, useRef } from 'react';
import displayIcon from '../SVG/Display.svg';
import arrowIcon from '../SVG/down.svg';
import './Header.css'; // Import the CSS file

const Header = ({ onGroupByChange, onSortByChange, groupBy, sortBy }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Function to close the dropdown if clicked outside
  const handleOutsideClick = (event) => {
    if (
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsDropdownVisible(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Attach event listener for click outside
    document.addEventListener('mousedown', handleOutsideClick);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Function to toggle the dropdown visibility
  const toggleDropdownMenu = () => {
    setIsDropdownVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-wrapper">
        <div
          className="toggle-button"
          onClick={toggleDropdownMenu}
          ref={toggleButtonRef} // Ref for the button
        >
          <img src={displayIcon} alt="Display Icon" className="icon-small" />
          Display
          <img src={arrowIcon} alt="Arrow Icon" className="icon-small" />
        </div>
      </div>

      {isDropdownVisible && (
        <div
          ref={dropdownMenuRef} // Ref for the dropdown
          className="dropdown-menu"
        >
          <div className="dropdown-section">
            <label className="dropdown-label">Group By:</label>
            <select
              className="dropdown-select"
              value={groupBy}
              onChange={(e) => onGroupByChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-section">
            <label className="dropdown-label">Sort By:</label>
            <select
              className="dropdown-select"
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

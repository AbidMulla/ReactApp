import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import DefaultProfile from '../../assets/images/profile/defaultProfile.jpg';
import './Header.css';

function Header() {
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    // Initialize dropdown with hover functionality
    const dropdownElement = dropdownRef.current;
    
    if (dropdownElement) {
      const dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
      const dropdownButton = dropdownElement.querySelector('button');
      
      // Keep track if user is over the dropdown button or menu
      let isOverDropdown = false;
      let isOverMenu = false;
      
      const handleButtonMouseEnter = () => {
        isOverDropdown = true;
        dropdownMenu.classList.add('show');
      };
      
      const handleButtonMouseLeave = () => {
        isOverDropdown = false;
        
        // Only hide if not over menu either
        setTimeout(() => {
          if (!isOverDropdown && !isOverMenu) {
            dropdownMenu.classList.remove('show');
          }
        }, 200);
      };
      
      const handleMenuMouseEnter = () => {
        isOverMenu = true;
      };
      
      const handleMenuMouseLeave = () => {
        isOverMenu = false;
        
        // Only hide if not over button either
        setTimeout(() => {
          if (!isOverDropdown && !isOverMenu) {
            dropdownMenu.classList.remove('show');
          }
        }, 200);
      };
      
      // Add event listeners
      dropdownButton.addEventListener('mouseenter', handleButtonMouseEnter);
      dropdownButton.addEventListener('mouseleave', handleButtonMouseLeave);
      dropdownMenu.addEventListener('mouseenter', handleMenuMouseEnter);
      dropdownMenu.addEventListener('mouseleave', handleMenuMouseLeave);
      
      // Cleanup event listeners on component unmount
      return () => {
        dropdownButton.removeEventListener('mouseenter', handleButtonMouseEnter);
        dropdownButton.removeEventListener('mouseleave', handleButtonMouseLeave);
        dropdownMenu.removeEventListener('mouseenter', handleMenuMouseEnter);
        dropdownMenu.removeEventListener('mouseleave', handleMenuMouseLeave);
      };
    }
  }, []);
  
  // Toggle dropdown for mobile view
  const toggleDropdown = () => {
    if (isMobile) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <header className={`header-container ${isMobile ? 'p-0' : ''}`}>
      <div className="d-flex justify-content-end align-items-center">
        {/* Notification Bell */}
        <div className="notification-bell-container me-3">
          <Link to="/user/notifications" className="notification-bell">
            <span className="bell-icon-wrapper">
              <Icon icon="heroicons-outline:bell" className="bell-icon" width="22" height="22" />
            </span>
            <span className="notification-badge">3</span>
          </Link>
        </div>
        
        {/* User Profile Dropdown */}
        <div className="dropdown user-dropdown" ref={dropdownRef}>
          <button 
            className="d-flex align-items-center" 
            type="button" 
            id="userDropdown"
            onClick={toggleDropdown}
          >
            <img 
              src={DefaultProfile} 
              alt="User" 
              className="rounded-circle me-md-2" 
              width="32" 
              height="32" 
            />
            <span className="me-2 user-name" >ABID MULLA</span>
            <Icon icon="mdi:chevron-down" width="18" height="18" />
          </button>
          <ul className={`dropdown-menu dropdown-menu-end shadow-sm ${isMobile && dropdownOpen ? 'show' : ''}`} aria-labelledby="userDropdown">
            <li>
              <Link to="/user/profile" className="dropdown-item d-flex align-items-center">
                <Icon icon="fluent:person-24-filled" className="me-2" width="18" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/user/settings" className="dropdown-item d-flex align-items-center">
                <Icon icon="fluent:settings-24-filled" className="me-2" width="18" />
                <span>Settings</span>
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <Link to="/user/logout" className="dropdown-item text-danger d-flex align-items-center">
                <Icon icon="fluent:sign-out-24-filled" className="me-2" width="18" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
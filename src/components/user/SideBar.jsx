import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from '../../assets/images/logo/logo.png';
import './SideBar.css';

function SideBar() {
  const location = useLocation();
  // State for toggle collapse in menu items
  const [collapsed, setCollapsed] = useState(false);
  // State for mobile sidebar visibility
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  // Track if we're on mobile or not
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-hide sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setShowMobileSidebar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when clicking a link
    if (isMobile) {
      setShowMobileSidebar(false);
    }
  };

  // Mobile toggle button to be rendered in the layout
  const MobileToggleButton = () => (
    <button
      className="btn btn-primary"
      onClick={toggleMobileSidebar}
      aria-label="Toggle sidebar"
    >
      <Icon icon="mdi:menu" width="24" height="24" />
    </button>
  );

  // Standard sidebar content
  const SidebarContent = () => (
    <div className="sidebar-nav py-2">
      <Link
        to="/user/dashboard"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/dashboard') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:grid-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Dashboard</span>
      </Link>

      <Link
        to="/user/profile"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/profile') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:person-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Profile</span>
      </Link>

      <Link
        to="/user/courses"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/courses') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:book-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">My Courses</span>
      </Link>

      <Link
        to="/user/classroom"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/classroom') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:desktop-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Classroom</span>
      </Link>

      <Link
        to="/user/certificates"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/certificates') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:document-ribbon-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Certificates</span>
      </Link>

      <Link
        to="/user/notifications"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/notifications') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:alert-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Notifications</span>
      </Link>

      <Link
        to="/user/settings"
        className={`nav-item d-flex align-items-center py-2 px-3 ${isActive('/user/settings') ? 'active' : ''}`}
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:settings-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Settings</span>
      </Link>

      <Link
        to="/user/logout"
        className="nav-item d-flex align-items-center py-2 px-3 text-danger mt-2"
        onClick={handleLinkClick}
      >
        <div className="nav-icon-wrapper me-3 d-flex align-items-center justify-content-center">
          <Icon icon="fluent:sign-out-24-regular" width="22" height="22" />
        </div>
        <span className="nav-text">Logout</span>
      </Link>
    </div>
  );

  return (
    <>
      {/* Logo for desktop view */}
      {!isMobile && (
        <div className="logo-container border-end" style={{backgroundColor:'#f6f7f9', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
          <Link to="/user/dashboard" className="text-decoration-none d-flex justify-content-center">
            <img 
              src={Logo} 
              alt="Logo" 
              className="img-fluid" 
              style={{ maxHeight: '60px', maxWidth: '80%' }} 
            />
          </Link>
        </div>
      )}
      
      {/* Mobile Toggle Button - To be rendered in the layout */}
      {isMobile && <MobileToggleButton />}

      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="d-md-none"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1030
          }}
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`d-md-none mobile-sidebar border-end position-fixed ${showMobileSidebar ? 'show' : 'hide'}`}
          style={{
            width: '280px',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 1040,
            transform: showMobileSidebar ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          {/* Mobile Logo */}
          <div className="logo-container border-bottom" style={{ height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem' }}>
            <Link to="/user/dashboard" className="text-decoration-none">
              <img 
                src={Logo} 
                alt="Logo" 
                className="img-fluid" 
                style={{ maxHeight: '50px', maxWidth: '100%' }} 
              />
            </Link>
            <button
              className="btn btn-sm btn-outline-secondary rounded-circle"
              onClick={toggleMobileSidebar}
              aria-label="Close menu"
            >
              <Icon icon="fluent:dismiss-24-filled" width="20" height="20" />
            </button>
          </div>
          <div className="overflow-auto" style={{ height: 'calc(100vh - 78px)' }}>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar Content */}
      {!isMobile && (
        <div className="sidebar overflow-auto" style={{ minHeight: 'calc(100vh - 120px)' }}>
          <SidebarContent />
        </div>
      )}
    </>
  );
}

export default SideBar;
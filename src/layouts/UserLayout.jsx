import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from '../components/user/Header';
import SideBar from '../components/user/SideBar';
import Footer from '../components/user/Footer';
import Breadcrumbs from '../components/user/Breadcrumbs';
import './UserLayout.css';

function UserLayout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/user/dashboard';
  return (
    <div className="d-flex flex-column min-vh-100 layout-bg">
      {/* Mobile Header - Only visible on mobile */}
      <div className="d-md-none bg-light d-flex justify-content-between align-items-center mobile-header">
        <div className="sidebar-toggle">
          <SideBar />
        </div>
        <div className="user-profile-section">
          <Header />
        </div>
      </div>
      
      <div className="container-fluid flex-grow-1 p-0">
        <div className="row g-0">
          {/* Desktop Sidebar - Left side, only visible on desktop */}
          <div className="d-none d-md-block col-md-3 col-lg-2 bg-light" style={{ height: '100vh', position: 'fixed', top: 0, left: 0, width: '16.67%', maxWidth: '16.67%' }}>
            <SideBar />
          </div>
          
          {/* Main Content Area - Right side */}
          <div className="col-12 col-md-9 col-lg-10 d-flex flex-column main-content">
            {/* Desktop Header - Hidden on mobile */}
            <div className="d-none d-md-block">
              <Header />
            </div>
            
            {/* Main Content */}
            <div className="p-3 flex-grow-1">
              {/* Breadcrumbs - Hidden on mobile */}
              <div className="d-none d-md-block">
                <Breadcrumbs />
              </div>
              
              {/* Content Body */}
              <div className={isDashboard ? '' : 'bg-white p-3 p-md-4 rounded'}>
                {children || <Outlet />}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}

export default UserLayout;
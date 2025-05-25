import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Create a mapping of path segments to readable names
  const getReadableName = (path) => {
    const pathMap = {
      'user': 'User',
      'dashboard': 'Dashboard',
      'profile': 'Profile',
      'orders': 'Orders',
      'wishlist': 'Wishlist',
      'settings': 'Settings'
    };

    return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  // Get the current page title based on the last path segment
  const getPageTitle = () => {
    if (pathnames.length === 0) return 'Home';
    return getReadableName(pathnames[pathnames.length - 1]);
  };

  return (
    <nav aria-label="breadcrumb" className="bg-white py-3 px-4 mb-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        {/* Page Title on the left */}
        <h4 className="mb-0 fw-bold">{getPageTitle()}</h4>

        {/* Breadcrumbs on the right */}
        <ol className="breadcrumb mb-0 d-flex align-items-center">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-secondary d-flex align-items-center">
              <Icon icon="mdi:home" className="me-1" width="18" height="18" />
              <span>Home</span>
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={to}>
                <li className="mx-1 text-muted">
                  <Icon icon="mdi:chevron-right" width="16" height="16" />
                </li>
                {isLast ? (
                  <li className="breadcrumb-item active fw-semibold" aria-current="page">
                    {getReadableName(value)}
                  </li>
                ) : (
                  <li className="breadcrumb-item">
                    <Link to={to} className="text-decoration-none text-secondary">
                      {getReadableName(value)}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
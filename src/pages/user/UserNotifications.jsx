import React, { useState } from 'react';

function UserNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'New Course Available',
      message: 'A new course "Advanced React Patterns" is now available. Check it out!',
      date: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Certificate Issued',
      message: 'Your certificate for "JavaScript Fundamentals" has been issued.',
      date: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Upcoming Live Session',
      message: 'Don\'t forget about your scheduled live session tomorrow at 10:00 AM.',
      date: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'danger',
      title: 'Subscription Expiring',
      message: 'Your premium subscription will expire in 5 days. Renew now to avoid interruption.',
      date: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'info',
      title: 'New Learning Path',
      message: 'Based on your interests, we recommend the "Full Stack Developer" learning path.',
      date: '3 days ago',
      read: true
    },
    {
      id: 6,
      type: 'success',
      title: 'Assignment Graded',
      message: 'Your assignment "React Component Architecture" has been graded. You received 95%!',
      date: '4 days ago',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const getIconClass = (type) => {
    switch(type) {
      case 'info': return 'bi bi-info-circle text-primary';
      case 'success': return 'bi bi-check-circle text-success';
      case 'warning': return 'bi bi-exclamation-triangle text-warning';
      case 'danger': return 'bi bi-x-circle text-danger';
      default: return 'bi bi-bell text-secondary';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="user-notifications">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div>
                {unreadCount > 0 && (
                  <span className="badge bg-danger">{unreadCount} new</span>
                )}
              </div>
              <div>
                <button 
                  className="btn btn-sm btn-outline-primary me-2" 
                  onClick={markAllAsRead}
                  disabled={unreadCount === 0}
                >
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`list-group-item list-group-item-action ${!notification.read ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex w-100 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <i className={`${getIconClass(notification.type)} fs-4`}></i>
                          </div>
                          <div>
                            <h6 className="mb-1">{notification.title}</h6>
                            <p className="mb-1 text-muted">{notification.message}</p>
                            <small className="text-muted">{notification.date}</small>
                          </div>
                        </div>
                        <div className="notification-actions">
                          {!notification.read && (
                            <button 
                              className="btn btn-sm btn-outline-secondary me-2" 
                              onClick={() => markAsRead(notification.id)}
                            >
                              <i className="bi bi-check"></i> Mark as read
                            </button>
                          )}
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-5">
                    <i className="bi bi-bell fs-1 text-muted"></i>
                    <p className="mt-3">No notifications at this time</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNotifications;

import React from 'react';
import './Activity.css';

function Activity() {
  const activityData = [
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '4 seconds ago',
      color: '#f44336' // Red
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '2 hours ago',
      color: '#3152e8', // Blue
      hasMore: true
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '2 hours ago',
      color: '#f44336' // Red
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '14 hours ago',
      color: '#3152e8', // Blue
      hasMore: true
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '14 hours ago',
      color: '#f44336' // Red
    },
    // 10 more entries
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '1 day ago',
      color: '#3152e8',
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '1 day ago',
      color: '#f44336',
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '2 days ago',
      color: '#3152e8',
      hasMore: true
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '2 days ago',
      color: '#f44336',
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '3 days ago',
      color: '#3152e8',
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '3 days ago',
      color: '#f44336',
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '4 days ago',
      color: '#3152e8',
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '4 days ago',
      color: '#f44336',
    },
    {
      type: 'Log Out',
      user: 'abid is Logged Out',
      time: '5 days ago',
      color: '#3152e8',
    },
    {
      type: 'Login',
      user: 'abid is Logged In',
      time: '5 days ago',
      color: '#f44336',
    },
  ];
  

  return (
    <div className="activity-card">
      <h5 className="activity-title border-bottom pb-2">Activity</h5>
      
      <div className="activity-timeline">
        {activityData.map((activity, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot-container">
              <div 
                className="timeline-dot" 
                style={{ backgroundColor: activity.color }}
              ></div>
              {index < activityData.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <h6 className="timeline-title">{activity.type}</h6>
                <span className="timeline-time">{activity.time}</span>
              </div>
              <p className="timeline-text">{activity.user}</p>
              {/* {activity.hasMore && (
                <a href="#" className="timeline-more">more</a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity
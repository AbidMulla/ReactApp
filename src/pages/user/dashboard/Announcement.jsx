import React from 'react';
import './Announcement.css';

function Announcement() {
  const upcomingEvents = [
    {
      date: { day: 29, },
      title: 'Practical theory',
      type: 'Assignments',
      typeColor: '#4caf50'
    },
    {
      date: { day: 29, },
      title: 'Practical theory ',
      type: 'Test',
      typeColor: '#4caf50'
    },
    {
      date: { day: 29, },
      title: 'Practical theory ',
      type: 'Lecture',
      typeColor: '#4caf50'
    },
    {
      date: { day: 29, },
      title: 'Practical theory ',
      type: 'Assignments',
      typeColor: '#4caf50'
    }
  ];

  return (
    <div className="announcement-card">
      <h5 className="announcement-title border-bottom pb-2 mb-3">Latest Announcement</h5>
      <div className="announcement-list">
        {upcomingEvents.map((event, index) => (
          <div className="announcement-item" key={index}>
            <div className="date-container">
              <div className="day">{event.date.day}</div>
              <div className="month">{event.date.month}</div>
            </div>
            <div className="event-details">
              <div className="event-title">{event.title}</div>
              <div className="event-type" style={{ color: event.typeColor }}>
                <span className="dot" style={{ backgroundColor: event.typeColor }}></span>
                {event.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcement;
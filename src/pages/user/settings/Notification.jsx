import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './Notification.css';

function Notification() {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    courseUpdates: true,
    newCourses: true,
    certificateIssued: true,
    quizReminders: true,
    courseFeedback: false,
  });

  const handleToggle = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    });
  };

  const handleSave = () => {
    // Here you would typically send the updated settings to your backend
    alert('Notification preferences saved successfully!');
  };

  return (
    <div className="notification-settings-container">
      <div className="notification-channels">
        <h4>Notification Channels</h4>
        <p className="text-muted">Choose how you want to receive notifications</p>
        
        <div className="notification-toggle-group">
          <div className="notification-toggle-item">
            <div className="toggle-info">
              <div className="toggle-icon">
                <Icon icon="mdi:email-outline" width="20" height="20" />
              </div>
              <div className="toggle-details">
                <h5>Email Notifications</h5>
                <p>Receive notifications via email</p>
              </div>
            </div>
            <div className="toggle-switch">
              <div 
                className={`custom-switch ${notificationSettings.emailNotifications ? 'active' : ''}`}
                onClick={() => handleToggle('emailNotifications')}
              >
                <div className="switch-slider"></div>
              </div>
            </div>
          </div>

          <div className="notification-toggle-item">
            <div className="toggle-info">
              <div className="toggle-icon">
                <Icon icon="mdi:bell-outline" width="20" height="20" />
              </div>
              <div className="toggle-details">
                <h5>Push Notifications</h5>
                <p>Receive notifications in your browser</p>
              </div>
            </div>
            <div className="toggle-switch">
              <div 
                className={`custom-switch ${notificationSettings.pushNotifications ? 'active' : ''}`}
                onClick={() => handleToggle('pushNotifications')}
              >
                <div className="switch-slider"></div>
              </div>
            </div>
          </div>

          <div className="notification-toggle-item">
            <div className="toggle-info">
              <div className="toggle-icon">
                <Icon icon="mdi:message-text-outline" width="20" height="20" />
              </div>
              <div className="toggle-details">
                <h5>SMS Notifications</h5>
                <p>Receive notifications via text message</p>
              </div>
            </div>
            <div className="toggle-switch">
              <div 
                className={`custom-switch ${notificationSettings.smsNotifications ? 'active' : ''}`}
                onClick={() => handleToggle('smsNotifications')}
              >
                <div className="switch-slider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
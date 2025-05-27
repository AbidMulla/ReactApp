import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './UserNotifications.css';

function UserNotifications() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            icon: 'mdi:bell-ring-outline',
            title: 'Live Class Started',
            message: 'Live Class "Live Class(Test)" for Web development has started. Join the class from your respective class room dashboard',
            date: '21 May 12:42 pm',
            read: false,
            iconBg: '#e8f0fe',
            iconColor: '#3152e8'
        },
        {
            id: 2,
            icon: 'mdi:bell-ring-outline',
            title: 'Live Class Started',
            message: 'Live Class "Live Class(Test)" for Web development has started. Join the class from your respective class room dashboard',
            date: '07 May 5:43 pm',
            read: false,
            iconBg: '#e8f0fe',
            iconColor: '#3152e8'
        },
        {
            id: 3,
            icon: 'mdi:bell-outline',
            title: 'New Live Class Scheduled',
            message: 'Live Class: Live Class(Test) has been scheduled for Web development, Date: 2025-05-07, Time: 2025-05-07 23:15:00 - 2025-05-07 23:50:00',
            date: '07 May 5:42 pm',
            read: true,
            iconBg: '#e8f0fe',
            iconColor: '#3152e8'
        },
        {
            id: 4,
            icon: 'mdi:bell-outline',
            title: 'New Live Class Scheduled',
            message: 'Live Class: Live Class(Test) has been scheduled for Web development, Date: 2025-05-08, Time: 2025-05-08 23:10:00 - 2025-05-08 23:15:00',
            date: '07 May 5:38 pm',
            read: true,
            iconBg: '#e8f0fe',
            iconColor: '#3152e8'
        },
        {
            id: 5,
            icon: 'mdi:clipboard-text-outline',
            title: 'Assessment is Active now',
            message: 'Assessment "Test2_notification" is now active in classroom "Web development"',
            date: '05 May 1:36 pm',
            read: true,
            iconBg: '#fff4e5',
            iconColor: '#ff9800'
        },
        {
            id: 6,
            icon: 'mdi:certificate-outline',
            title: 'Certificate Issued',
            message: 'Your certificate for "Security Training" has been issued. You can download it from the certificates section.',
            date: '03 May 11:20 am',
            read: true,
            iconBg: '#e8f5e9',
            iconColor: '#4caf50'
        },
        {
            id: 7,
            icon: 'mdi:book-open-outline',
            title: 'New Course Available',
            message: 'A new course "Advanced Security Protocols" is now available in your learning dashboard.',
            date: '01 May 9:15 am',
            read: true,
            iconBg: '#e3f2fd',
            iconColor: '#2196f3'
        },
        {
            id: 8,
            icon: 'mdi:calendar-clock-outline',
            title: 'Upcoming Deadline',
            message: 'The deadline for submitting your "Security Risk Assessment" assignment is approaching. Due date: May 28, 2025.',
            date: '28 Apr 3:45 pm',
            read: true,
            iconBg: '#ffebee',
            iconColor: '#f44336'
        },
        {
            id: 9,
            icon: 'mdi:star-outline',
            title: 'Course Completed',
            message: 'Congratulations! You have successfully completed the "Basic Security Training" course with a score of 92%.',
            date: '25 Apr 10:30 am',
            read: true,
            iconBg: '#e8f5e9',
            iconColor: '#4caf50'
        },
        {
            id: 10,
            icon: 'mdi:account-check-outline',
            title: 'Profile Verification',
            message: 'Your profile has been verified. You now have access to all premium features of the platform.',
            date: '20 Apr 2:15 pm',
            read: true,
            iconBg: '#e8f0fe',
            iconColor: '#3152e8'
        },
        {
            id: 11,
            icon: 'mdi:gift-outline',
            title: 'Special Offer',
            message: 'Limited time offer: Get 30% off on all advanced security courses. Use code SECURITY30 at checkout.',
            date: '15 Apr 11:00 am',
            read: true,
            iconBg: '#fce4ec',
            iconColor: '#e91e63'
        },
        {
            id: 12,
            icon: 'mdi:forum-outline',
            title: 'New Discussion',
            message: 'A new discussion topic has been started in the "Security Best Practices" forum. Join the conversation!',
            date: '10 Apr 4:20 pm',
            read: true,
            iconBg: '#e0f7fa',
            iconColor: '#00bcd4'
        }
    ]);

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    return (
        <div className="contianer">
            <div className="row">
                <div className="col-12">
                    <div className="notifications-container">

                        <div className="notifications-list">
                            {notifications.map((notification) => (
                                <Link
                                    to={`/user/notificationDetails`}
                                    key={notification.id}
                                    className={`notification-item ${!notification.read ? 'unread' : ''}`}
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <div
                                        className="notification-icon"
                                        style={{
                                            backgroundColor: notification.iconBg,
                                            color: notification.iconColor
                                        }}
                                    >
                                        <Icon icon={notification.icon} width="24" height="24" />
                                    </div>
                                    <div className="notification-content">
                                        <h3 className="notification-title">{notification.title}</h3>
                                        <p className="notification-message">{notification.message}</p>
                                        <span className="notification-date">{notification.date}</span>
                                    </div>
                                    {!notification.read && <div className="unread-indicator"></div>}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNotifications;

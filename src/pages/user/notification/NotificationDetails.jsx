import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './NotificationDetails.css';

function NotificationDetails() {
  const location = useLocation();
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample notification data that would normally come from an API
  const notificationsData = [
    {
      id: 1,
      icon: 'mdi:bell-ring-outline',
      title: 'Live Class Started',
      message: 'Live Class "Live Class(Test)" for Web development has started. Join the class from your respective class room dashboard',
      date: '21 May 12:42 pm',
      read: true,
      iconBg: '#e8f0fe',
      iconColor: '#3152e8',
      details: {
        className: 'Live Class(Test)',
        subject: 'Web Development',
        instructor: 'John Smith',
        duration: '60 minutes',
        joinUrl: 'https://example.com/classroom/123',
        additionalInfo: 'Please ensure you have a stable internet connection and your microphone is working properly before joining the class.'
      }
    },
    {
      id: 2,
      icon: 'mdi:bell-ring-outline',
      title: 'Live Class Started',
      message: 'Live Class "Live Class(Test)" for Web development has started. Join the class from your respective class room dashboard',
      date: '07 May 5:43 pm',
      read: true,
      iconBg: '#e8f0fe',
      iconColor: '#3152e8',
      details: {
        className: 'Live Class(Test)',
        subject: 'Web Development',
        instructor: 'Sarah Johnson',
        duration: '45 minutes',
        joinUrl: 'https://example.com/classroom/456',
        additionalInfo: 'This session will cover advanced CSS techniques and responsive design principles.'
      }
    },
    {
      id: 3,
      icon: 'mdi:bell-outline',
      title: 'New Live Class Scheduled',
      message: 'Live Class: Live Class(Test) has been scheduled for Web development, Date: 2025-05-07, Time: 2025-05-07 23:15:00 - 2025-05-07 23:50:00',
      date: '07 May 5:42 pm',
      read: true,
      iconBg: '#e8f0fe',
      iconColor: '#3152e8',
      details: {
        className: 'Live Class(Test)',
        subject: 'Web Development',
        instructor: 'Michael Brown',
        scheduledDate: '2025-05-07',
        startTime: '23:15:00',
        endTime: '23:50:00',
        additionalInfo: 'This class will focus on JavaScript fundamentals and DOM manipulation techniques.'
      }
    },
    {
      id: 4,
      icon: 'mdi:bell-outline',
      title: 'New Live Class Scheduled',
      message: 'Live Class: Live Class(Test) has been scheduled for Web development, Date: 2025-05-08, Time: 2025-05-08 23:10:00 - 2025-05-08 23:15:00',
      date: '07 May 5:38 pm',
      read: true,
      iconBg: '#e8f0fe',
      iconColor: '#3152e8',
      details: {
        className: 'Live Class(Test)',
        subject: 'Web Development',
        instructor: 'Emily Davis',
        scheduledDate: '2025-05-08',
        startTime: '23:10:00',
        endTime: '23:15:00',
        additionalInfo: 'This short session will be a quick introduction to the upcoming module on frontend frameworks.'
      }
    },
    {
      id: 5,
      icon: 'mdi:clipboard-text-outline',
      title: 'Assessment is Active now',
      message: 'Assessment "Test2_notification" is now active in classroom "Web development"',
      date: '05 May 1:36 pm',
      read: true,
      iconBg: '#fff4e5',
      iconColor: '#ff9800',
      details: {
        assessmentName: 'Test2_notification',
        subject: 'Web Development',
        dueDate: '2025-05-12',
        totalQuestions: 25,
        timeLimit: '60 minutes',
        passingScore: '70%',
        additionalInfo: 'This assessment covers HTML, CSS, and basic JavaScript concepts. You can attempt the assessment twice if needed.'
      }
    },
    {
      id: 6,
      icon: 'mdi:certificate-outline',
      title: 'Certificate Issued',
      message: 'Your certificate for "Security Training" has been issued. You can download it from the certificates section.',
      date: '03 May 11:20 am',
      read: true,
      iconBg: '#e8f5e9',
      iconColor: '#4caf50',
      details: {
        certificateName: 'Security Training Certificate',
        issueDate: '2025-05-03',
        validUntil: '2028-05-03',
        certificateID: 'SEC-2025-1001',
        issuer: 'National Security Academy',
        downloadUrl: '/user/certificates',
        additionalInfo: 'This certificate verifies your proficiency in basic security protocols and practices.'
      }
    },
    {
      id: 7,
      icon: 'mdi:book-open-outline',
      title: 'New Course Available',
      message: 'A new course "Advanced Security Protocols" is now available in your learning dashboard.',
      date: '01 May 9:15 am',
      read: true,
      iconBg: '#e3f2fd',
      iconColor: '#2196f3',
      details: {
        courseName: 'Advanced Security Protocols',
        instructor: 'Dr. Robert Wilson',
        duration: '12 hours',
        modules: 8,
        level: 'Advanced',
        enrollmentDeadline: '2025-06-01',
        additionalInfo: 'This course builds on the basic security training and covers advanced topics including threat modeling and security architecture.'
      }
    },
    {
      id: 8,
      icon: 'mdi:calendar-clock-outline',
      title: 'Upcoming Deadline',
      message: 'The deadline for submitting your "Security Risk Assessment" assignment is approaching. Due date: May 28, 2025.',
      date: '28 Apr 3:45 pm',
      read: true,
      iconBg: '#ffebee',
      iconColor: '#f44336',
      details: {
        assignmentName: 'Security Risk Assessment',
        course: 'Security Management',
        dueDate: '2025-05-28',
        submissionFormat: 'PDF document',
        wordLimit: '2000-2500 words',
        instructor: 'Jennifer Parker',
        additionalInfo: 'This assignment requires you to conduct a comprehensive security risk assessment for a fictional organization.'
      }
    },
    {
      id: 9,
      icon: 'mdi:star-outline',
      title: 'Course Completed',
      message: 'Congratulations! You have successfully completed the "Basic Security Training" course with a score of 92%.',
      date: '25 Apr 10:30 am',
      read: true,
      iconBg: '#e8f5e9',
      iconColor: '#4caf50',
      details: {
        courseName: 'Basic Security Training',
        completionDate: '2025-04-25',
        score: '92%',
        instructor: 'David Thompson',
        certificateStatus: 'Issued',
        nextRecommendedCourse: 'Advanced Security Protocols',
        additionalInfo: 'Your high score demonstrates excellent understanding of the core security concepts covered in this course.'
      }
    },
    {
      id: 10,
      icon: 'mdi:account-check-outline',
      title: 'Profile Verification',
      message: 'Your profile has been verified. You now have access to all premium features of the platform.',
      date: '20 Apr 2:15 pm',
      read: true,
      iconBg: '#e8f0fe',
      iconColor: '#3152e8',
      details: {
        verificationDate: '2025-04-20',
        verifiedBy: 'System Administrator',
        verificationID: 'VER-2025-4589',
        premiumFeatures: ['Advanced courses', 'Live mentoring sessions', 'Industry certifications', 'Job placement assistance'],
        validUntil: '2026-04-20',
        additionalInfo: 'Your profile verification gives you access to premium content and features for one year.'
      }
    },
    {
      id: 11,
      icon: 'mdi:gift-outline',
      title: 'Special Offer',
      message: 'Limited time offer: Get 30% off on all advanced security courses. Use code SECURITY30 at checkout.',
      date: '15 Apr 11:00 am',
      read: true,
      iconBg: '#fce4ec',
      iconColor: '#e91e63',
      details: {
        offerName: 'Security Course Discount',
        discountAmount: '30%',
        promoCode: 'SECURITY30',
        validFrom: '2025-04-15',
        validUntil: '2025-05-15',
        eligibleCourses: ['Advanced Security Protocols', 'Cybersecurity Fundamentals', 'Security Compliance Training'],
        additionalInfo: 'This limited-time offer is available for both new and existing students. Cannot be combined with other promotions.'
      }
    },
    {
      id: 12,
      icon: 'mdi:forum-outline',
      title: 'New Discussion',
      message: 'A new discussion topic has been started in the "Security Best Practices" forum. Join the conversation!',
      date: '10 Apr 4:20 pm',
      read: true,
      iconBg: '#e0f7fa',
      iconColor: '#00bcd4',
      details: {
        discussionTitle: 'Implementing Zero Trust Security Models',
        forum: 'Security Best Practices',
        startedBy: 'Alex Rodriguez',
        participants: 8,
        replies: 12,
        lastActivity: '2025-04-25',
        additionalInfo: 'This discussion explores practical approaches to implementing zero trust security models in various organizational contexts.'
      }
    }
  ];

  useEffect(() => {
    // Extract the notification ID from the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const notificationId = parseInt(queryParams.get('id'));
    
    if (notificationId) {
      // Find the notification with the matching ID
      const foundNotification = notificationsData.find(n => n.id === notificationId);
      
      if (foundNotification) {
        setNotification(foundNotification);
      }
    }
    
    setLoading(false);
  }, [location]);

  if (loading) {
    return <div className="notification-details-loading">Loading...</div>;
  }

  if (!notification) {
    return (
      <div className="notification-not-found">
        <h2>Notification not found</h2>
        <p>The notification you're looking for doesn't exist or has been removed.</p>
        <Link to="/user/notifications" className="back-to-notifications">
          <Icon icon="mdi:arrow-left" width="18" height="18" />
          Back to Notifications
        </Link>
      </div>
    );
  }



  return (
    <div className="notification-details-container">
      
      <div className="notification-details-card">
        <div className="notification-details-main">
          <div 
            className="notification-details-icon" 
            style={{ 
              backgroundColor: notification.iconBg,
              color: notification.iconColor 
            }}
          >
            <Icon icon={notification.icon} width="32" height="32" />
          </div>
          
          <div className="notification-details-content">
            <h3 className="notification-details-title">{notification.title}</h3>
            <p className="notification-details-message">{notification.message}</p>
            <div className="notification-details-meta">
              <span className="notification-details-date">
                <Icon icon="mdi:clock-outline" width="16" height="16" />
                {notification.date}
              </span>
            </div>
          </div>
        </div>
        
        <div className="notification-details-divider"></div>
        

      </div>
    </div>
  );
}

export default NotificationDetails;
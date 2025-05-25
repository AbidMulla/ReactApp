import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import course1 from '../../../assets/images/course/course1.png';
import course2 from '../../../assets/images/course/course2.png';
import course3 from '../../../assets/images/course/course3.png';
import course4 from '../../../assets/images/course/course4.png';


function CourseTab() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample course data - this would typically come from an API
  const courses = [
    {
      id: 1,
      title: 'Introduction to React React React',
      instructor: 'John Smith',
      description: 'Get ready to dive into the world of User Interface (UI) development with React, the most popular JavaScript library for building interactive UIs.',
      lessons: 8,
      duration: '0.55 hour',
      level: 'Beginner',
      rating: 4.8,
      reviews: 125,
      price: 'Free',
      enrolled: 1250,
      image: course3
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Sarah Johnson',
      description: 'Take your JavaScript skills to the next level with advanced concepts like closures, prototypes, async/await, and functional programming techniques.',
      lessons: 12,
      duration: '1.25 hours',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 98,
      price: '24.99$',
      enrolled: 980,
      image: course2  
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Michael Chen',
      description: 'Learn the essential principles of UI/UX design, from wireframing and prototyping to user research and creating delightful user experiences.',
      lessons: 10,
      duration: '0.85 hour',
      level: 'Beginner',
      rating: 4.7,
      reviews: 154,
      price: '19.99$',
      enrolled: 1540,
      image: course3
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      instructor: 'Emily Rodriguez',
      description: 'Master server-side JavaScript with Node.js. Build robust APIs, connect to databases, handle authentication, and deploy scalable backend applications.',
      lessons: 15,
      duration: '1.5 hours',
      level: 'Advanced',
      rating: 4.6,
      reviews: 75,
      price: '29.99$',
      enrolled: 750,
      image: course4
    }
  ];

  return (
    <div className="course-tab-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="course-search-container">
          <div className="search-input-wrapper">
            <Icon icon="mdi:magnify" width="16" height="16" className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Type to Search"
              aria-label="Search courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search-btn" 
                type="button"
                onClick={() => setSearchTerm('')}
              >
                <Icon icon="mdi:close-circle" width="16" height="16" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        {courses
          .filter(course => 
            searchTerm === '' || 
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.level.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(course => (
          <div key={course.id} className="col-md-6 col-lg-3 mb-2">
            <div className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} className="img-fluid" />
              </div>
              <div className="course-details">
                <h5 className="course-title">{course.title}</h5>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta-info">
                  <div className="meta-row d-flex justify-content-between">
                    <div className="views-count">
                      <Icon icon="mdi:eye-outline" className="meta-icon" />
                      <span>{course.lessons}</span>
                    </div>
                    <div className="rating-stars-container">
                      <Icon icon="mdi:star" className="star-icon" />
                      <Icon icon="mdi:star" className="star-icon" />
                      <Icon icon="mdi:star" className="star-icon" />
                      <Icon icon="mdi:star" className="star-icon" />


                      <span className="rating-value">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="meta-row  d-flex justify-content-between">
                    <div className="course-duration">
                      <Icon icon="mdi:clock-outline" className="meta-icon" />
                      <span>{course.lessons} lesson{course.lessons !== 1 ? 's' : ''} </span>
                    </div>
                    <div className="course-duration">
                      <Icon icon="mdi:clock-outline" className="meta-icon" />
                      <span>{course.lessons} lesson{course.lessons !== 1 ? 's' : ''} </span>
                    </div>
                  </div>
                </div>
                
                <div className="course-footer">
                  <div className={`course-price ${course.price === 'Free' ? 'free-price' : 'paid-price'}`}>{course.price}</div>
                  <button className={`watch-now-btn ${course.price === 'Free' ? 'free-btn' : 'paid-btn'}`}>
                    {course.price === 'Free' ? (
                      <Icon icon="mdi:play-circle-outline" width="20" height="20" />
                    ) : (
                      <Icon icon="mdi:cart-outline" width="20" height="20" />
                    )}
                    {course.price === 'Free' ? 'Watch Now' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTab;
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import course1 from '../../../assets/images/course/course1.png';
import course2 from '../../../assets/images/course/course2.png';
import course3 from '../../../assets/images/course/course3.png';
import course4 from '../../../assets/images/course/course4.png';
import { useNavigate } from 'react-router-dom';
import './CourseFilter.css';


function CourseTab() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filters, setFilters] = useState({
    level: [],
    price: [],
    category: [],
    rating: null
  });
  const filterPopupRef = useRef(null);
  
  // Close filter popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterPopupRef.current && !filterPopupRef.current.contains(event.target)) {
        setShowFilterPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle filter selection
  const toggleFilter = (type, value) => {
    setFilters(prevFilters => {
      if (type === 'rating') {
        return { ...prevFilters, rating: value };
      }
      
      const updatedArray = [...prevFilters[type]];
      const index = updatedArray.indexOf(value);
      
      if (index > -1) {
        updatedArray.splice(index, 1);
      } else {
        updatedArray.push(value);
      }
      
      return { ...prevFilters, [type]: updatedArray };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      level: [],
      price: [],
      category: [],
      rating: null
    });
  };

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
        
        {/* Filter Button */}
        <div className="filter-container position-relative">
          <button 
            className="filter-button" 
            onClick={() => setShowFilterPopup(!showFilterPopup)}
          >
            <Icon icon="mdi:filter-outline" width="18" height="18" className="me-1" />
            Filter
          </button>
          
          {/* Filter Popup */}
          {showFilterPopup && (
            <div className="filter-popup" ref={filterPopupRef}>
              <div className="filter-popup-header">
                <h5>See All Filters</h5>
                <button className="clear-all-btn" onClick={clearAllFilters}>Clear All</button>
              </div>
              
              <div className="filter-section">
                <h6>Category</h6>
                <div className="filter-options">
                  {['React', 'JavaScript', 'UI/UX', 'Node.js', 'Python'].map(category => (
                    <div className="filter-option" key={category}>
                      <input 
                        type="checkbox" 
                        id={`category-${category}`} 
                        checked={filters.category.includes(category)}
                        onChange={() => toggleFilter('category', category)}
                      />
                      <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-section">
                <h6>Level</h6>
                <div className="filter-options">
                  {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                    <div className="filter-option" key={level}>
                      <input 
                        type="checkbox" 
                        id={`level-${level}`} 
                        checked={filters.level.includes(level)}
                        onChange={() => toggleFilter('level', level)}
                      />
                      <label htmlFor={`level-${level}`}>{level}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-section">
                <h6>Price</h6>
                <div className="filter-options">
                  {['Free', 'Paid'].map(price => (
                    <div className="filter-option" key={price}>
                      <input 
                        type="checkbox" 
                        id={`price-${price}`} 
                        checked={filters.price.includes(price)}
                        onChange={() => toggleFilter('price', price)}
                      />
                      <label htmlFor={`price-${price}`}>{price}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-section">
                <h6>Rating</h6>
                <div className="filter-options rating-options">
                  {[4, 3, 2, 1].map(rating => (
                    <div className="filter-option" key={rating}>
                      <input 
                        type="radio" 
                        id={`rating-${rating}`} 
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => toggleFilter('rating', rating)}
                      />
                      <label htmlFor={`rating-${rating}`}>
                        {rating}+ <Icon icon="mdi:star" className="star-icon" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-popup-footer">
                <button className="apply-filter-btn" onClick={() => setShowFilterPopup(false)}>
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {courses
          .filter(course => {
            // Search term filter
            const matchesSearch = searchTerm === '' || 
              course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
              course.level.toLowerCase().includes(searchTerm.toLowerCase());
            
            // Level filter
            const matchesLevel = filters.level.length === 0 || 
              filters.level.includes(course.level);
            
            // Price filter
            const matchesPrice = filters.price.length === 0 || 
              (filters.price.includes('Free') && course.price === 'Free') ||
              (filters.price.includes('Paid') && course.price !== 'Free');
            
            // Rating filter
            const matchesRating = filters.rating === null || 
              course.rating >= filters.rating;
            
            // Category filter - assuming we'd add category to the course data
            const matchesCategory = filters.category.length === 0;
            // In a real app, you'd check: filters.category.includes(course.category)
            
            return matchesSearch && matchesLevel && matchesPrice && matchesRating && matchesCategory;
          })
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
                  <button onClick={() => navigate('/user/coursesDetails')} className={`watch-now-btn ${course.price === 'Free' ? 'free-btn' : 'paid-btn'}`}>
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
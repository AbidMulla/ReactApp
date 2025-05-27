import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './CourseRating.css';

function CourseRating() {
  const [ratings, setRatings] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [ratingText, setRatingText] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const handleAddRating = () => {
    setShowInput(true);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSaveRating = () => {
    if (selectedRating > 0) {
      const newRating = {
        id: Date.now(),
        text: ratingText,
        rating: selectedRating,
        author: 'You',
        avatar: 'https://via.placeholder.com/30',
        date: new Date().toLocaleDateString()
      };
      setRatings([...ratings, newRating]);
      setRatingText('');
      setSelectedRating(0);
      setShowInput(false);
    }
  };

  const handleCancelRating = () => {
    setRatingText('');
    setSelectedRating(0);
    setShowInput(false);
  };

  const renderStars = (rating, interactive = false) => {
    return Array.from({ length: 4 }, (_, index) => (
      <button
        key={index}
        className={`star-btn ${index < rating ? 'active' : ''}`}
        onClick={() => interactive && handleStarClick(index + 1)}
        type="button"
      >
        <Icon icon="mdi:star" width="24" height="24" />
      </button>
    ));
  };

  return (
    <div className="course-rating-container">
      <div className="rating-header">
        <button className="btn btn-primary" onClick={handleAddRating}>
          <Icon icon="mdi:plus" width="16" height="16" />
          Add Rating
        </button>
      </div>

      {showInput && (
        <div className="rating-input-container">
          <div className="rating-stars">
            {renderStars(selectedRating, true)}
          </div>
          <textarea
            className="rating-input"
            placeholder="Write your review..."
            value={ratingText}
            onChange={(e) => setRatingText(e.target.value)}
          ></textarea>
          <div className="rating-actions">
            <button className="btn btn-secondary" onClick={handleCancelRating}>
              Cancel
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleSaveRating}
              disabled={selectedRating === 0}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="ratings-list">
        {ratings.length > 0 ? (
          ratings.map(rating => (
            <div key={rating.id} className="rating-item">
              <div className="rating-item-header">
                <div className="rating-author">
                  <img src={rating.avatar} alt="avatar" className="author-avatar" />
                  {rating.author}
                </div>
                <span className="rating-date">{rating.date}</span>
              </div>
              <div className="rating-stars-display">
                {renderStars(rating.rating)}
              </div>
              {rating.text && <p className="rating-text">{rating.text}</p>}
            </div>
          ))
        ) : (
          <div className="empty-ratings">
            <p>No ratings yet. Be the first to rate this course.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseRating;
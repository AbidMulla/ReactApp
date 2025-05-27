import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './CourseComment.css';

function CourseComment() {
  const [comments, setComments] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    setShowInput(true);
  };

  const handleSaveComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
        author: 'You',
        avatar: 'https://via.placeholder.com/30',
        date: new Date().toLocaleDateString()
      };
      setComments([...comments, newComment]);
      setCommentText('');
      setShowInput(false);
    }
  };

  const handleCancelComment = () => {
    setCommentText('');
    setShowInput(false);
  };

  return (
    <div className="course-comments-container">
      <div className="comments-header">
        <button className="btn btn-primary" onClick={handleAddComment}>
          <Icon icon="mdi:plus" width="16" height="16" />
          Add Comment
        </button>
      </div>

      {showInput && (
        <div className="comment-input-container">
          <textarea
            className="comment-input"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <div className="comment-actions">
            <button className="btn btn-secondary" onClick={handleCancelComment}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSaveComment}>
              Post
            </button>
          </div>
        </div>
      )}

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <div className="comment-author">
                  <img src={comment.avatar} alt="avatar" className="author-avatar" />
                  {comment.author}
                </div>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))
        ) : (
          <div className="empty-comments">
            <p>No comments yet. Click "Add Comment" to start the discussion.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseComment;
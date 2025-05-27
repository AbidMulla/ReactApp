import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './CourseNotes.css';

function CourseNotes() {
  const [notes, setNotes] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    setShowInput(true);
  };

  const handleSaveNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
        timestamp: '00:00',
        date: new Date().toLocaleDateString()
      };
      setNotes([...notes, newNote]);
      setNoteText('');
      setShowInput(false);
    }
  };

  const handleCancelNote = () => {
    setNoteText('');
    setShowInput(false);
  };

  return (
    <div className="course-notes-container">
      <div className="notes-header">
        <button className="btn btn-primary" onClick={handleAddNote}>
          <Icon icon="mdi:plus" width="16" height="16" />
          Add Note
        </button>
      </div>

      {showInput && (
        <div className="note-input-container">
          <textarea
            className="note-input"
            placeholder="Make a Note"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <div className="note-actions">
            <button className="btn btn-secondary" onClick={handleCancelNote}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSaveNote}>
              Save
            </button>
          </div>
        </div>
      )}

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map(note => (
            <div key={note.id} className="note-item">
              <div className="note-header">
                <span className="note-timestamp">{note.timestamp}</span>
                <span className="note-date">{note.date}</span>
              </div>
              <p className="note-text">{note.text}</p>
            </div>
          ))
        ) : (
          <div className="empty-notes">
            <p>No notes yet. Click "Add Note" to create one.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseNotes;
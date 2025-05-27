import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './AccountInfo.css';

function AccountInfo() {
  const [selectedColor, setSelectedColor] = useState('#3152e8'); // Default primary color
  const [appearance, setAppearance] = useState('light'); // Default appearance
  
  const colorOptions = [
    { value: '#ffffff', name: 'White', class: 'color-white' },
    { value: '#e8d0b0', name: 'Beige', class: 'color-beige' },
    { value: '#ffd4e5', name: 'Pink', class: 'color-pink' },
    { value: '#f8d0b0', name: 'Peach', class: 'color-peach' },
    { value: '#e8b0d5', name: 'Lavender Pink', class: 'color-lavender-pink' },
    { value: '#90c4f8', name: 'Sky Blue', class: 'color-sky-blue' },
    { value: '#b0e8e0', name: 'Mint', class: 'color-mint' },
    { value: '#d0b0e8', name: 'Light Purple', class: 'color-light-purple' },
    { value: '#c0d0c0', name: 'Light Green', class: 'color-light-green' },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // Here you would typically save this preference to your backend or localStorage
    document.documentElement.style.setProperty('--primary-color', color);
  };

  const handleAppearanceChange = (mode) => {
    setAppearance(mode);
    // Here you would typically save this preference and apply the theme
  };

  return (
    <div className="account-info-container">
      <div className="section-header">
        <h3>Account Information</h3>
        <p>Manage your personal information and account details</p>
      </div>
      
      {/* Primary Color Settings */}
      <div className="settings-section">
        <h4 className="settings-title">Primary color settings</h4>
        <div className="color-options-container">
          {colorOptions.map((color) => (
            <div 
              key={color.value} 
              className={`color-option ${color.class} ${selectedColor === color.value ? 'selected' : ''}`}
              onClick={() => handleColorSelect(color.value)}
              title={color.name}
            >
              {selectedColor === color.value && (
                <Icon icon="mdi:check" className="color-selected-icon" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="settings-section">
        <h4 className="settings-title">Appearance</h4>
        <div className="appearance-options">
          <div 
            className={`appearance-option ${appearance === 'dark' ? 'selected' : ''}`}
            onClick={() => handleAppearanceChange('dark')}
          >
            <div className="appearance-preview dark-preview">
              <div className="preview-header"></div>
              <div className="preview-sidebar"></div>
              <div className="preview-content">
                <div className="preview-card"></div>
                <div className="preview-card"></div>
              </div>
            </div>
            <div className="appearance-label">Dark</div>
          </div>

          <div 
            className={`appearance-option ${appearance === 'light' ? 'selected' : ''}`}
            onClick={() => handleAppearanceChange('light')}
          >
            <div className="appearance-preview light-preview">
              <div className="preview-header"></div>
              <div className="preview-sidebar"></div>
              <div className="preview-content">
                <div className="preview-card"></div>
                <div className="preview-card"></div>
              </div>
            </div>
            <div className="appearance-label">Light</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AccountInfo;
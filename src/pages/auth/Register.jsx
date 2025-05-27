import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import countryData from '../../utils/countory.json';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const dropdownRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    letter: false,
    number: false,
    special: false,
    specialChars: {
      '@': false,
      '$': false,
      '!': false,
      '%': false,
      '*': false,
      '#': false,
      '?': false,
      '&': false
    }
  });

  useEffect(() => {
    // Filter countries based on search query
    if (searchQuery.trim() === '') {
      setFilteredCountries(countryData.countoryCode);
    } else {
      const filtered = countryData.countoryCode.filter(country => 
        country.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Initialize filtered countries
  useEffect(() => {
    setFilteredCountries(countryData.countoryCode);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Check password strength if password field is being updated
    if (name === 'password') {
      // Check for each special character individually
      const specialChars = {
        '@': value.includes('@'),
        '$': value.includes('$'),
        '!': value.includes('!'),
        '%': value.includes('%'),
        '*': value.includes('*'),
        '#': value.includes('#'),
        '?': value.includes('?'),
        '&': value.includes('&')
      };
      
      // Check if any special character is present
      const hasSpecialChar = Object.values(specialChars).some(val => val === true);
      
      setPasswordStrength({
        length: value.length >= 8,
        letter: /[a-zA-Z]/.test(value),
        number: /[0-9]/.test(value),
        special: hasSpecialChar,
        specialChars: specialChars
      });
    }
  };

  const handleCountrySelect = (code) => {
    setSelectedCountryCode(code);
    setShowCountryDropdown(false);
  };

  const validateForm = () => {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      toast.error('All fields are required', { position: "top-center" });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address', { position: "top-center" });
      return false;
    }

    // Validate phone number (simple validation)
    const phoneRegex = /^\d{6,14}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid phone number', { position: "top-center" });
      return false;
    }

    // Check password strength
    if (!passwordStrength.length || !passwordStrength.letter || !passwordStrength.number || !passwordStrength.special) {
      toast.error('Password does not meet the requirements', { position: "top-center" });
      return false;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', { position: "top-center" });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        toast.success('Registration successful!', { position: "top-center" });
        
        // Redirect after 3 seconds
        setTimeout(() => {
          navigate('/auth/login');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <div className="register-logo">
        <img src={logo} alt="LMS Logo" width={230} />
      </div>
      
      <div className="register-card">
        <div className="register-header">
          <h2>Create an Account</h2>
          <p>Fill in your details to get started</p>
        </div>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-with-icon">
              <Icon icon="mdi:account-outline" className="input-icon" />
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Icon icon="mdi:email-outline" className="input-icon" />
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com" 
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input-container d-flex align-items-center">
              <div className="country-code-selector" ref={dropdownRef}>
                <button 
                  type="button" 
                  className="country-code-button" 
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  {selectedCountryCode}
                  <Icon icon="mdi:chevron-down" />
                </button>
                
                {showCountryDropdown && (
                  <div className="country-dropdown">
                    <div className="country-search">
                      <Icon icon="mdi:magnify" className="search-icon" />
                      <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="country-list">
                      {filteredCountries.map((country, index) => (
                        <div 
                          key={index} 
                          className="country-item" 
                          onClick={() => handleCountrySelect(country.code)}
                        >
                          <span>{country.country}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="phone-input-field">
                <Icon icon="mdi:phone-outline" className="input-icon" />
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number" 
                  className="form-input"
                />
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Icon icon="mdi:lock-outline" className="input-icon" />
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••" 
                className="form-input"
              />
              <button 
                type="button" 
                className="show-password-btn" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
              </button>
            </div>
            
            <div className="password-requirements">
              <div className={`requirement ${passwordStrength.length ? 'met' : ''}`}>
                <Icon icon={passwordStrength.length ? "mdi:check-circle" : "mdi:circle-outline"} />
                <span>8 characters</span>
              </div>
              <div className={`requirement ${passwordStrength.letter ? 'met' : ''}`}>
                <Icon icon={passwordStrength.letter ? "mdi:check-circle" : "mdi:circle-outline"} />
                <span>1 letter</span>
              </div>
              <div className={`requirement ${passwordStrength.number ? 'met' : ''}`}>
                <Icon icon={passwordStrength.number ? "mdi:check-circle" : "mdi:circle-outline"} />
                <span>1 number</span>
              </div>
              <div className={`requirement ${passwordStrength.special ? 'met' : ''}`}>
                <Icon icon={passwordStrength.special ? "mdi:check-circle" : "mdi:circle-outline"} />
                <span>
                  <span className={passwordStrength.specialChars['@'] ? 'special-char-active' : ''}>@</span>{' '}
                  <span className={passwordStrength.specialChars['$'] ? 'special-char-active' : ''}>$</span>{' '}
                  <span className={passwordStrength.specialChars['!'] ? 'special-char-active' : ''}>!</span>{' '}
                  <span className={passwordStrength.specialChars['%'] ? 'special-char-active' : ''}>%</span>{' '}
                  <span className={passwordStrength.specialChars['*'] ? 'special-char-active' : ''}>*</span>{' '}
                  <span className={passwordStrength.specialChars['#'] ? 'special-char-active' : ''}>#</span>{' '}
                  <span className={passwordStrength.specialChars['?'] ? 'special-char-active' : ''}>?</span>{' '}
                  <span className={passwordStrength.specialChars['&'] ? 'special-char-active' : ''}>&amp;</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-with-icon">
              <Icon icon="mdi:lock-check-outline" className="input-icon" />
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••" 
                className="form-input"
              />
              <button 
                type="button" 
                className="show-password-btn" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                <Icon icon={showConfirmPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon icon="mdi:loading" className="loading-icon" />
                Creating Account...
              </>
            ) : (
              'Register'
            )}
          </button>
          
          <div className="account-options">
            <p>Already have an account? <a href="/auth/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
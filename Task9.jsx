import React, { useContext } from 'react';
import { FormContext } from './App';

// ==========================================
// NESTED COMPONENT 1: Header & Theme Toggle
// ==========================================
export default function Component1() {
  const { theme, toggleTheme } = useContext(FormContext);

  return (
    <div className="component-card component-1">
      <div className="component-header">
        <div>
          <h3>Component 1 (Header Wrapper)</h3>
          <p className="theme-status">Current Theme: <strong>{theme.toUpperCase()}</strong></p>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      
      <hr className="divider" />
      {/* Rendering Component 2 with absolutely no props passed */}
      <Component2 />
    </div>
  );
}

// ==========================================
// NESTED COMPONENT 2: The 10-Field Form
// ==========================================
function Component2() {
  const { formData, handleInputChange } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted successfully! Check Component 3 for live evaluation.');
  };

  return (
    <div className="component-card component-2">
      <h3>Component 2 (Form Registration Component)</h3>
      
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Registration Data</button>
      </form>

      {/* Rendering Component 3 with absolutely no props passed */}
      <Component3 />
    </div>
  );
}

// ==========================================
// NESTED COMPONENT 3: Live Preview Component
// ==========================================
function Component3() {
  const { formData } = useContext(FormContext);

  return (
    <div className="component-card component-3">
      <h4>Component 3 (Live Data Context Mirror)</h4>
      <p className="mirror-desc">
        This nested layout reads directly from the top-level App context state, entirely bypassing prop drilling.
      </p>
      
      <div className="preview-grid">
        <div><strong>Full Name:</strong> {formData.firstName || '—'} {formData.lastName || '—'}</div>
        <div><strong>Email:</strong> {formData.email || '—'}</div>
        <div><strong>Mobile:</strong> {formData.mobileNumber || '—'}</div>
        <div><strong>DOB:</strong> {formData.dob || '—'}</div>
        <div><strong>Gender:</strong> {formData.gender || '—'}</div>
        <div><strong>Location:</strong> {formData.address ? `${formData.address}, ${formData.city}` : '—'}</div>
      </div>
    </div>
  );
}
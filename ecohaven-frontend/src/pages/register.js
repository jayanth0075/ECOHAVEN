import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../services/api';
import '../styles/auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.username || form.username.length < 2) {
      newErrors.username = 'Username must be at least 2 characters';
    }

    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.password || form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!form.acceptTerms) {
      newErrors.terms = 'Please accept the terms and conditions';
    }

    return newErrors;
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setForm(prev => ({ ...prev, password: newPassword }));
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const submit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await api.post('/accounts/register/', {
        username: form.username,
        email: form.email,
        password: form.password
      });

      // store tokens
      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);
      
      api.setAuthToken(res.data.access);

      navigate('/feed');
    } catch (err) {
      setErrors({
        submit: 'Unable to register. Try different username/email.'
      });
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength >= 75) return '#059669';
    if (passwordStrength >= 50) return '#0EA5E9';
    if (passwordStrength >= 25) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-header">
          <div className="auth-logo">
            🌿
          </div>
          <h1>Join EcoHaven</h1>
          <p>Create your account and start your eco-friendly journey</p>
        </div>

        <div className="auth-form">
          <form onSubmit={submit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-input"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Choose a username"
              />
              {errors.username && <div className="error-message">⚠️ {errors.username}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
              />
              {errors.email && <div className="error-message">⚠️ {errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={form.password}
                onChange={handlePasswordChange}
                placeholder="Create a strong password"
              />
              {form.password && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div
                      className="strength-fill"
                      style={{
                        width: `${passwordStrength}%`,
                        backgroundColor: getPasswordStrengthColor()
                      }}
                    />
                  </div>
                  <div className="strength-text" style={{ color: getPasswordStrengthColor() }}>
                    Password strength: {passwordStrength >= 75 ? 'Strong' : passwordStrength >= 50 ? 'Good' : passwordStrength >= 25 ? 'Fair' : 'Weak'}
                  </div>
                </div>
              )}
              {errors.password && <div className="error-message">⚠️ {errors.password}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <div className="error-message">⚠️ {errors.confirmPassword}</div>
              )}
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                className="checkbox-input"
                checked={form.acceptTerms}
                onChange={(e) => setForm({ ...form, acceptTerms: e.target.checked })}
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
            {errors.terms && <div className="error-message">⚠️ {errors.terms}</div>}

            {errors.submit && <div className="error-message">⚠️ {errors.submit}</div>}

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            <div className="auth-footer">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="auth-link">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

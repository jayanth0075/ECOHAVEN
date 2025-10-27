import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState({});
    const [formData, setFormData] = useState({
      login: { email: '', password: '', rememberMe: false },
      signup: { name: '', email: '', password: '', confirmPassword: '', acceptTerms: false }
    });
    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: [] });
    const [showPasswords, setShowPasswords] = useState({});

  // Inline styles
  const styles = {
    container: {
      background: '#ffffff',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      width: '100%',
      maxWidth: '450px',
      overflow: 'hidden',
      position: 'relative',
      margin: '20px auto',
    },
    header: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      padding: '40px 30px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    },
    logo: {
      width: '60px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      backdropFilter: 'blur(10px)',
    },
    formContainer: {
      padding: '40px 30px',
    },
    tabs: {
      display: 'flex',
      background: '#f7fafc',
      borderRadius: '12px',
      padding: '4px',
      marginBottom: '30px',
      position: 'relative',
    },
    tab: {
      flex: 1,
      padding: '12px 20px',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: '#718096',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRadius: '8px',
      position: 'relative',
      zIndex: 2,
      border: 'none',
      background: 'transparent',
    },
    tabActive: {
      color: '#667eea',
      background: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '24px',
      position: 'relative',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      fontSize: '14px',
      color: '#2d3748',
    },
    inputWrapper: {
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      background: '#ffffff',
      color: '#2d3748',
      boxSizing: 'border-box',
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
      transform: 'translateY(-1px)',
    },
    inputError: {
      borderColor: '#f56565',
      background: 'rgba(245, 101, 101, 0.05)',
    },
    inputSuccess: {
      borderColor: '#48bb78',
      background: 'rgba(72, 187, 120, 0.05)',
    },
    inputIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#718096',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      fontSize: '16px',
    },
    errorMessage: {
      color: '#f56565',
      fontSize: '12px',
      marginTop: '6px',
      display: 'block',
    },
    passwordStrength: {
      marginTop: '8px',
    },
    strengthBar: {
      height: '4px',
      background: '#e2e8f0',
      borderRadius: '2px',
      overflow: 'hidden',
      marginBottom: '8px',
    },
    strengthFill: {
      height: '100%',
      transition: 'all 0.3s ease',
      borderRadius: '2px',
    },
    strengthText: {
      fontSize: '12px',
      fontWeight: '500',
    },
    checkboxWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px',
    },
    customCheckbox: {
      position: 'relative',
      width: '20px',
      height: '20px',
    },
    checkboxInput: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    },
    checkmark: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '20px',
      height: '20px',
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
    },
    checkmarkChecked: {
      background: '#667eea',
      borderColor: '#667eea',
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#718096',
      cursor: 'pointer',
      lineHeight: '1.4',
    },
    btn: {
      width: '100%',
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #667eea, #5a67d8)',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    btnDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    btnGoogle: {
      background: 'white',
      color: '#2d3748',
      border: '2px solid #e2e8f0',
      marginBottom: '16px',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '30px 0',
      color: '#718096',
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: '#e2e8f0',
    },
    dividerText: {
      padding: '0 20px',
      fontSize: '14px',
      fontWeight: '500',
      background: 'white',
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '20px',
    },
    forgotPasswordLink: {
      color: '#667eea',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
    },
    successScreen: {
      padding: '40px 30px',
      textAlign: 'center',
    },
    successIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #48bb78, #38a169)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      fontSize: '32px',
      color: 'white',
    },
    userInfo: {
      background: '#f7fafc',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px',
    },
    infoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
    },
    infoLabel: {
      fontWeight: '500',
      color: '#718096',
    },
    infoValue: {
      fontWeight: '600',
      color: '#2d3748',
    },
    spinner: {
      width: '20px',
      height: '20px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s ease-in-out infinite',
    },
    googleIcon: {
      width: '20px',
      height: '20px',
    },
  };

  // Initialize component
  useEffect(() => {
    loadUsersFromStorage();
    checkRememberedUser();
  }, []);

  // Load users from localStorage
  const loadUsersFromStorage = () => {
    try {
      const storedUsers = localStorage.getItem('authSystem_users');
      const defaultUsers = [{
        id: 1,
        name: 'Demo User',
        email: 'demo@example.com',
        password: 'demo123',
        accountType: 'Standard',
        createdAt: '2023-01-01T00:00:00Z',
        lastLogin: '2024-01-01T12:00:00Z'
      }];
      setUsers(storedUsers ? JSON.parse(storedUsers) : defaultUsers);
    } catch (error) {
      console.error('Error loading users from storage:', error);
      setUsers([]);
    }
  };

  // Save users to localStorage
  const saveUsersToStorage = useCallback((updatedUsers) => {
    try {
      localStorage.setItem('authSystem_users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error saving users to storage:', error);
    }
  }, []);

  // Check for remembered user
  const checkRememberedUser = () => {
    try {
      const rememberedUser = localStorage.getItem('rememberedUser');
      if (rememberedUser) {
        const userData = JSON.parse(rememberedUser);
        const timeDiff = Date.now() - userData.rememberTime;
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;

        if (timeDiff < thirtyDays) {
          setFormData(prev => ({
            ...prev,
            login: { ...prev.login, email: userData.email, rememberMe: true }
          }));
        } else {
          localStorage.removeItem('rememberedUser');
        }
      }
    } catch (error) {
      console.error('Error checking remembered user:', error);
    }
  };

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    let score = 0;
    const feedback = [];

    if (password.length >= 8) score += 25;
    else feedback.push('at least 8 characters');

    if (/[a-z]/.test(password)) score += 25;
    else feedback.push('lowercase letters');

    if (/[A-Z]/.test(password)) score += 25;
    else feedback.push('uppercase letters');

    if (/\d/.test(password)) score += 25;
    else feedback.push('numbers');

    if (/[^A-Za-z0-9]/.test(password)) score += 10;
    else feedback.push('special characters');

    // Penalty for common patterns
    if (/(.)\1{2,}/.test(password)) score -= 10;
    if (/123|abc|qwe/i.test(password)) score -= 15;

    return { score: Math.max(0, Math.min(100, score)), feedback };
  };

  // Form validation
  const validateField = (fieldName, value, formType = currentForm) => {
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        break;
      case 'password':
        if (value.length < 6) {
          isValid = false;
          errorMessage = 'Password must be at least 6 characters long';
        }
        break;
      case 'name':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'Name must be at least 2 characters long';
        }
        break;
      case 'confirmPassword':
        const originalPassword = formData.signup.password;
        if (value !== originalPassword) {
          isValid = false;
          errorMessage = 'Passwords do not match';
        }
        break;
      default:
        break;
    }

    return { isValid, errorMessage };
  };

  // Handle input changes
  const handleInputChange = (formType, fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [formType]: { ...prev[formType], [fieldName]: value }
    }));

    // Clear error when user starts typing
    if (errors[`${formType}-${fieldName}`]) {
      setErrors(prev => ({ ...prev, [`${formType}-${fieldName}`]: '' }));
    }

    // Calculate password strength for signup password
    if (formType === 'signup' && fieldName === 'password') {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  // Handle form submission
  const handleSubmit = async (e, formType) => {
    e.preventDefault();

    const data = formData[formType];
    let hasErrors = false;
    const newErrors = {};

    // Validate all fields
    Object.keys(data).forEach(fieldName => {
      if (fieldName !== 'rememberMe' && fieldName !== 'acceptTerms') {
        const { isValid, errorMessage } = validateField(fieldName, data[fieldName], formType);
        if (!isValid) {
          newErrors[`${formType}-${fieldName}`] = errorMessage;
          hasErrors = true;
        }
      }
    });

    // Additional validations
    if (formType === 'signup' && !data.acceptTerms) {
      newErrors['signup-acceptTerms'] = 'Please accept the terms and conditions';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      showNotification('Please fix the errors above', 'error');
      return;
    }

    // Set loading state
    setLoading(prev => ({ ...prev, [formType]: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

      if (formType === 'login') {
        // Handle login
        const user = users.find(u => u.email === data.email && u.password === data.password);

        if (user) {
          setCurrentUser(user);

          if (data.rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify({
              email: user.email,
              rememberTime: Date.now()
            }));
          }

          // Update last login
          const updatedUsers = users.map(u =>
            u.id === user.id ? { ...u, lastLogin: new Date().toISOString() } : u
          );
          saveUsersToStorage(updatedUsers);

          setShowSuccess(true);
          showNotification('Login successful!', 'success');
        } else {
          throw new Error('Invalid email or password');
        }
      } else {
        // Handle signup
        if (users.some(u => u.email === data.email)) {
          throw new Error('An account with this email already exists');
        }

        const newUser = {
          id: Date.now(),
          name: data.name,
          email: data.email,
          password: data.password,
          accountType: 'Standard',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };

        const updatedUsers = [...users, newUser];
        saveUsersToStorage(updatedUsers);
        setCurrentUser(newUser);
        setShowSuccess(true);
        showNotification('Account created successfully!', 'success');
      }
    } catch (error) {
      showNotification(error.message, 'error');
    } finally {
      setLoading(prev => ({ ...prev, [formType]: false }));
    }
  };

  // Handle Google authentication
  const handleGoogleAuth = async (type) => {
    setLoading(prev => ({ ...prev, [`google-${type}`]: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockGoogleUser = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        accountType: 'Google',
        createdAt: type === 'signup' ? new Date().toISOString() : '2023-01-15T10:30:00Z',
        lastLogin: new Date().toISOString()
      };

      if (type === 'signup') {
        const updatedUsers = [...users, mockGoogleUser];
        saveUsersToStorage(updatedUsers);
      }

      setCurrentUser(mockGoogleUser);
      setShowSuccess(true);
      showNotification(`Google ${type} successful!`, 'success');
    } catch (error) {
      showNotification('Google authentication failed', 'error');
    } finally {
      setLoading(prev => ({ ...prev, [`google-${type}`]: false }));
    }
  };

  // Password visibility toggle
  const togglePasswordVisibility = (fieldId) => {
    setShowPasswords(prev => ({ ...prev, [fieldId]: !prev[fieldId] }));
  };

  // Notification system
  const showNotification = (message, type) => {
    console.log(`${type.toUpperCase()}: ${message}`);
    // You can integrate with react-toastify or other notification libraries here
    alert(`${type.toUpperCase()}: ${message}`);
  };

  // Switch between login and signup
  const switchTab = (tabName) => {
    setCurrentForm(tabName);
    setErrors({});
    setPasswordStrength({ score: 0, feedback: [] });
  };

  // Reset to login form
  const resetToLogin = () => {
    setShowSuccess(false);
    setCurrentUser(null);
    setCurrentForm('login');
    setFormData({
      login: { email: '', password: '', rememberMe: false },
      signup: { name: '', email: '', password: '', confirmPassword: '', acceptTerms: false }
    });
    setErrors({});
    setPasswordStrength({ score: 0, feedback: [] });
  };

  // Format date utility
  const formatDate = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;

    return new Date(date).toLocaleDateString();
  };

  // Get password strength details
  const getPasswordStrengthDetails = () => {
    const { score } = passwordStrength;
    let strengthLevel = 'weak';
    let color = '#f56565';
    let text = 'Weak';

    if (score >= 80) {
      strengthLevel = 'strong';
      color = '#38a169';
      text = 'Strong';
    } else if (score >= 60) {
      strengthLevel = 'good';
      color = '#48bb78';
      text = 'Good';
    } else if (score >= 30) {
      strengthLevel = 'fair';
      color = '#ed8936';
      text = 'Fair';
    }

    return { strengthLevel, color, text, score };
  };

  // Get combined input styles
  const getInputStyles = (formType, fieldName) => {
    const baseStyles = { ...styles.input };
    const hasError = errors[`${formType}-${fieldName}`];

    if (hasError) {
      return { ...baseStyles, ...styles.inputError };
    }

    return baseStyles;
  };

  // Spinner component
  const Spinner = () => (
    <div style={{
      width: '20px',
      height: '20px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s ease-in-out infinite'
    }}></div>
  );

  if (showSuccess && currentUser) {
    // Password strength details are not used in the current view

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>
            🛡️
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>SecureAuth</h1>
          <p style={{ opacity: '0.9', fontSize: '16px', fontWeight: '400' }}>Secure authentication for modern applications</p>
        </div>

        <div style={styles.successScreen}>
          <div style={styles.successIcon}>
            ✓
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d3748', marginBottom: '12px' }}>Welcome Back!</h2>
          <p style={{ color: '#718096', fontSize: '16px', lineHeight: '1.5', marginBottom: '30px' }}>You have successfully logged into your account. Redirecting you to dashboard...</p>

          <div style={styles.userInfo}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Name:</span>
              <span style={styles.infoValue}>{currentUser.name}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Email:</span>
              <span style={styles.infoValue}>{currentUser.email}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Account Type:</span>
              <span style={styles.infoValue}>{currentUser.accountType}</span>
            </div>
            <div style={{ ...styles.infoRow, marginBottom: '0' }}>
              <span style={styles.infoLabel}>Last Login:</span>
              <span style={styles.infoValue}>{formatDate(currentUser.lastLogin)}</span>
            </div>
          </div>

          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={resetToLogin}>
            Continue to Dashboard
            <span style={{ marginLeft: '8px' }}>→</span>
          </button>
        </div>
      </div>
    );
  }

  const { color, text, score } = getPasswordStrengthDetails();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>
          🛡️
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>SecureAuth</h1>
        <p style={{ opacity: '0.9', fontSize: '16px', fontWeight: '400' }}>Secure authentication for modern applications</p>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              ...(currentForm === 'login' ? styles.tabActive : {})
            }}
            onClick={() => switchTab('login')}
          >
            Sign In
          </button>
          <button
            style={{
              ...styles.tab,
              ...(currentForm === 'signup' ? styles.tabActive : {})
            }}
            onClick={() => switchTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {currentForm === 'login' && (
          <form onSubmit={(e) => handleSubmit(e, 'login')}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="login-email">Email Address</label>
              <div style={styles.inputWrapper}>
                <input
                  type="email"
                  id="login-email"
                  style={getInputStyles('login', 'email')}
                  value={formData.login.email}
                  onChange={(e) => handleInputChange('login', 'email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <span style={styles.inputIcon}>✉️</span>
              </div>
              {errors['login-email'] && (
                <div style={styles.errorMessage}>
                  {errors['login-email']}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="login-password">Password</label>
              <div style={styles.inputWrapper}>
                <input
                  type={showPasswords['login-password'] ? 'text' : 'password'}
                  id="login-password"
                  style={getInputStyles('login', 'password')}
                  value={formData.login.password}
                  onChange={(e) => handleInputChange('login', 'password', e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <span
                  style={styles.inputIcon}
                  onClick={() => togglePasswordVisibility('login-password')}
                >
                  {showPasswords['login-password'] ? '🙈' : '👁️'}
                </span>
              </div>
              {errors['login-password'] && (
                <div style={styles.errorMessage}>
                  {errors['login-password']}
                </div>
              )}
            </div>

            <div style={styles.checkboxWrapper}>
              <div style={styles.customCheckbox}>
                <input
                  type="checkbox"
                  id="remember-me"
                  style={styles.checkboxInput}
                  checked={formData.login.rememberMe}
                  onChange={(e) => handleInputChange('login', 'rememberMe', e.target.checked)}
                />
                <span
                  style={{
                    ...styles.checkmark,
                    ...(formData.login.rememberMe ? styles.checkmarkChecked : {})
                  }}
                >
                  {formData.login.rememberMe && <span style={{ position: 'absolute', left: '6px', top: '2px', color: 'white', fontSize: '12px' }}>✓</span>}
                </span>
              </div>
              <label style={styles.checkboxLabel} htmlFor="remember-me">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...(loading.login ? styles.btnDisabled : {})
              }}
              disabled={loading.login}
            >
              {loading.login ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>or continue with</span>
              <div style={styles.dividerLine}></div>
            </div>

            <button
              type="button"
              style={{
                ...styles.btn,
                ...styles.btnGoogle,
                ...(loading['google-login'] ? styles.btnDisabled : {})
              }}
              onClick={() => handleGoogleAuth('login')}
              disabled={loading['google-login']}
            >
              {loading['google-login'] ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                <>
                  <span style={{ fontSize: '18px' }}>🔍</span>
                  Continue with Google
                </>
              )}
            </button>

            <div style={styles.forgotPassword}>
              <button
                type="button"
                style={styles.forgotPasswordLink}
                onClick={() => {
                  const email = prompt('Please enter your email address:');
                  if (email) {
                    showNotification('Password reset link sent to your email!', 'success');
                  }
                }}
              >
                Forgot your password?
              </button>
            </div>
          </form>
        )}

        {/* Signup Form */}
        {currentForm === 'signup' && (
          <form onSubmit={(e) => handleSubmit(e, 'signup')}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="signup-name">Full Name</label>
              <div style={styles.inputWrapper}>
                <input
                  type="text"
                  id="signup-name"
                  style={getInputStyles('signup', 'name')}
                  value={formData.signup.name}
                  onChange={(e) => handleInputChange('signup', 'name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
                <span style={styles.inputIcon}>👤</span>
              </div>
              {errors['signup-name'] && (
                <div style={styles.errorMessage}>
                  {errors['signup-name']}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="signup-email">Email Address</label>
              <div style={styles.inputWrapper}>
                <input
                  type="email"
                  id="signup-email"
                  style={getInputStyles('signup', 'email')}
                  value={formData.signup.email}
                  onChange={(e) => handleInputChange('signup', 'email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <span style={styles.inputIcon}>✉️</span>
              </div>
              {errors['signup-email'] && (
                <div style={styles.errorMessage}>
                  {errors['signup-email']}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="signup-password">Password</label>
              <div style={styles.inputWrapper}>
                <input
                  type={showPasswords['signup-password'] ? 'text' : 'password'}
                  id="signup-password"
                  style={getInputStyles('signup', 'password')}
                  value={formData.signup.password}
                  onChange={(e) => handleInputChange('signup', 'password', e.target.value)}
                  placeholder="Create a strong password"
                  required
                />
                <span
                  style={styles.inputIcon}
                  onClick={() => togglePasswordVisibility('signup-password')}
                >
                  {showPasswords['signup-password'] ? '🙈' : '👁️'}
                </span>
              </div>
              {errors['signup-password'] && (
                <div style={styles.errorMessage}>
                  {errors['signup-password']}
                </div>
              )}
              {formData.signup.password && (
                <div style={styles.passwordStrength}>
                  <div style={styles.strengthBar}>
                    <div
                      style={{
                        ...styles.strengthFill,
                        width: `${score}%`,
                        background: color
                      }}
                    ></div>
                  </div>
                  <div style={{ ...styles.strengthText, color }}>
                    Password strength: {text}
                  </div>
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirm-password">Confirm Password</label>
              <div style={styles.inputWrapper}>
                <input
                  type={showPasswords['confirm-password'] ? 'text' : 'password'}
                  id="confirm-password"
                  style={getInputStyles('signup', 'confirmPassword')}
                  value={formData.signup.confirmPassword}
                  onChange={(e) => handleInputChange('signup', 'confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
                <span
                  style={styles.inputIcon}
                  onClick={() => togglePasswordVisibility('confirm-password')}
                >
                  {showPasswords['confirm-password'] ? '🙈' : '👁️'}
                </span>
              </div>
              {errors['signup-confirmPassword'] && (
                <div style={styles.errorMessage}>
                  {errors['signup-confirmPassword']}
                </div>
              )}
            </div>

            <div style={styles.checkboxWrapper}>
              <div style={styles.customCheckbox}>
                <input
                  type="checkbox"
                  id="accept-terms"
                  style={styles.checkboxInput}
                  checked={formData.signup.acceptTerms}
                  onChange={(e) => handleInputChange('signup', 'acceptTerms', e.target.checked)}
                  required
                />
                <span
                  style={{
                    ...styles.checkmark,
                    ...(formData.signup.acceptTerms ? styles.checkmarkChecked : {})
                  }}
                >
                  {formData.signup.acceptTerms && <span style={{ position: 'absolute', left: '6px', top: '2px', color: 'white', fontSize: '12px' }}>✓</span>}
                </span>
              </div>
              <label style={styles.checkboxLabel} htmlFor="accept-terms">
                I agree to the <Link to="/terms" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</Link>
              </label>
            </div>
            {errors['signup-acceptTerms'] && (
              <div style={styles.errorMessage}>
                {errors['signup-acceptTerms']}
              </div>
            )}

            <button
              type="submit"
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...(loading.signup ? styles.btnDisabled : {})
              }}
              disabled={loading.signup}
            >
              {loading.signup ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>or sign up with</span>
              <div style={styles.dividerLine}></div>
            </div>

            <button
              type="button"
              style={{
                ...styles.btn,
                ...styles.btnGoogle,
                ...(loading['google-signup'] ? styles.btnDisabled : {})
              }}
              onClick={() => handleGoogleAuth('signup')}
              disabled={loading['google-signup']}
            >
              {loading['google-signup'] ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                <>
                  <span style={{ fontSize: '18px' }}>🔍</span>
                  Continue with Google
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
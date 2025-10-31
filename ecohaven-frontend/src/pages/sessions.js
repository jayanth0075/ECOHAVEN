import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Star, Calendar, CheckCircle, Zap } from 'lucide-react';
import '../styles/sessions.css';

const Sessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingSessions = [
    {
      id: 1,
      title: 'Zero Waste Living 101',
      instructor: 'Jayanth',
      date: 'Oct 30, 2025',
      time: '7:00 PM',
      duration: '2 hours',
      level: 'Beginner',
      category: 'Lifestyle',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 42,
      capacity: 50,
      tags: ['#zerowaste', '#sustainable', '#lifestyle'],
      description: 'Learn practical tips to reduce waste in your daily life and start living sustainably.'
    },
    {
      id: 2,
      title: 'Urban Gardening Masterclass',
      instructor: 'Divij',
      date: 'Nov 2, 2025',
      time: '6:00 PM',
      duration: '2.5 hours',
      level: 'Intermediate',
      category: 'Gardening',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 87,
      capacity: 100,
      tags: ['#gardening', '#urban', '#growing'],
      description: 'Master the art of growing vegetables and herbs in small spaces.'
    },
    {
      id: 3,
      title: 'Solar Panel Installation',
      instructor: 'Dr. Alex Chen',
      date: 'Nov 5, 2025',
      time: '8:00 PM',
      duration: '3 hours',
      level: 'Advanced',
      category: 'Renewable Energy',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 342,
      capacity: 500,
      tags: ['#solar', '#renewable', '#energy'],
      description: 'Complete guide to installing and maintaining solar panels for your home.'
    },
    {
      id: 4,
      title: 'Sustainable Fashion Workshop',
      instructor: 'Jessica Mindful',
      date: 'Nov 8, 2025',
      time: '5:30 PM',
      duration: '1.5 hours',
      level: 'Beginner',
      category: 'Fashion',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 38,
      capacity: 40,
      tags: ['#fashion', '#sustainable', '#eco'],
      description: 'Discover how to build a sustainable and stylish wardrobe.'
    },
    {
      id: 5,
      title: 'Composting 101',
      instructor: 'David Green',
      date: 'Nov 10, 2025',
      time: '7:00 PM',
      duration: '1.5 hours',
      level: 'Beginner',
      category: 'Waste Management',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 45,
      capacity: 60,
      tags: ['#composting', '#organic', '#waste'],
      description: 'Turn your kitchen scraps into black gold with our composting guide.'
    },
    {
      id: 6,
      title: 'Ocean Conservation 101',
      instructor: 'Dr. Lisa Ocean',
      date: 'Nov 12, 2025',
      time: '6:30 PM',
      duration: '2 hours',
      level: 'All Levels',
      category: 'Conservation',
      platform: 'Google Meet',
      meetLink: 'https://meet.google.com/yki-nncz-awh',
      registered: 756,
      capacity: 1000,
      tags: ['#ocean', '#conservation', '#marine'],
      description: 'Learn about marine ecosystems and how you can help protect our oceans.'
    }
  ];

  const pastSessions = [
    {
      id: 101,
      title: 'Plastic-Free Shopping Tips',
      instructor: 'Laasya',
      date: 'Oct 25, 2025',
      attendees: 234,
      rating: 4.8,
      tags: ['#shopping', '#plastic-free', '#sustainable'],
      description: 'Expert tips on shopping without creating plastic waste.',
      reviews: 156
    },
    {
      id: 102,
      title: 'Carbon Footprint Calculation',
      instructor: 'Tom Adventure',
      date: 'Oct 20, 2025',
      attendees: 456,
      rating: 4.7,
      tags: ['#carbon', '#footprint', '#climate'],
      description: 'Calculate and reduce your personal carbon footprint.',
      reviews: 289
    },
    {
      id: 103,
      title: 'Community Action Building',
      instructor: 'Sophia Vegan',
      date: 'Oct 15, 2025',
      attendees: 567,
      rating: 4.9,
      tags: ['#community', '#action', '#impact'],
      description: 'Learn to organize and lead environmental action in your community.',
      reviews: 312
    }
  ];

  const filteredUpcoming = upcomingSessions.filter(session =>
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPast = pastSessions.filter(session =>
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCapacityColor = (registered, capacity) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return '#ef4444';
    if (percentage >= 70) return '#f97316';
    return '#10b981';
  };

  return (
    <div className="sessions-enhanced">
      {/* Header */}
      <motion.div
        className="sessions-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="header-content">
          <h1>🌱 Learning Sessions</h1>
          <p>Educational workshops on sustainability and eco-living</p>
        </div>
      </motion.div>

      <div className="sessions-container">
        {/* Search Bar */}
        <motion.div
          className="sessions-search"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Search sessions, instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="sessions-tabs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <button
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            📅 Upcoming Sessions
          </button>
          <button
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            ✅ Past Sessions
          </button>
        </motion.div>

        {/* Sessions Grid */}
        <div className="sessions-grid">
          {activeTab === 'upcoming' && filteredUpcoming.map((session, idx) => (
            <motion.div
              key={session.id}
              className="session-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Status Badge */}
              <div className="session-badges">
                {session.registered >= session.capacity * 0.9 && (
                  <motion.span className="badge badge-urgent">
                    <Zap size={14} /> Almost Full
                  </motion.span>
                )}
                <span className="badge badge-level">{session.level}</span>
              </div>

              {/* Session Header */}
              <div className="session-header-content">
                <h3>{session.title}</h3>
                <p className="instructor">👨‍🏫 {session.instructor}</p>
              </div>

              {/* Description */}
              <p className="session-description">{session.description}</p>

              {/* Session Details */}
              <div className="session-details">
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>{session.date}</span>
                </div>
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{session.time}</span>
                </div>
                <div className="detail-item">
                  <MapPin size={16} />
                  <span>{session.platform}</span>
                </div>
                <div className="detail-item">
                  <Users size={16} />
                  <span>{session.category}</span>
                </div>
              </div>

              {/* Capacity Bar */}
              <div className="capacity-section">
                <div className="capacity-label">
                  <span>Registered</span>
                  <span>{session.registered}/{session.capacity}</span>
                </div>
                <div className="capacity-bar">
                  <motion.div
                    className="capacity-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${(session.registered / session.capacity) * 100}%` }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                      background: getCapacityColor(session.registered, session.capacity)
                    }}
                  />
                </div>
                <span className="capacity-text">
                  {session.capacity - session.registered} spots available
                </span>
              </div>

              {/* Tags */}
              <div className="session-tags">
                {session.tags.map((tag, i) => (
                  <a key={i} href={`?search=${tag}`} className="tag">
                    {tag}
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="session-actions">
                <motion.button
                  className="btn-register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
                <motion.a
                  href={session.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-join-meeting"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎥 Join Meeting
                </motion.a>
              </div>
            </motion.div>
          ))}

          {activeTab === 'past' && filteredPast.map((session, idx) => (
            <motion.div
              key={session.id}
              className="session-card past-session"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Status Badge */}
              <div className="session-badges">
                <span className="badge badge-completed">
                  <CheckCircle size={14} /> Completed
                </span>
              </div>

              {/* Session Header */}
              <div className="session-header-content">
                <h3>{session.title}</h3>
                <p className="instructor">👨‍🏫 {session.instructor}</p>
              </div>

              {/* Description */}
              <p className="session-description">{session.description}</p>

              {/* Session Info */}
              <div className="past-session-info">
                <div className="info-item">
                  <span className="label">Held on</span>
                  <span className="value">{session.date}</span>
                </div>
                <div className="info-item">
                  <span className="label">Attendees</span>
                  <span className="value">{session.attendees} people</span>
                </div>
              </div>

              {/* Rating */}
              <div className="session-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(session.rating) ? '#fbbf24' : '#d1d5db'}
                      color={i < Math.floor(session.rating) ? '#fbbf24' : '#d1d5db'}
                    />
                  ))}
                  <span className="rating-value">{session.rating}</span>
                </div>
                <span className="review-count">({session.reviews} reviews)</span>
              </div>

              {/* Tags */}
              <div className="session-tags">
                {session.tags.map((tag, i) => (
                  <a key={i} href={`?search=${tag}`} className="tag">
                    {tag}
                  </a>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                className="btn-watch"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Recording
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Why Join Our Sessions?</h2>
          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              whileHover={{ y: -5 }}
            >
              <div className="benefit-icon">🎓</div>
              <h3>Learn from Experts</h3>
              <p>Get insights from environmental leaders and sustainability experts.</p>
            </motion.div>
            <motion.div
              className="benefit-card"
              whileHover={{ y: -5 }}
            >
              <div className="benefit-icon">🤝</div>
              <h3>Connect with Others</h3>
              <p>Network with like-minded individuals passionate about sustainability.</p>
            </motion.div>
            <motion.div
              className="benefit-card"
              whileHover={{ y: -5 }}
            >
              <div className="benefit-icon">🏆</div>
              <h3>Earn Certificates</h3>
              <p>Complete sessions and earn certificates to showcase your knowledge.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sessions;
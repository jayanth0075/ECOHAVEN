import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Award, TrendingUp, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/landing.css';

const Landing = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="landing-page">
      {/* Hero Section - Premium Design */}
      <section className="hero-section hero-premium">
        {/* Animated Background Elements */}
        <div className="hero-background">
          {/* Gradient Orbs */}
          <motion.div
            className="gradient-orb gradient-orb-1"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="gradient-orb gradient-orb-2"
            animate={{
              x: [0, -60, 0],
              y: [0, -60, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="gradient-orb gradient-orb-3"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
          
          {/* Grid Pattern */}
          <div className="grid-pattern" />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="hero-content hero-content-premium">
          {/* Left Side - Text */}
          <motion.div
            className="hero-text-side"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>🌍 Trusted by 10K+ Eco-Warriors</span>
            </motion.div>

            <motion.h1
              className="hero-title-premium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="title-main">Build a</span>
              <span className="title-highlight">Sustainable Future</span>
              <span className="title-main">Together</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join millions of eco-conscious individuals making real impact on climate change. Share sustainable practices, earn eco-points, and connect with a global green community.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="hero-features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="feature-item">
                <Leaf size={20} />
                <span>Earn Eco-Points</span>
              </div>
              <div className="feature-item">
                <Users size={20} />
                <span>Join Community</span>
              </div>
              <div className="feature-item">
                <Globe size={20} />
                <span>Track Impact</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="btn-wrapper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="btn btn-primary btn-premium">
                  Start Your Journey
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                className="btn-wrapper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/login" className="btn btn-secondary btn-premium">
                  Sign In
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="hero-social-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="proof-item">
                <span className="proof-number">50K+</span>
                <span className="proof-label">Posts Shared</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <span className="proof-number">500+</span>
                <span className="proof-label">Challenges</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-item">
                <span className="proof-number">10K+</span>
                <span className="proof-label">Members</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            className="hero-visual-side"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-visual-container">
              {/* Main Decorative Card */}
              <motion.div
                className="visual-card visual-card-main"
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [-2, 2, -2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="card-content">
                  <div className="card-icon icon-1">🌱</div>
                  <h3>Eco-Friendly Living</h3>
                  <p>Tips & Tricks</p>
                </div>
              </motion.div>

              {/* Secondary Cards */}
              <motion.div
                className="visual-card visual-card-secondary"
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [3, -3, 3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="card-content">
                  <div className="card-icon icon-2">🌍</div>
                  <h3>Global Impact</h3>
                  <p>Join Challenges</p>
                </div>
              </motion.div>

              <motion.div
                className="visual-card visual-card-tertiary"
                animate={{
                  y: [0, -18, 0],
                  rotateZ: [-2, 2, -2],
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="card-content">
                  <div className="card-icon icon-3">♻️</div>
                  <h3>Track Progress</h3>
                  <p>Earn Eco-Score</p>
                </div>
              </motion.div>

              {/* Floating Emojis */}
              <motion.div
                className="floating-emoji emoji-1"
                animate={{ y: [-30, 30, -30], x: [-20, 20, -20], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'sine' }}
              >
                🌿
              </motion.div>
              <motion.div
                className="floating-emoji emoji-2"
                animate={{ y: [20, -20, 20], x: [20, -20, 20], rotate: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'sine', delay: 1 }}
              >
                🌳
              </motion.div>
              <motion.div
                className="floating-emoji emoji-3"
                animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'sine', delay: 2 }}
              >
                🌞
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose EcoHaven?
          </motion.h2>
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}
            >
              <div className="feature-icon">
                <Leaf size={40} />
              </div>
              <h3>Community Feed</h3>
              <p>Share your eco-friendly tips, news, and ideas with a passionate community of environmentalists and sustainability advocates.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
            >
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3>Green Challenges</h3>
              <p>Participate in exciting sustainability challenges, earn eco-points, and track your environmental impact with our scoring system.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            >
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Community Sessions</h3>
              <p>Join interactive sessions on renewable energy, waste reduction, sustainable agriculture, and environmental conservation.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}
            >
              <div className="feature-icon">
                <TrendingUp size={40} />
              </div>
              <h3>Track Progress</h3>
              <p>Monitor your eco-score and see how your sustainable choices contribute to a healthier planet.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How EcoHaven Works
          </motion.h2>
          <motion.div
            className="steps-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and join our eco-conscious community</p>
            </motion.div>

            <motion.div
              className="step-arrow"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-number">2</div>
              <h3>Explore & Share</h3>
              <p>Discover tips and share your sustainability journey</p>
            </motion.div>

            <motion.div
              className="step-arrow"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              →
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-number">3</div>
              <h3>Join Challenges</h3>
              <p>Participate in green challenges and earn eco-points</p>
            </motion.div>

            <motion.div
              className="step-arrow"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              →
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-number">4</div>
              <h3>Make Impact</h3>
              <p>Track your progress and help save the planet</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)' }}
            >
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Members</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
            >
              <div className="stat-number">500+</div>
              <div className="stat-label">Green Challenges</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            >
              <div className="stat-number">50K+</div>
              <div className="stat-label">Posts Shared</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)' }}
            >
              <div className="stat-number">100%</div>
              <div className="stat-label">Carbon Offset</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About EcoHaven
          </motion.h2>
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                EcoHaven is a revolutionary platform designed to empower individuals and communities 
                to take meaningful action against climate change and environmental degradation. 
                We believe that collective action, driven by awareness and passion, can create 
                sustainable change.
              </p>
              <p>
                Our mission is to provide a space where eco-warriors, sustainability enthusiasts, 
                and environmental advocates can connect, collaborate, and contribute to a greener future.
              </p>
              <p>
                From reducing carbon footprints to supporting renewable energy initiatives, 
                EcoHaven brings people together around shared environmental values.
              </p>
            </motion.div>
            <motion.div
              className="about-highlights"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="highlight"
                variants={itemVariants}
                whileHover={{ scale: 1.1, x: 10 }}
              >
                <Leaf size={24} />
                <span>Eco-Friendly</span>
              </motion.div>
              <motion.div
                className="highlight"
                variants={itemVariants}
                whileHover={{ scale: 1.1, x: 10 }}
              >
                <Users size={24} />
                <span>Community-Driven</span>
              </motion.div>
              <motion.div
                className="highlight"
                variants={itemVariants}
                whileHover={{ scale: 1.1, x: 10 }}
              >
                <Award size={24} />
                <span>Impact-Focused</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated on Green Living Tips</h2>
            <p>Get sustainability insights delivered to your inbox</p>
            <motion.form
              className="newsletter-form"
              onSubmit={handleNewsletterSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                whileFocus={{ scale: 1.05 }}
              />
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Make a Difference?</h2>
            <p>Join thousands of eco-conscious individuals working towards a sustainable future</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register" className="btn btn-primary btn-large">
                Start Your Eco-Journey Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="footer-section"
              whileHover={{ y: -5 }}
            >
              <h4>EcoHaven</h4>
              <p>Building a sustainable future, one action at a time.</p>
            </motion.div>
            <motion.div
              className="footer-section"
              whileHover={{ y: -5 }}
            >
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </motion.div>
            <motion.div
              className="footer-section"
              whileHover={{ y: -5 }}
            >
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><Mail size={16} /> info@ecohaven.com</p>
                <p><Phone size={16} /> +1 (555) 123-4567</p>
                <p><MapPin size={16} /> Earth 🌍</p>
              </div>
            </motion.div>
            <motion.div
              className="footer-section"
              whileHover={{ y: -5 }}
            >
              <h4>Follow Us</h4>
              <div className="social-links">
                <motion.a
                  href="https://facebook.com/ecohaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                >
                  Facebook
                </motion.a>
                <motion.a
                  href="https://twitter.com/ecohaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                >
                  Twitter
                </motion.a>
                <motion.a
                  href="https://instagram.com/ecohaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                >
                  Instagram
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 EcoHaven. All rights reserved. 🌱 Together for a greener planet.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;


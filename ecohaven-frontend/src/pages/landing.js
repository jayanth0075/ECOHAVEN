import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Award, TrendingUp, Mail, MapPin, Phone, ArrowRight, Zap, Globe, Heart } from 'lucide-react';
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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <motion.div
            className="gradient-orb gradient-orb-1"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="gradient-orb gradient-orb-2"
            animate={{
              x: [0, -50, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              🌱 EcoHaven
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Join the Green Revolution
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build a Sustainable Future Together - Connect with a passionate community of eco-warriors, 
              share sustainable practices, and make a real impact on our planet.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/register" className="btn btn-primary">
                  Get Started Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="btn btn-secondary">
                  Sign In
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="hero-image">
            <motion.div
              className="floating-shapes"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="shape shape-1"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                🌍
              </motion.div>
              <motion.div
                className="shape shape-2"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🌿
              </motion.div>
              <motion.div
                className="shape shape-3"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                ♻️
              </motion.div>
            </motion.div>
          </div>
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
              <motion.div
                className="feature-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Leaf size={40} />
              </motion.div>
              <h3>Community Feed</h3>
              <p>Share your eco-friendly tips, news, and ideas with a passionate community of environmentalists and sustainability advocates.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
            >
              <motion.div
                className="feature-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              >
                <Award size={40} />
              </motion.div>
              <h3>Green Challenges</h3>
              <p>Participate in exciting sustainability challenges, earn eco-points, and track your environmental impact with our scoring system.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            >
              <motion.div
                className="feature-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 1 }}
              >
                <Users size={40} />
              </motion.div>
              <h3>Community Sessions</h3>
              <p>Join interactive sessions on renewable energy, waste reduction, sustainable agriculture, and environmental conservation.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}
            >
              <motion.div
                className="feature-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 1.5 }}
              >
                <TrendingUp size={40} />
              </motion.div>
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
              <motion.div
                className="step-number"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                1
              </motion.div>
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
              <motion.div
                className="step-number"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              >
                2
              </motion.div>
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
              <motion.div
                className="step-number"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 1 }}
              >
                3
              </motion.div>
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
              <motion.div
                className="step-number"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 1.5 }}
              >
                4
              </motion.div>
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
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                viewport={{ once: true }}
              >
                10K+
              </motion.div>
              <div className="stat-label">Active Members</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
            >
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <div className="stat-label">Green Challenges</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            >
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                viewport={{ once: true }}
              >
                50K+
              </motion.div>
              <div className="stat-label">Posts Shared</div>
            </motion.div>

            <motion.div
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)' }}
            >
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
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


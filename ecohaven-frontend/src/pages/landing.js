import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Award, TrendingUp, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/landing.css';

const Landing = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              🌱 EcoHaven
            </h1>
            <p className="hero-subtitle">
              Join the Green Revolution - Build a Sustainable Future Together
            </p>
            <p className="hero-description">
              EcoHaven is a community-driven platform dedicated to promoting eco-friendly practices, 
              sustainable living, and environmental awareness. Connect with like-minded individuals, 
              share eco-tips, participate in green challenges, and make a real difference for our planet.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-shapes">
              <div className="shape shape-1">🌍</div>
              <div className="shape shape-2">🌿</div>
              <div className="shape shape-3">♻️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose EcoHaven?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Leaf size={40} />
              </div>
              <h3>Community Feed</h3>
              <p>Share your eco-friendly tips, news, and ideas with a passionate community of environmentalists and sustainability advocates.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3>Green Challenges</h3>
              <p>Participate in exciting sustainability challenges, earn eco-points, and track your environmental impact with our scoring system.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Community Sessions</h3>
              <p>Join interactive sessions on renewable energy, waste reduction, sustainable agriculture, and environmental conservation.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={40} />
              </div>
              <h3>Track Progress</h3>
              <p>Monitor your eco-score and see how your sustainable choices contribute to a healthier planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How EcoHaven Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and join our eco-conscious community</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Explore & Share</h3>
              <p>Discover tips and share your sustainability journey</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Join Challenges</h3>
              <p>Participate in green challenges and earn eco-points</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Make Impact</h3>
              <p>Track your progress and help save the planet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Green Challenges</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Posts Shared</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Carbon Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About EcoHaven</h2>
          <div className="about-content">
            <div className="about-text">
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
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <Leaf size={24} />
                <span>Eco-Friendly</span>
              </div>
              <div className="highlight">
                <Users size={24} />
                <span>Community-Driven</span>
              </div>
              <div className="highlight">
                <Award size={24} />
                <span>Impact-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Updated on Green Living Tips</h2>
          <p>Get sustainability insights delivered to your inbox</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of eco-conscious individuals working towards a sustainable future</p>
          <Link to="/register" className="btn btn-primary btn-large">
            Start Your Eco-Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>EcoHaven</h4>
              <p>Building a sustainable future, one action at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><Mail size={16} /> info@ecohaven.com</p>
                <p><Phone size={16} /> +1 (555) 123-4567</p>
                <p><MapPin size={16} /> Earth 🌍</p>
              </div>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com/ecohaven" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                <a href="https://twitter.com/ecohaven" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                <a href="https://instagram.com/ecohaven" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EcoHaven. All rights reserved. 🌱 Together for a greener planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;


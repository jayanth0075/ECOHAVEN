import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Target, Award, Heart, Globe } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: 'Environmental Impact',
      description: 'Track and reduce your carbon footprint with personalized insights and actionable recommendations.'
    },
    {
      icon: <Users size={40} />,
      title: 'Community Driven',
      description: 'Join thousands of eco-warriors sharing tips, challenges, and sustainable living practices.'
    },
    {
      icon: <Target size={40} />,
      title: 'Goal Setting',
      description: 'Set environmental goals, participate in challenges, and earn badges for your achievements.'
    },
    {
      icon: <Award size={40} />,
      title: 'Rewards System',
      description: 'Earn wellness points and eco scores as you make sustainable choices and help the planet.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '50,000+', label: 'Trees Planted' },
    { number: '2M kg', label: 'CO₂ Reduced' },
    { number: '150+', label: 'Communities' }
  ];

  const team = [
    {
      name: 'Team EcoHaven',
      role: 'Full Stack Development',
      description: 'Building sustainable solutions for a better tomorrow.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="gradient-text">EcoHaven</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Empowering individuals to make sustainable choices and create a positive environmental impact
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-icon">
              <Globe size={60} className="globe-icon" />
            </div>
            <h2>Our Mission</h2>
            <p className="mission-text">
              EcoHaven is dedicated to creating a sustainable future by connecting environmentally conscious 
              individuals and providing them with tools to track, reduce, and offset their carbon footprint. 
              We believe that small actions, when multiplied by millions of people, can transform the world.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <Heart className="value-icon" />
                <h3>Compassion</h3>
                <p>Care for our planet and future generations</p>
              </div>
              <div className="value-item">
                <Users className="value-icon" />
                <h3>Community</h3>
                <p>Together we achieve more</p>
              </div>
              <div className="value-item">
                <Target className="value-icon" />
                <h3>Action</h3>
                <p>Turn awareness into meaningful change</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="team-avatar">
                  <Users size={50} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Make a Difference?</h2>
          <p>Join our community and start your journey towards sustainable living today</p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">Get Started</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

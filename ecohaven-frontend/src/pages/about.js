import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Heart, Globe, Zap, TrendingUp, CheckCircle, Lightbulb, Award } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: 'Carbon Footprint Tracker',
      description: 'Real-time tracking of your environmental impact with AI-powered personalized recommendations.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Smart Challenges',
      description: 'Participate in daily, weekly, and monthly eco-challenges designed to build sustainable habits.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Progress Dashboard',
      description: 'Beautiful visualizations showing your impact, achievements, and community contributions.'
    },
    {
      icon: <Award size={40} />,
      title: 'Rewards & Badges',
      description: 'Earn eco-points, unlock badges, and redeem rewards with partner eco-friendly brands.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Eco-Warriors', emoji: '🌍' },
    { number: '2M+', label: 'Trees Planted', emoji: '🌳' },
    { number: '10M kg', label: 'CO₂ Reduced', emoji: '💨' },
    { number: '500+', label: 'Eco Communities', emoji: '👥' }
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Environmental Care',
      description: 'Deep commitment to protecting our planet for future generations'
    },
    {
      icon: <Users size={32} />,
      title: 'Community First',
      description: 'Together we create exponential positive environmental impact'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Leveraging technology to make sustainability accessible to all'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Accountability',
      description: 'Transparent tracking and verified impact for all our users'
    }
  ];

  const team = [
    {
      name: 'EcoHaven Team',
      role: 'Full Stack Development',
      description: 'Dedicated to building the future of sustainable living through innovative technology.'
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
        <div className="hero-particles">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-title"
          >
            About <span className="gradient-text">EcoHaven</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
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
            <motion.div 
              className="mission-icon"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe size={60} className="globe-icon" />
            </motion.div>
            <h2>Our Mission</h2>
            <p className="mission-text">
              EcoHaven is dedicated to creating a sustainable future by connecting environmentally conscious 
              individuals and providing them with tools to track, reduce, and offset their carbon footprint. 
              We believe that small actions, when multiplied by millions of people, can transform the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Core Values
          </motion.h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title white-title"
          >
            What We Offer
          </motion.h2>
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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Impact So Far
          </motion.h2>
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
                <div className="stat-emoji">{stat.emoji}</div>
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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Meet Our Team
          </motion.h2>
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
          <motion.h2
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <p>Join our community and start your journey towards sustainable living today</p>
          <div className="cta-buttons">
            <motion.a 
              href="/register" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a 
              href="/contact" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

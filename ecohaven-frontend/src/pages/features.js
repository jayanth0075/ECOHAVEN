import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Award, Users, TrendingUp, Target, 
  Leaf, MessageCircle, Calendar, BarChart3, 
  CheckCircle, Zap, Shield 
} from 'lucide-react';
import '../styles/features.css';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Activity size={50} />,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor your daily carbon emissions from transportation, energy use, food consumption, and more.',
      benefits: [
        'Real-time tracking dashboard',
        'Detailed analytics and insights',
        'Historical data comparison',
        'Personalized recommendations'
      ]
    },
    {
      icon: <Target size={50} />,
      title: 'Environmental Challenges',
      description: 'Participate in community challenges to reduce your environmental impact and earn rewards.',
      benefits: [
        'Weekly and monthly challenges',
        'Difficulty levels for all users',
        'Team competitions',
        'Achievement badges'
      ]
    },
    {
      icon: <Users size={50} />,
      title: 'Community Feed',
      description: 'Connect with like-minded individuals, share tips, and inspire others on their sustainability journey.',
      benefits: [
        'Share eco-friendly tips',
        'Post photos and updates',
        'Like and comment on posts',
        'Follow inspiring users'
      ]
    },
    {
      icon: <TrendingUp size={50} />,
      title: 'Eco Score System',
      description: 'Track your progress with our comprehensive scoring system that rewards sustainable choices.',
      benefits: [
        'Dynamic score calculation',
        'Level up system',
        'Leaderboards',
        'Monthly rankings'
      ]
    },
    {
      icon: <Award size={50} />,
      title: 'Badges & Rewards',
      description: 'Earn badges and wellness points for completing challenges and achieving sustainability milestones.',
      benefits: [
        'Collectible achievement badges',
        'Wellness points currency',
        'Exclusive rewards',
        'Streak bonuses'
      ]
    },
    {
      icon: <Calendar size={50} />,
      title: 'Educational Sessions',
      description: 'Join live and recorded sessions on sustainability, climate action, and eco-friendly living.',
      benefits: [
        'Expert-led workshops',
        'Interactive webinars',
        'Resource library',
        'Q&A sessions'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 size={30} />,
      title: 'Advanced Analytics',
      description: 'Visualize your environmental impact with detailed charts and graphs'
    },
    {
      icon: <MessageCircle size={30} />,
      title: 'Direct Messaging',
      description: 'Connect privately with community members and eco-mentors'
    },
    {
      icon: <Zap size={30} />,
      title: 'Quick Actions',
      description: 'Log eco-friendly activities instantly with one-tap shortcuts'
    },
    {
      icon: <Shield size={30} />,
      title: 'Privacy First',
      description: 'Your data is secure with enterprise-grade encryption'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up for free and complete your environmental profile to get personalized recommendations.'
    },
    {
      step: '02',
      title: 'Track Your Impact',
      description: 'Log your daily activities and watch your carbon footprint metrics in real-time.'
    },
    {
      step: '03',
      title: 'Join Challenges',
      description: 'Participate in community challenges and compete with friends to reduce environmental impact.'
    },
    {
      step: '04',
      title: 'Earn Rewards',
      description: 'Collect badges, earn wellness points, and level up your eco score as you make sustainable choices.'
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <motion.section 
        className="features-hero"
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
            Powerful <span className="gradient-text">Features</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Everything you need to track, reduce, and offset your carbon footprint
          </motion.p>
        </div>
      </motion.section>

      {/* Main Features Section */}
      <section className="main-features-section">
        <div className="container">
          <div className="features-grid">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card-large"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="feature-icon-large">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i}>
                      <CheckCircle size={18} className="check-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How It Works</h2>
            <p>Get started in four simple steps</p>
          </motion.div>
          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="additional-features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>And Much More...</h2>
            <p>Discover additional features that make EcoHaven special</p>
          </motion.div>
          <div className="additional-features-grid">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card-small"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon-small">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Leaf size={60} className="cta-icon" />
          <h2>Ready to Start Your Sustainability Journey?</h2>
          <p>Join thousands of users making a positive impact on the environment</p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">Get Started Free</a>
            <a href="/about" className="btn btn-secondary">Learn More</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;

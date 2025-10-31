import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Award, Zap, Target, Flame, Globe } from 'lucide-react';
import '../styles/challenges.css';

const challenges = [
  {
    id: 'c1',
    title: 'Plastic Free 7-Day Challenge',
    subtitle: 'Reduce single-use plastics for a week',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=500&fit=crop',
    difficulty: 'Easy',
    points: 50,
    icon: Zap,
    color: '#10b981'
  },
  {
    id: 'c2',
    title: 'Plant 10 Trees',
    subtitle: 'Community tree-planting initiative',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop',
    difficulty: 'Medium',
    points: 150,
    icon: Leaf,
    color: '#0891b2'
  },
  {
    id: 'c3',
    title: 'Zero-Waste Month',
    subtitle: 'Adopt habits that create zero waste',
    img: 'https://images.unsplash.com/photo-1506086679522-9b5fb2d5e5b6?w=800&h=500&fit=crop',
    difficulty: 'Hard',
    points: 300,
    icon: Target,
    color: '#f97316'
  },
  {
    id: 'c4',
    title: 'Bike-to-Work Week',
    subtitle: 'Replace car commutes with cycling',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=500&fit=crop',
    difficulty: 'Easy',
    points: 75,
    icon: Flame,
    color: '#06b6d4'
  },
  {
    id: 'c5',
    title: 'Community Cleanup Day',
    subtitle: 'Organize or join a local cleanup',
    img: 'https://images.unsplash.com/photo-1520975917554-3d6f1f9f56af?w=800&h=500&fit=crop',
    difficulty: 'Medium',
    points: 120,
    icon: Globe,
    color: '#8b5cf6'
  }
];

const ecoBrands = [
  {
    id: 'b1',
    name: 'EcoBottles Co',
    product: 'Bamboo Water Bottle',
    discount: '20% OFF',
    pointsRequired: 100,
    img: 'https://images.unsplash.com/photo-1602142905217-56b4b02d5b4c?w=300&h=200&fit=crop'
  },
  {
    id: 'b2',
    name: 'GreenThread Fashion',
    product: 'Organic Cotton T-Shirt',
    discount: '25% OFF',
    pointsRequired: 150,
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop'
  },
  {
    id: 'b3',
    name: 'Solar Tech Innovations',
    product: 'Solar Power Bank',
    discount: '30% OFF',
    pointsRequired: 200,
    img: 'https://images.unsplash.com/photo-1609042231627-d83fee9e62da?w=300&h=200&fit=crop'
  },
  {
    id: 'b4',
    name: 'Pure Earth Cosmetics',
    product: 'Eco Shampoo Bar',
    discount: '15% OFF',
    pointsRequired: 80,
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=200&fit=crop'
  },
  {
    id: 'b5',
    name: 'BioBag Industries',
    product: 'Compostable Bags (50 pack)',
    discount: '35% OFF',
    pointsRequired: 250,
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=200&fit=crop'
  },
  {
    id: 'b6',
    name: 'Eco Furniture Labs',
    product: 'Bamboo Desk Organizer',
    discount: '18% OFF',
    pointsRequired: 120,
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop'
  }
];

const ecoBrandRedirects = [
  {
    id: 'ecoearth',
    name: 'Eco Earth',
    description: 'Get discounts on sustainable products!',
    icon: '🌍'
  },
  {
    id: 'greenify',
    name: 'Greenify',
    description: 'Transform your lifestyle with green alternatives!',
    icon: '🌱'
  },
  {
    id: 'naturenest',
    name: 'Nature Nest',
    description: 'Nest in nature, live sustainably!',
    icon: '🌲'
  },
  {
    id: 'renewlife',
    name: 'Renew Life',
    description: 'Renew yourself with clean, healthy living!',
    icon: '💚'
  }
];

export default function Challenges(){
  const navigate = useNavigate();
  const [completedChallenges, setCompletedChallenges] = useState(new Set());
  const totalPoints = Array.from(completedChallenges).reduce((sum, id) => {
    const challenge = challenges.find(c => c.id === id);
    return sum + (challenge?.points || 0);
  }, 0);

  const handleCompleteChallenge = (id) => {
    const newCompleted = new Set(completedChallenges);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedChallenges(newCompleted);
  };

  const canRedeem = (pointsRequired) => totalPoints >= pointsRequired;

  return (
    <div className="challenges-page">
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Hero Section with Points */}
      <motion.section 
        className="hero-section"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.2, duration:0.6 }}
          >
            � Eco Challenges & Rewards
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4, duration:0.6 }}
          >
            Complete eco-challenges, earn green points, unlock amazing discounts from sustainable brands
          </motion.p>
        </div>

        <motion.div 
          className="points-card-hero"
          whileHover={{ scale: 1.08, rotateZ: 2 }}
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ delay:0.3, type:'spring', stiffness:100 }}
        >
          <motion.div 
            className="points-glow"
            animate={{ scale:[1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration:3 }}
          />
          <Leaf size={48} className="points-leaf-icon" />
          <div className="points-text">
            <span className="points-label">Total Green Points</span>
            <motion.div 
              className="points-value"
              key={totalPoints}
              initial={{ scale:0.5 }}
              animate={{ scale:1 }}
            >
              {totalPoints}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Monthly Progress Section */}
      <motion.section 
        className="monthly-progress-section"
        initial={{ opacity:0, y:30 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.8 }}
      >
        <motion.div 
          className="progress-container"
          whileHover={{ boxShadow: '0 25px 70px rgba(16, 185, 129, 0.15)' }}
        >
          {/* Left Side - Stats */}
          <div className="progress-left">
            <div className="progress-header">
              <div className="progress-header-icon">📊</div>
              <h2>Monthly Progress</h2>
            </div>

            <div className="stats-row">
              <motion.div 
                className="stat-box"
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay:0.2 }}
                whileHover={{ scale:1.05 }}
              >
                <div className="stat-label">Challenges Completed</div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <div className="stat-box-icon">✓</div>
                  <div className="stat-value">7</div>
                </div>
              </motion.div>

              <motion.div 
                className="stat-box"
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay:0.3 }}
                whileHover={{ scale:1.05 }}
              >
                <div className="stat-label">Total Points Earned</div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <div className="stat-box-icon">🌿</div>
                  <div className="stat-value">625</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="progress-summary"
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:0.4 }}
            >
              <p className="summary-title">🎯 Keep it up!</p>
              <p className="summary-text">You're making incredible progress this month. Keep completing challenges!</p>
            </motion.div>
          </div>

          {/* Right Side - Circular Progress */}
          <div className="progress-right">
            <div className="circular-progress-wrapper">
              <svg className="circular-progress-svg" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
                
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  className="circular-progress-bg"
                />
                
                {/* Progress circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  className="circular-progress-fill"
                  strokeDasharray="395.83 565.48"
                  initial={{ strokeDasharray: `0 565.48` }}
                  whileInView={{ strokeDasharray: `395.83 565.48` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                />
              </svg>

              <div className="circular-progress-text">
                <motion.div 
                  className="progress-percentage"
                  initial={{ opacity:0 }}
                  whileInView={{ opacity:1 }}
                  viewport={{ once:true }}
                  transition={{ delay:0.7, duration:0.6 }}
                >
                  70%
                </motion.div>
                <div className="progress-label-small">Complete</div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity:0, scale:0.8 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }}
              transition={{ delay:0.6 }}
              style={{ width:'100%' }}
            >
              <motion.div 
                animate={{ scale:[1, 1.05, 1] }}
                transition={{ duration:2, repeat:Infinity, delay:1 }}
              >
                <div className="progress-summary" style={{ margin:0 }}>
                  <p className="summary-title">🌱 Growth Target</p>
                  <p className="summary-text">Aim for 100% to unlock exclusive rewards!</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Eco Brands Redirect Section */}
      <section className="eco-brands-redirect-section">
        <motion.div 
          className="redirect-section-header"
          initial={{ opacity:0, x:-20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >
          <Leaf size={32} className="header-icon" style={{ color:'#f97316' }} />
          <div>
            <h2>🎁 Explore Partner Brands</h2>
            <p>Redeem your points at our premium eco-friendly partner brands</p>
          </div>
        </motion.div>

        <motion.div className="eco-brands-grid">
          {ecoBrandRedirects.map((brand, i) => (
            <motion.div
              key={brand.id}
              className="brand-redirect-card"
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y:-12 }}
            >
              {/* Brand Header */}
              <div className="brand-card-header">
                <motion.div 
                  className="brand-icon-large"
                  animate={{ rotate:360 }}
                  transition={{ duration:20, repeat:Infinity, ease:'linear' }}
                >
                  {brand.icon}
                </motion.div>
              </div>

              {/* Brand Content */}
              <div className="brand-card-content">
                <h3 className="brand-card-name">{brand.name}</h3>
                <p className="brand-card-description">{brand.description}</p>

                <motion.button
                  className="redirect-btn"
                  onClick={() => navigate(`/brands/${brand.id}`)}
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
                >
                  <span>Redeem Points at {brand.name}</span>
                  <motion.span
                    animate={{ x:[0, 5, 0] }}
                    transition={{ duration:1.5, repeat:Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Challenges Grid Section */}
      <section className="challenges-grid-section">
        <motion.div 
          className="section-header"
          initial={{ opacity:0, x:-20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >
          <Target size={32} className="header-icon" />
          <div>
            <h2>🎯 Live Challenges</h2>
            <p>Complete these eco-missions to earn points</p>
          </div>
        </motion.div>

        <motion.div className="challenges-grid">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.id}
                className={`challenge-card-new ${completedChallenges.has(c.id) ? 'is-completed' : ''}`}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y:-8 }}
              >
                {/* Image with Overlay */}
                <div className="card-image-wrapper">
                  <img src={c.img} alt={c.title} className="card-image" />
                  <div className="card-overlay" />
                  
                  {completedChallenges.has(c.id) && (
                    <motion.div 
                      className="completion-check"
                      initial={{ scale:0 }}
                      animate={{ scale:1 }}
                      transition={{ type:'spring', stiffness:200 }}
                    >
                      <span>✓</span>
                    </motion.div>
                  )}

                  {/* Icon Badge */}
                  <div className="icon-badge" style={{ backgroundColor: c.color }}>
                    <Icon size={28} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="challenge-header">
                    <h3>{c.title}</h3>
                    <span className={`difficulty-badge ${c.difficulty.toLowerCase()}`}>
                      {c.difficulty}
                    </span>
                  </div>
                  <p className="challenge-description">{c.subtitle}</p>

                  {/* Footer */}
                  <div className="card-footer">
                    <motion.div 
                      className="points-display"
                      animate={{ scale: completedChallenges.has(c.id) ? [1, 1.2, 1] : 1 }}
                      transition={{ duration:0.4 }}
                    >
                      <Leaf size={16} />
                      <span>+{c.points} pts</span>
                    </motion.div>
                    <motion.button
                      className={`challenge-btn ${completedChallenges.has(c.id) ? 'completed' : ''}`}
                      onClick={() => handleCompleteChallenge(c.id)}
                      whileHover={{ scale:1.05 }}
                      whileTap={{ scale:0.95 }}
                    >
                      {completedChallenges.has(c.id) ? '✓ Completed' : 'Complete'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Rewards Marketplace */}
      <section className="rewards-grid-section">
        <motion.div 
          className="section-header"
          initial={{ opacity:0, x:-20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
        >
          <Award size={32} className="header-icon" style={{ color:'#f97316' }} />
          <div>
            <h2>💚 Rewards Marketplace</h2>
            <p>Redeem your green points for exclusive eco-friendly products</p>
          </div>
        </motion.div>

        <motion.div className="brands-grid-new">
          {ecoBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              className={`brand-card-new ${canRedeem(brand.pointsRequired) ? 'unlocked' : 'locked'}`}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.1 }}
              whileHover={canRedeem(brand.pointsRequired) ? { y:-8, rotateZ:1 } : {}}
            >
              {/* Brand Image */}
              <div className="brand-image-wrapper">
                <img src={brand.img} alt={brand.name} className="brand-image" />
                
                {/* Lock/Unlock Icon */}
                <motion.div 
                  className={`lock-icon ${canRedeem(brand.pointsRequired) ? 'unlocked' : ''}`}
                  animate={{ rotate: canRedeem(brand.pointsRequired) ? 360 : 0 }}
                  transition={{ duration:0.5 }}
                >
                  {canRedeem(brand.pointsRequired) ? '🔓' : '🔒'}
                </motion.div>

                {/* Discount Badge */}
                <motion.div 
                  className="discount-badge-new"
                  initial={{ opacity:0, scale:0.5 }}
                  animate={{ opacity:1, scale:1 }}
                  transition={{ delay:0.2 }}
                >
                  {brand.discount}
                </motion.div>
              </div>

              {/* Brand Content */}
              <div className="brand-content">
                <h4 className="brand-title">{brand.name}</h4>
                <p className="brand-product">{brand.product}</p>

                <div className="brand-divider" />

                <div className="brand-footer-new">
                  <div className="points-required">
                    <Award size={16} />
                    <span>{brand.pointsRequired} pts</span>
                  </div>
                  <motion.button
                    className={`redeem-btn-new ${canRedeem(brand.pointsRequired) ? 'active' : 'disabled'}`}
                    disabled={!canRedeem(brand.pointsRequired)}
                    whileHover={canRedeem(brand.pointsRequired) ? { scale:1.08 } : {}}
                    whileTap={canRedeem(brand.pointsRequired) ? { scale:0.92 } : {}}
                  >
                    {canRedeem(brand.pointsRequired) ? 'Redeem Now' : 'Locked'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

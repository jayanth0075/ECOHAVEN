import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Star, Gift, CheckCircle } from 'lucide-react';
import '../styles/brand.css';

const brandData = {
  ecoearth: {
    name: 'Eco Earth',
    tagline: 'Get discounts on sustainable products!',
    description: 'Shop premium eco-friendly products and save the planet with every purchase.',
    discount: '20% OFF',
    color: '#10b981',
    icon: '🌍',
    products: [
      'Bamboo Utensil Sets',
      'Organic Cotton Clothing',
      'Reusable Water Bottles',
      'Eco-Friendly Sunscreen'
    ],
    benefits: [
      'Free shipping on orders over $50',
      'Loyalty rewards program',
      'Carbon-neutral delivery',
      'Lifetime warranty on quality issues'
    ]
  },
  greenify: {
    name: 'Greenify',
    tagline: 'Transform your lifestyle with green alternatives!',
    description: 'Discover innovative green alternatives for everyday products.',
    discount: '25% OFF',
    color: '#059669',
    icon: '🌱',
    products: [
      'Plant-Based Plastics',
      'Solar Gadgets',
      'Natural Supplements',
      'Eco Packaging Solutions'
    ],
    benefits: [
      'Plant one tree with every purchase',
      'Monthly eco-tips newsletter',
      'Member-only sales events',
      'Zero-waste packaging guarantee'
    ]
  },
  naturenest: {
    name: 'Nature Nest',
    tagline: 'Nest in nature, live sustainably!',
    description: 'Create your perfect sustainable home with our curated collection.',
    discount: '30% OFF',
    color: '#0891b2',
    icon: '🌲',
    products: [
      'Sustainable Home Decor',
      'Bamboo Furniture',
      'Natural Fiber Textiles',
      'Indoor Plants & Seeds'
    ],
    benefits: [
      'Interior design consultation',
      'Bulk order discounts',
      'Trade-in program for old items',
      'Community gardening events'
    ]
  },
  renewlife: {
    name: 'Renew Life',
    tagline: 'Renew yourself with clean, healthy living!',
    description: 'Your complete wellness solution with 100% natural and organic products.',
    discount: '28% OFF',
    color: '#8b5cf6',
    icon: '💚',
    products: [
      'Organic Beauty Products',
      'Wellness Supplements',
      'Eco Yoga Gear',
      'Natural Home Cleaning'
    ],
    benefits: [
      'Personalized wellness plans',
      'Monthly subscription box',
      'Health coaching sessions',
      'Community wellness challenges'
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function Brand() {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      const normalizedId = brandId?.toLowerCase();
      const brandInfo = brandData[normalizedId];
      
      if (brandInfo) {
        setBrand(brandInfo);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [brandId]);

  if (isLoading) {
    return (
      <div className="brand-page-loading">
        <motion.div 
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Leaf size={48} />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading brand details...
        </motion.p>
      </div>
    );
  }

  if (!brand) {
    return (
      <motion.div 
        className="brand-page-error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="error-content"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <h1>Brand Not Found</h1>
          <p>Sorry, we couldn't find that brand.</p>
          <motion.button
            className="back-btn"
            onClick={() => navigate('/challenges')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} /> Back to Challenges
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="brand-page">
      {/* Animated Background */}
      <div className="brand-bg-gradient" style={{ 
        background: `linear-gradient(135deg, ${brand.color}15, ${brand.color}08)` 
      }} />
      
      {/* Floating Particles */}
      <motion.div 
        className="particle particle-1"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundColor: brand.color }}
      />
      <motion.div 
        className="particle particle-2"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ backgroundColor: brand.color }}
      />

      {/* Back Button */}
      <motion.button
        className="back-btn-floating"
        onClick={() => navigate('/challenges')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Challenges</span>
      </motion.button>

      {/* Hero Section */}
      <motion.section 
        className="brand-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="brand-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand Icon */}
          <motion.div 
            className="brand-icon-large"
            style={{ color: brand.color }}
            variants={itemVariants}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <span className="brand-emoji">{brand.icon}</span>
          </motion.div>

          {/* Brand Title */}
          <motion.h1 
            className="brand-title"
            style={{ color: brand.color }}
            variants={itemVariants}
          >
            {brand.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="brand-tagline"
            variants={itemVariants}
          >
            {brand.tagline}
          </motion.p>

          {/* Discount Badge */}
          <motion.div 
            className="discount-badge-large"
            style={{ borderColor: brand.color, color: brand.color }}
            variants={itemVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Gift size={24} />
            <span className="discount-text">{brand.discount}</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="brand-description"
            variants={itemVariants}
          >
            {brand.description}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Content Grid */}
      <motion.section 
        className="brand-content-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured Products */}
        <motion.div 
          className="brand-section"
          variants={itemVariants}
        >
          <div className="section-title">
            <Star size={28} style={{ color: brand.color }} />
            <h2>Featured Products</h2>
          </div>
          <motion.div 
            className="products-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {brand.products.map((product, idx) => (
              <motion.div
                key={idx}
                className="product-item"
                variants={itemVariants}
                whileHover={{ 
                  x: 8,
                  boxShadow: `0 8px 20px ${brand.color}40`
                }}
                style={{ borderLeftColor: brand.color }}
              >
                <motion.div 
                  className="product-checkbox"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CheckCircle size={20} style={{ color: brand.color }} />
                </motion.div>
                <span>{product}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Member Benefits */}
        <motion.div 
          className="brand-section"
          variants={itemVariants}
        >
          <div className="section-title">
            <Leaf size={28} style={{ color: brand.color }} />
            <h2>Member Benefits</h2>
          </div>
          <motion.div 
            className="benefits-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {brand.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="benefit-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 12px 24px ${brand.color}30`
                }}
                style={{ backgroundColor: `${brand.color}10` }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  style={{ color: brand.color }}
                >
                  ✨
                </motion.div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="brand-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="cta-card"
          style={{ borderColor: brand.color }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 20px 50px ${brand.color}40`
          }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: brand.color }}
          >
            Ready to Redeem?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Use your green points to unlock exclusive deals and sustainable products today!
          </motion.p>
          <motion.button
            className="redeem-button"
            style={{ 
              background: `linear-gradient(135deg, ${brand.color}, ${brand.color}99)`,
              boxShadow: `0 10px 30px ${brand.color}40`
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: `0 15px 40px ${brand.color}60`
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift size={20} />
            Start Redeeming
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Back Button Section */}
      <motion.section 
        className="brand-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="back-btn-main"
          onClick={() => navigate('/challenges')}
          style={{ 
            borderColor: brand.color,
            color: brand.color
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: `${brand.color}10`
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span>Back to Challenges</span>
        </motion.button>
      </motion.section>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock API for demonstration
const mockApi = {
  get: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: [
        {
          id: 1,
          title: "Morning Meditation & Mindfulness",
          description: "Start your day with inner peace and clarity through guided meditation and breathing exercises.",
          date: "2025-08-26",
          time: "07:00 AM",
          duration: "60 minutes",
          location: "Serenity Garden",
          instructor: "Dr. Sarah Chen",
          participants: 12,
          maxParticipants: 20,
          category: "Meditation",
          difficulty: "Beginner",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
        },
        {
          id: 2,
          title: "Therapeutic Yoga Flow",
          description: "Gentle yoga practice designed to release tension, improve flexibility, and promote healing.",
          date: "2025-08-26",
          time: "09:30 AM",
          duration: "90 minutes",
          location: "Wellness Studio A",
          instructor: "Maya Rodriguez",
          participants: 8,
          maxParticipants: 15,
          category: "Yoga",
          difficulty: "Intermediate",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop"
        },
        {
          id: 3,
          title: "Nature Walk & Forest Bathing",
          description: "Connect with nature through mindful walking and forest bathing techniques for stress relief.",
          date: "2025-08-27",
          time: "06:00 PM",
          duration: "120 minutes",
          location: "EcoHaven Trails",
          instructor: "James Wilson",
          participants: 15,
          maxParticipants: 25,
          category: "Nature Therapy",
          difficulty: "All Levels",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop"
        },
        {
          id: 4,
          title: "Sound Healing & Crystal Therapy",
          description: "Experience deep relaxation through sound frequencies and crystal energy healing.",
          date: "2025-08-28",
          time: "07:00 PM",
          duration: "75 minutes",
          location: "Harmony Room",
          instructor: "Luna Starr",
          participants: 6,
          maxParticipants: 12,
          category: "Sound Healing",
          difficulty: "All Levels",
          image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop"
        }
      ]
    };
  }
};

// CSS styles as objects
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #020617 0%, #1e293b 25%, #374151 50%, #1f2937 75%, #0f172a 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundOrb1: {
    position: 'fixed',
    top: '-10rem',
    right: '-10rem',
    width: '24rem',
    height: '24rem',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(3rem)',
    pointerEvents: 'none',
    zIndex: 0
  },
  backgroundOrb2: {
    position: 'fixed',
    bottom: '-10rem',
    left: '-10rem',
    width: '24rem',
    height: '24rem',
    background: 'radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(3rem)',
    pointerEvents: 'none',
    zIndex: 0
  },
  backgroundOrb3: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '24rem',
    height: '24rem',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(3rem)',
    pointerEvents: 'none',
    zIndex: 0
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    color: '#10b981',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #ffffff, #a7f3d0, #67e8f9)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
    lineHeight: '1.6'
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '3rem'
  },
  stat: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.4)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  cardHover: {
    transform: 'translateY(-5px) scale(1.02)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  },
  imageContainer: {
    position: 'relative',
    height: '12rem',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 50%, rgba(15, 23, 42, 0.2) 100%)'
  },
  categoryBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.75rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#1e293b',
    backdropFilter: 'blur(4px)'
  },
  difficultyBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    background: 'rgba(15, 23, 42, 0.8)',
    color: 'white',
    backdropFilter: 'blur(4px)'
  },
  urgencyBadge: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(249, 115, 22, 0.9)',
    color: 'white',
    animation: 'pulse 2s infinite'
  },
  cardContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease'
  },
  cardDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    marginBottom: '0.75rem'
  },
  instructor: {
    color: '#10b981',
    fontWeight: '500',
    fontSize: '0.875rem'
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem'
  },
  progressBar: {
    width: '100%',
    height: '0.5rem',
    background: 'rgba(71, 85, 105, 0.5)',
    borderRadius: '0.25rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #10b981, #0891b2)',
    borderRadius: '0.25rem',
    transition: 'width 1s ease-out'
  },
  button: {
    width: '100%',
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #10b981, #0891b2)',
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.875rem'
  },
  buttonHover: {
    background: 'linear-gradient(135deg, #059669, #0e7490)',
    transform: 'scale(1.02)'
  },
  skeleton: {
    borderRadius: '1rem',
    background: 'rgba(30, 41, 59, 0.3)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    overflow: 'hidden'
  },
  skeletonImage: {
    height: '12rem',
    background: 'rgba(71, 85, 105, 0.5)'
  },
  skeletonContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  skeletonBar: {
    height: '1rem',
    background: 'rgba(71, 85, 105, 0.5)',
    borderRadius: '0.5rem',
    animation: 'pulse 2s infinite'
  },
  emptyState: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '4rem 0'
  },
  emptyIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '1rem'
  },
  emptyDescription: {
    color: 'rgba(255, 255, 255, 0.4)',
    maxWidth: '28rem',
    margin: '0 auto 2rem',
    lineHeight: '1.6'
  }
};

// Add CSS animations
const cssAnimations = `
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.02); }
  }
`;

// Icon components using CSS/Unicode symbols
const CalendarIcon = () => <span style={{color: '#10b981', fontSize: '1rem'}}>📅</span>;
const ClockIcon = () => <span style={{color: '#0891b2', fontSize: '1rem'}}>⏰</span>;
const LocationIcon = () => <span style={{color: '#8b5cf6', fontSize: '1rem'}}>📍</span>;
const UsersIcon = () => <span style={{color: '#ec4899', fontSize: '1rem'}}>👥</span>;
const HeartIcon = () => <span style={{color: '#ec4899', fontSize: '1rem'}}>💖</span>;
const SparklesIcon = () => <span style={{color: '#fbbf24', fontSize: '0.75rem'}}>✨</span>;

// Session Card Component
function SessionCard({ session, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    "Meditation": 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2))',
    "Yoga": 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(147, 51, 234, 0.2))',
    "Nature Therapy": 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
    "Sound Healing": 'linear-gradient(135deg, rgba(8, 145, 178, 0.2), rgba(59, 130, 246, 0.2))'
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "🌱";
      case "Intermediate": return "⭐";
      case "All Levels": return "💚";
      default: return "💚";
    }
  };

  const spotsLeft = session.maxParticipants - session.participants;
  const isNearlyFull = spotsLeft <= 3;
  const progressPercentage = (session.participants / session.maxParticipants) * 100;

  const cardStyle = {
    ...styles.card,
    background: categoryColors[session.category] || categoryColors["Meditation"],
    ...(isHovered ? styles.cardHover : {})
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with image and badges */}
      <div style={styles.imageContainer}>
        <motion.img
          src={session.image}
          alt={session.title}
          style={styles.image}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div style={styles.imageOverlay}></div>

        {/* Category badge */}
        <motion.div
          style={styles.categoryBadge}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SparklesIcon />
          {session.category}
        </motion.div>

        {/* Difficulty indicator */}
        <motion.div
          style={styles.difficultyBadge}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span style={{fontSize: '0.875rem'}}>{getDifficultyIcon(session.difficulty)}</span>
          {session.difficulty}
        </motion.div>

        {/* Nearly full indicator */}
        {isNearlyFull && (
          <motion.div
            style={styles.urgencyBadge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            ⚡ {spotsLeft} spots left
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div style={styles.cardContent}>
        {/* Title and instructor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={styles.cardTitle}>
            {session.title}
          </h3>
          <p style={styles.cardDescription}>
            {session.description}
          </p>
          <p style={styles.instructor}>
            with {session.instructor}
          </p>
        </motion.div>

        {/* Session details grid */}
        <motion.div
          style={styles.detailsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div style={styles.detail}>
            <CalendarIcon />
            <span>{session.date}</span>
          </div>
          <div style={styles.detail}>
            <ClockIcon />
            <span>{session.time}</span>
          </div>
          <div style={styles.detail}>
            <LocationIcon />
            <span>{session.location}</span>
          </div>
          <div style={styles.detail}>
            <UsersIcon />
            <span>{session.participants}/{session.maxParticipants}</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          style={styles.progressContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div style={styles.progressLabel}>
            <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem'}}>Participants</span>
            <span style={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', fontSize: '0.75rem'}}>
              {Math.round(progressPercentage)}% full
            </span>
          </div>
          <div style={styles.progressBar}>
            <motion.div
              style={{...styles.progressFill, width: `${progressPercentage}%`}}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Action button */}
        <motion.button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {})
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {spotsLeft > 0 ? 'Join Session' : 'Join Waitlist'}
        </motion.button>
      </div>
    </motion.div>
  );
}

// Loading skeleton component
function SessionSkeleton({ index }) {
  return (
    <motion.div
      style={styles.skeleton}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div style={styles.skeletonImage}></div>
      <div style={styles.skeletonContent}>
        <div style={{...styles.skeletonBar, width: '75%'}}></div>
        <div style={styles.skeletonBar}></div>
        <div style={{...styles.skeletonBar, width: '60%'}}></div>
        <div style={styles.detailsGrid}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{...styles.skeletonBar, height: '1rem'}}></div>
          ))}
        </div>
        <div style={{...styles.skeletonBar, height: '0.5rem'}}></div>
        <div style={{...styles.skeletonBar, height: '3rem'}}></div>
      </div>
    </motion.div>
  );
}

// Main Sessions component
export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await mockApi.get("/api/community/sessions/");
        setSessions(resp.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />
      <div style={styles.container}>
        {/* Animated background effects */}
        <motion.div
          style={styles.backgroundOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          style={styles.backgroundOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          style={styles.backgroundOrb3}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div style={styles.content}>
          {/* Header Section */}
          <motion.div
            style={styles.header}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={styles.badge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeartIcon />
              <span>Wellness & Mindfulness</span>
            </motion.div>

            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Wellness Sessions
            </motion.h1>

            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our curated wellness sessions designed to nurture your mind, body, and spirit.
              From meditation to yoga, discover practices that promote healing and inner peace.
            </motion.p>

            {/* Stats */}
            <motion.div
              style={styles.statsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div style={styles.stat}>
                <motion.div
                  style={{...styles.statNumber, color: '#10b981'}}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {sessions.length}
                </motion.div>
                <div style={styles.statLabel}>Sessions Available</div>
              </div>
              <div style={styles.stat}>
                <motion.div
                  style={{...styles.statNumber, color: '#0891b2'}}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {sessions.reduce((total, s) => total + s.participants, 0)}
                </motion.div>
                <div style={styles.statLabel}>Active Participants</div>
              </div>
              <div style={styles.stat}>
                <motion.div
                  style={{...styles.statNumber, color: '#8b5cf6'}}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  4+
                </motion.div>
                <div style={styles.statLabel}>Wellness Categories</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sessions Grid */}
          <div style={styles.grid}>
            <AnimatePresence>
              {loading ? (
                // Loading skeletons
                [...Array(4)].map((_, i) => <SessionSkeleton key={i} index={i} />)
              ) : sessions.length === 0 ? (
                // Empty state
                <motion.div
                  style={styles.emptyState}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div style={styles.emptyIcon}>
                    <span style={{fontSize: '2.5rem'}}>📅</span>
                  </div>
                  <h3 style={styles.emptyTitle}>No Sessions Scheduled</h3>
                  <p style={styles.emptyDescription}>
                    We're preparing amazing wellness sessions for you. Check back soon for updates!
                  </p>
                  <motion.button
                    style={styles.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Notified
                  </motion.button>
                </motion.div>
              ) : (
                // Sessions list
                sessions.map((session, index) => (
                  <SessionCard key={session.id} session={session} index={index} />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
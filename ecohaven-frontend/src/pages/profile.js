import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, TrendingUp, Heart, Share2, Edit2, Settings, Trophy, Zap } from 'lucide-react';
import axios from 'axios';
import '../styles/profile.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/accounts/profile/', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="profile-loading">
                <div className="spinner"></div>
                <p>Loading your profile...</p>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="profile-error">
                <p>📋 Please log in to view your profile.</p>
            </div>
        );
    }

    const ecoScore = profile.eco_score || 2450;
    const postsCount = profile.posts_count || 24;
    const challengesCompleted = profile.challenges_completed || 8;
    const treesSaved = profile.trees_saved || 156;

    return (
        <div className="profile-page">
            {/* Background Effects */}
            <div className="profile-background">
                <motion.div className="gradient-orb profile-orb-1" animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} />
                <motion.div className="gradient-orb profile-orb-2" animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} />
            </div>

            {/* Header Section */}
            <motion.section className="profile-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="header-content">
                    <motion.div className="profile-avatar" whileHover={{ scale: 1.1 }}>
                        <div className="avatar-circle">👤</div>
                        <div className="avatar-badge">✨</div>
                    </motion.div>

                    <div className="profile-info">
                        <h1>{profile.username || 'Eco Warrior'}</h1>
                        <p className="profile-email">{profile.email}</p>
                        <p className="profile-joined">Member since {new Date(profile.created_at).toLocaleDateString()}</p>
                        
                        <div className="profile-badges">
                            <motion.div className="badge" whileHover={{ scale: 1.1 }}>
                                <Trophy size={16} /> Champion
                            </motion.div>
                            <motion.div className="badge" whileHover={{ scale: 1.1 }}>
                                <Leaf size={16} /> Green Pro
                            </motion.div>
                            <motion.div className="badge" whileHover={{ scale: 1.1 }}>
                                <Heart size={16} /> Helper
                            </motion.div>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <motion.button className="btn-action" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Edit2 size={20} /> Edit Profile
                        </motion.button>
                        <motion.button className="btn-action" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Settings size={20} /> Settings
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section className="profile-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="stats-grid">
                    <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}>
                        <div className="stat-icon eco-score">
                            <Zap size={28} />
                        </div>
                        <div className="stat-content">
                            <div className="stat-value">{ecoScore}</div>
                            <div className="stat-label">Eco Score</div>
                        </div>
                        <div className="stat-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '78%' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}>
                        <div className="stat-icon posts">
                            <Share2 size={28} />
                        </div>
                        <div className="stat-content">
                            <div className="stat-value">{postsCount}</div>
                            <div className="stat-label">Posts Shared</div>
                        </div>
                        <div className="stat-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}>
                        <div className="stat-icon challenges">
                            <Trophy size={28} />
                        </div>
                        <div className="stat-content">
                            <div className="stat-value">{challengesCompleted}</div>
                            <div className="stat-label">Challenges Won</div>
                        </div>
                        <div className="stat-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}>
                        <div className="stat-icon trees">
                            <Leaf size={28} />
                        </div>
                        <div className="stat-content">
                            <div className="stat-value">{treesSaved}</div>
                            <div className="stat-label">Trees Saved</div>
                        </div>
                        <div className="stat-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '92%' }}></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Tabs Section */}
            <motion.section className="profile-tabs-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="tabs-header">
                    <motion.button
                        className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                        layoutId="active-tab"
                    >
                        Overview
                    </motion.button>
                    <motion.button
                        className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
                        onClick={() => setActiveTab('achievements')}
                        layoutId="active-tab"
                    >
                        Achievements
                    </motion.button>
                    <motion.button
                        className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
                        onClick={() => setActiveTab('activity')}
                        layoutId="active-tab"
                    >
                        Activity
                    </motion.button>
                </div>

                {/* Tab Content */}
                <div className="tabs-content">
                    {activeTab === 'overview' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane">
                            <h3>Profile Overview</h3>
                            <div className="overview-grid">
                                <div className="overview-card">
                                    <h4>Bio</h4>
                                    <p>{profile.bio || '🌱 Passionate about sustainable living and environmental conservation!'}</p>
                                </div>
                                <div className="overview-card">
                                    <h4>Location</h4>
                                    <p>{profile.location || '🌍 Planet Earth'}</p>
                                </div>
                                <div className="overview-card">
                                    <h4>Interests</h4>
                                    <p>🌿 Gardening • ♻️ Recycling • 🚴 Cycling</p>
                                </div>
                                <div className="overview-card">
                                    <h4>Goals</h4>
                                    <p>🎯 Zero Waste Lifestyle • 🌳 Plant 100 Trees</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'achievements' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane">
                            <h3>Achievements & Badges</h3>
                            <div className="achievements-grid">
                                {[
                                    { icon: '🏆', title: 'Top Contributor', desc: 'Posted 20+ times' },
                                    { icon: '♻️', title: 'Recycling Master', desc: 'Completed recycling challenge' },
                                    { icon: '🌱', title: 'Green Thumb', desc: '10 garden sessions' },
                                    { icon: '💪', title: 'Eco Warrior', desc: '30 day streak' },
                                    { icon: '🎯', title: 'Goal Setter', desc: 'Achieved 5 goals' },
                                    { icon: '🤝', title: 'Community Hero', desc: '50 helpful posts' }
                                ].map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="achievement-badge"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="badge-icon">{achievement.icon}</div>
                                        <div className="badge-info">
                                            <div className="badge-title">{achievement.title}</div>
                                            <div className="badge-desc">{achievement.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'activity' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane">
                            <h3>Recent Activity</h3>
                            <div className="activity-list">
                                {[
                                    { icon: '📝', text: 'Posted: "Tips for Zero Waste Shopping"', time: '2 hours ago' },
                                    { icon: '🏆', text: 'Completed Challenge: Community Cleanup', time: '5 hours ago' },
                                    { icon: '❤️', text: 'Liked post from Sarah Green', time: '1 day ago' },
                                    { icon: '🌳', text: 'Joined: Urban Gardening Session', time: '2 days ago' },
                                    { icon: '⚡', text: 'Earned 150 eco-points', time: '3 days ago' }
                                ].map((activity, idx) => (
                                    <motion.div key={idx} className="activity-item" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }}>
                                        <div className="activity-icon">{activity.icon}</div>
                                        <div className="activity-content">
                                            <p>{activity.text}</p>
                                            <span className="activity-time">{activity.time}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.section>
        </div>
    );
};

export default Profile;
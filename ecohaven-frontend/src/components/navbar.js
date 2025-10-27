import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const Navbar = ({ isLoggedIn, onLogout, userName = "User", userAvatar = null }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [notificationCount, setNotificationCount] = useState(0);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setIsProfileOpen(false);
    }, [location]);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="navbar-logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to="/">
                    🌿 EcoHaven
                </Link>
            </motion.div>
            
            <ul className="navbar-links">
                <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link to="/feed">
                        🌍 Community Feed
                    </Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link to="/sessions">
                        💪 Sessions
                    </Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link to="/challenges">
                        🏆 Challenges
                    </Link>
                </motion.li>
            </ul>

            <div className="navbar-auth">
                {isLoggedIn ? (
                    <div className="profile-container" ref={dropdownRef}>
                        <motion.button
                            onClick={handleProfileClick}
                            className="profile-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>👤</span>
                            <span>My Profile</span>
                        </motion.button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <motion.div
                                    className="profile-dropdown"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Link to="/profile" onClick={() => setIsProfileOpen(false)}>
                                            👤 My Profile
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <button onClick={onLogout} className="logout-button">
                                            🚪 Logout
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/login" className="login-button">
                                Login
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/register" className="signup-button">
                                Sign Up
                            </Link>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
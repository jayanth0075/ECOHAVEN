import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './navbar.css';

const Navbar = ({ isLoggedIn, onLogout, userName = "User", userAvatar = null }) => {
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
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
        // Close any dropdowns when location changes
    }, [location]);

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
                {isLoggedIn ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <Link to="/about">
                                About
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <Link to="/features">
                                Features
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </motion.li>
                    </>
                )}
            </ul>

            <div className="navbar-auth">
                {isLoggedIn ? (
                    <motion.button
                        onClick={onLogout}
                        className="logout-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        � Logout
                    </motion.button>
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
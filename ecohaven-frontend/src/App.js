import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Import components with lowercase filenames
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Feed from "./pages/feed";
import Profile from "./pages/profile";
import Sessions from "./pages/sessions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token exists in localStorage on initial render
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token and update the login state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the home page or login page
    window.location.href = '/';
  };

  return (
    <div className="app-root">
      {/* Pass the login state and logout function to the Navbar */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}

// MAKE SURE THIS LINE IS AT THE VERY END OF YOUR FILE:
export default App;
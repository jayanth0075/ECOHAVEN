import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Landing = () => {
  const features = [
    {
      icon: "🌱",
      title: "Track Your Eco Journey",
      description: "Monitor your environmental impact and see your progress over time"
    },
    {
      icon: "🤝",
      title: "Join the Community",
      description: "Connect with like-minded individuals and share your eco-friendly experiences"
    },
    {
      icon: "🏆",
      title: "Eco Challenges",
      description: "Participate in weekly challenges and earn rewards for sustainable living"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container"
    >
      <section className="flex flex-col items-center py-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-md mb-8"
        >
          <h1 className="text-primary font-bold text-4xl mb-4">
            Welcome to EcoHaven 🌿
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Join a community of eco-conscious individuals making a positive impact on our planet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Login
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="card card-lg text-center max-w-lg mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">About EcoHaven</h2>
          <p className="text-gray-500">
            EcoHaven was founded in 2023 with a mission to inspire and support a global community
            dedicated to sustainability and wellness. Our platform combines cutting-edge tools
            for tracking eco-friendly habits with a vibrant network for sharing knowledge and
            fostering collaboration. Backed by experts in environmental science and community
            building, EcoHaven aims to empower the next generation to create a positive impact
            on the planet while nurturing their personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="card card-hover text-center"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Landing;


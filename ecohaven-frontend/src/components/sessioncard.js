import React from "react";
import { motion } from "framer-motion";

export default function SessionCard({ session }) {
  return (
    <motion.div
      className="session-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={sessionStyle}
    >
      <h3>{session.title}</h3>
      <p style={{ marginTop: 6 }}>{session.summary}</p>
      <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: 13, opacity: 0.7 }}>{session.date}</div>
        <button className="btn-sm">Join</button>
      </div>
    </motion.div>
  );
}

const sessionStyle = {
  padding: 16,
  borderRadius: 12,
  background: "linear-gradient(180deg,#f7fff6,#ffffff)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
  marginBottom: 12,
};

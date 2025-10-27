import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      style={footerStyle}
    >
      <div>© {new Date().getFullYear()} EcoHaven — wellness & eco community</div>
      <div style={{ fontSize: 12, opacity: 0.8 }}>Built with care • Contact: hello@ecohaven.dev</div>
    </motion.footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "28px 12px",
  marginTop: 40,
  borderTop: "1px solid rgba(0,0,0,0.06)",
  color: "#2e7d32",
};

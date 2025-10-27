import React from "react";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  return (
    <motion.article
      className="post-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={cardStyle}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700 }}>{post.author || "Anonymous"}</div>
        <div style={{ fontSize: 12, opacity: 0.6 }}>{post.created_at || ""}</div>
      </header>
      <p style={{ marginTop: 8 }}>{post.content}</p>
      <footer style={{ marginTop: 12, display: "flex", gap: 12 }}>
        <button className="btn-sm">Like</button>
        <button className="btn-sm">Comment</button>
      </footer>
    </motion.article>
  );
}

const cardStyle = {
  background: "white",
  padding: 18,
  borderRadius: 12,
  boxShadow: "0 6px 18px rgba(17,24,39,0.06)",
  marginBottom: 16,
};

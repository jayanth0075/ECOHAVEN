import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, MessageCircle, Share2, Bookmark, MoreVertical, 
  Send, MapPin, Calendar, Users, ArrowLeft 
} from 'lucide-react';
import '../styles/post-detail.css';

const PostDetail = () => {
  const { postId } = useParams();
  
  // Sample post data - in real app, fetch from API using postId
  const [post, setPost] = useState({
    id: postId,
    author: {
      name: 'Sarah Green',
      username: '@saraheco',
      avatar: '🌱',
      ecoScore: 850,
      verified: true
    },
    content: 'Just completed my first zero-waste week challenge! 🎉 Here are my top 5 tips for anyone starting their sustainable living journey...',
    fullContent: `Just completed my first zero-waste week challenge! 🎉 Here are my top 5 tips for anyone starting their sustainable living journey:

1. **Start with reusable bags** - Keep them in your car and by the door so you never forget
2. **Buy in bulk** - Reduces packaging waste significantly
3. **Compost your food scraps** - Turn waste into nutrient-rich soil
4. **Choose glass over plastic** - It's reusable and doesn't leach chemicals
5. **Say no to single-use items** - Carry a reusable water bottle, coffee cup, and utensils

The journey isn't about perfection, it's about progress. Every small step counts! 💚

What's your favorite zero-waste tip? Share below! 👇`,
    image: null,
    tags: ['ZeroWaste', 'SustainableLiving', 'EcoTips', 'Challenge'],
    location: 'San Francisco, CA',
    createdAt: '2 hours ago',
    likes: 234,
    comments: 48,
    shares: 12,
    isLiked: false,
    isSaved: false
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        name: 'Mike Johnson',
        username: '@mikej',
        avatar: '🌍',
        ecoScore: 720
      },
      content: 'Great tips! I\'ve been doing the bulk buying for 6 months now and it\'s made such a difference. My trash output is down by 60%! 📉',
      createdAt: '1 hour ago',
      likes: 15,
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: 'Emma Wilson',
        username: '@emmaw',
        avatar: '♻️',
        ecoScore: 680
      },
      content: 'Composting changed my life! Started small with a kitchen bin, now I have a full backyard setup. The garden has never been healthier! 🌿',
      createdAt: '45 minutes ago',
      likes: 22,
      isLiked: true
    },
    {
      id: 3,
      author: {
        name: 'David Chen',
        username: '@davidc',
        avatar: '🌳',
        ecoScore: 790
      },
      content: 'Love this! I\'d add: bring your own containers to restaurants for takeout. Most places are happy to accommodate! 🥡',
      createdAt: '30 minutes ago',
      likes: 18,
      isLiked: false
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleLike = () => {
    setPost({
      ...post,
      isLiked: !post.isLiked,
      likes: post.isLiked ? post.likes - 1 : post.likes + 1
    });
  };

  const handleSave = () => {
    setPost({
      ...post,
      isSaved: !post.isSaved
    });
  };

  const handleCommentLike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, isLiked: !comment.isLiked, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 }
        : comment
    ));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: {
          name: 'You',
          username: '@you',
          avatar: '👤',
          ecoScore: 650
        },
        content: newComment,
        createdAt: 'Just now',
        likes: 0,
        isLiked: false
      };
      setComments([...comments, comment]);
      setNewComment('');
      setPost({ ...post, comments: post.comments + 1 });
    }
  };

  const handleShare = (platform) => {
    console.log(`Sharing to ${platform}`);
    setShowShareMenu(false);
  };

  return (
    <div className="post-detail-page">
      <div className="post-detail-container">
        {/* Back Button */}
        <motion.div
          className="back-button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/feed" className="btn-back">
            <ArrowLeft size={20} />
            Back to Feed
          </Link>
        </motion.div>

        {/* Main Post Card */}
        <motion.div
          className="post-detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Post Header */}
          <div className="post-header">
            <div className="author-info">
              <div className="author-avatar">{post.author.avatar}</div>
              <div className="author-details">
                <div className="author-name-row">
                  <h3>{post.author.name}</h3>
                  {post.author.verified && <span className="verified-badge">✓</span>}
                </div>
                <div className="post-meta">
                  <span className="username">{post.author.username}</span>
                  <span className="separator">•</span>
                  <span className="eco-score">🏆 {post.author.ecoScore}</span>
                  <span className="separator">•</span>
                  <span className="timestamp">{post.createdAt}</span>
                </div>
                {post.location && (
                  <div className="post-location">
                    <MapPin size={14} />
                    <span>{post.location}</span>
                  </div>
                )}
              </div>
            </div>
            <button className="btn-more">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Post Content */}
          <div className="post-content">
            <p className="post-text">{post.fullContent}</p>
            
            {/* Tags */}
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Post Actions */}
          <div className="post-actions">
            <div className="action-buttons">
              <motion.button
                className={`action-btn ${post.isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart size={22} fill={post.isLiked ? 'currentColor' : 'none'} />
                <span>{post.likes}</span>
              </motion.button>
              
              <motion.button
                className="action-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={22} />
                <span>{post.comments}</span>
              </motion.button>
              
              <div className="share-container">
                <motion.button
                  className="action-btn"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 size={22} />
                  <span>{post.shares}</span>
                </motion.button>
                
                {showShareMenu && (
                  <motion.div
                    className="share-menu"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <button onClick={() => handleShare('twitter')}>Twitter</button>
                    <button onClick={() => handleShare('facebook')}>Facebook</button>
                    <button onClick={() => handleShare('linkedin')}>LinkedIn</button>
                    <button onClick={() => handleShare('copy')}>Copy Link</button>
                  </motion.div>
                )}
              </div>
            </div>
            
            <motion.button
              className={`action-btn save-btn ${post.isSaved ? 'saved' : ''}`}
              onClick={handleSave}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bookmark size={22} fill={post.isSaved ? 'currentColor' : 'none'} />
            </motion.button>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          className="comments-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="comments-title">
            <MessageCircle size={24} />
            Comments ({comments.length})
          </h2>

          {/* Add Comment Form */}
          <form className="add-comment-form" onSubmit={handleAddComment}>
            <div className="comment-input-wrapper">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="comment-input"
              />
              <motion.button
                type="submit"
                className="btn-send-comment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!newComment.trim()}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                className="comment-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="comment-avatar">{comment.author.avatar}</div>
                <div className="comment-content">
                  <div className="comment-header">
                    <div className="comment-author">
                      <span className="author-name">{comment.author.name}</span>
                      <span className="author-username">{comment.author.username}</span>
                      <span className="eco-badge">🏆 {comment.author.ecoScore}</span>
                    </div>
                    <span className="comment-time">{comment.createdAt}</span>
                  </div>
                  <p className="comment-text">{comment.content}</p>
                  <div className="comment-actions">
                    <motion.button
                      className={`comment-like-btn ${comment.isLiked ? 'liked' : ''}`}
                      onClick={() => handleCommentLike(comment.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={16} fill={comment.isLiked ? 'currentColor' : 'none'} />
                      <span>{comment.likes}</span>
                    </motion.button>
                    <button className="comment-reply-btn">Reply</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sidebar - Related Posts/Suggestions */}
      <motion.div
        className="post-sidebar"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="sidebar-section">
          <h3>Trending Topics</h3>
          <div className="trending-topics">
            {['#ClimateAction', '#PlasticFree', '#SustainableFood', '#GreenEnergy'].map((topic, index) => (
              <motion.div
                key={index}
                className="trending-topic"
                whileHover={{ x: 5 }}
              >
                <span className="topic-name">{topic}</span>
                <span className="topic-count">{Math.floor(Math.random() * 500 + 100)} posts</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Similar Posts</h3>
          <div className="similar-posts">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="similar-post-card"
                whileHover={{ y: -3 }}
              >
                <div className="similar-post-author">
                  <span className="avatar">🌿</span>
                  <span className="name">Eco Warrior</span>
                </div>
                <p className="similar-post-preview">
                  Amazing tips for reducing plastic waste in your daily life...
                </p>
                <div className="similar-post-stats">
                  <span>❤️ 156</span>
                  <span>💬 23</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostDetail;

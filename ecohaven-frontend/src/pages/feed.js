import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Clock, Search, Filter, TrendingUp } from 'lucide-react';
import '../styles/feed.css';

const Feed = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());

  // Sample posts with diverse content
  const samplePosts = [
    {
      id: 1,
      author: 'Sarah Green',
      avatar: '👩‍🌾',
      title: 'Just switched to bamboo toothbrushes!',
      excerpt: 'Small step but it feels great knowing my oral hygiene isn\'t harming marine life.',
      content: 'After 5 years of using plastic toothbrushes, I finally made the switch to bamboo! They\'re biodegradable, affordable, and honestly feel better in my mouth. Highly recommend!',
      category: 'Sustainable Products',
      tags: ['#bamboo', '#zerowaste', '#sustainable'],
      likes: 342,
      comments: 87,
      image: '🪥',
      timestamp: '2 hours ago',
      engagement: 'high'
    },
    {
      id: 2,
      author: 'Mike Eco',
      avatar: '🧑‍🌿',
      title: 'My first harvest from the rooftop garden!',
      excerpt: 'Grew tomatoes, lettuce, and herbs in just 8 weeks. Urban farming is the future!',
      content: 'Converting my balcony into a thriving garden has been one of the best decisions. Fresh produce, clean air, and it\'s actually fun!',
      category: 'Urban Farming',
      tags: ['#gardening', '#urban', '#farming'],
      likes: 521,
      comments: 134,
      image: '🌱',
      timestamp: '4 hours ago',
      engagement: 'high'
    },
    {
      id: 3,
      author: 'Emma Sustainable',
      avatar: '👩‍💼',
      title: 'Organized a community cleanup drive',
      excerpt: 'Our neighborhood collected 2 tons of plastic waste in just 3 hours. Community power! 💪',
      content: 'Started with just my friends, now 150+ people joined! We cleaned up the entire waterfront. The impact was incredible and the community spirit was even better.',
      category: 'Community Action',
      tags: ['#community', '#cleanup', '#environment'],
      likes: 789,
      comments: 213,
      image: '🧹',
      timestamp: '1 day ago',
      engagement: 'high'
    },
    {
      id: 4,
      author: 'Alex Eco Warrior',
      avatar: '🌿',
      title: 'Switching to renewable energy this month!',
      excerpt: 'Finally installing solar panels. Can\'t wait to reduce my carbon footprint.',
      content: 'After researching for 6 months, I\'m taking the leap with solar panels. The government incentives made it affordable and the ROI looks promising!',
      category: 'Renewable Energy',
      tags: ['#solar', '#renewable', '#energy'],
      likes: 456,
      comments: 98,
      image: '☀️',
      timestamp: '6 hours ago',
      engagement: 'medium'
    },
    {
      id: 5,
      author: 'Jessica Mindful',
      avatar: '🧘‍♀️',
      title: 'Zero waste bathroom - here\'s how I did it',
      excerpt: 'Biodegradable soap, solid shampoo, and reusable razors. My bathroom trash is now just 1 bag/year!',
      content: 'Making the switch was easier than expected. My skin is healthier, products last longer, and I feel so much better about my impact!',
      category: 'Lifestyle',
      tags: ['#zerowaste', '#bathroom', '#eco'],
      likes: 634,
      comments: 156,
      image: '🚿',
      timestamp: '8 hours ago',
      engagement: 'high'
    },
    {
      id: 6,
      author: 'David Green',
      avatar: '🧑‍🏫',
      title: 'Teaching kids about composting at school',
      excerpt: 'Started a composting program. 200+ kids learning about organic waste! 🌍',
      content: 'Educational + practical = perfect combination! Kids are excited about turning waste into treasure. Parents are joining too!',
      category: 'Education',
      tags: ['#education', '#composting', '#kids'],
      likes: 378,
      comments: 92,
      image: '♻️',
      timestamp: '1 day ago',
      engagement: 'medium'
    },
    {
      id: 7,
      author: 'Lisa Eco',
      avatar: '👩‍🔬',
      title: 'Researching ocean plastic solutions',
      excerpt: 'Our lab just developed a new plastic degradation enzyme. Game changer!',
      content: 'After 3 years of research, we\'re seeing promising results. This could revolutionize plastic waste management.',
      category: 'Innovation',
      tags: ['#research', '#ocean', '#plastic'],
      likes: 912,
      comments: 245,
      image: '🌊',
      timestamp: '2 days ago',
      engagement: 'high'
    },
    {
      id: 8,
      author: 'Tom Adventure',
      avatar: '🥾',
      title: 'Trail clean-up hike completed!',
      excerpt: 'Removed 45kg of trash while enjoying nature. Combined exercise with environmental action.',
      content: 'Combined my passion for hiking with making a difference. The trail looks pristine now!',
      category: 'Activism',
      tags: ['#hiking', '#cleanup', '#nature'],
      likes: 567,
      comments: 134,
      image: '⛰️',
      timestamp: '3 days ago',
      engagement: 'medium'
    },
    {
      id: 9,
      author: 'Sophia Vegan',
      avatar: '🥗',
      title: 'Plant-based diet saves me money & the planet',
      excerpt: 'Been vegan for 2 months. Health improved, bills reduced, impact multiplied!',
      content: 'Skeptical at first, but the results speak for themselves. More energy, better digestion, and a lighter conscience!',
      category: 'Diet & Lifestyle',
      tags: ['#vegan', '#plantbased', '#health'],
      likes: 445,
      comments: 187,
      image: '🥦',
      timestamp: '4 days ago',
      engagement: 'high'
    },
    {
      id: 10,
      author: 'Chris Cyclist',
      avatar: '🚴',
      title: 'One year car-free! Here\'s what I learned',
      excerpt: 'Switched to cycling and public transport. Saved $5000 and reduced my carbon by 80%!',
      content: 'Best decision ever. I\'m healthier, saving money, and actually enjoying my commute now!',
      category: 'Transportation',
      tags: ['#cycling', '#carfree', '#transport'],
      likes: 823,
      comments: 267,
      image: '🚴‍♂️',
      timestamp: '5 days ago',
      engagement: 'high'
    }
  ];

  const categories = ['All', 'Sustainable Products', 'Urban Farming', 'Community Action', 'Renewable Energy', 'Innovation'];
  const trendingTopics = ['#ZeroWaste', '#SustainableLiving', '#EcoWarrior', '#GreenTech', '#ClimateAction'];

  const filteredPosts = samplePosts.filter(post => {
    const matchesFilter = filter === 'all' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="feed-enhanced">
      {/* Header */}
      <motion.div
        className="feed-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="header-content">
          <h1>🌍 Community Feed</h1>
          <p>Share your eco-journey and inspire others</p>
        </div>
      </motion.div>

      <div className="feed-container">
        {/* Main Feed */}
        <main className="feed-main">
          {/* Search and Filter */}
          <motion.div
            className="feed-controls"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search posts, topics, people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <Filter size={20} />
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
                {categories.map(cat => (
                  <option key={cat} value={cat === 'All' ? 'all' : cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Posts List */}
          <div className="posts-list">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                className={`post-card ${post.engagement}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Post Header */}
                <div className="post-header">
                  <div className="author-info-feed">
                    <div className="avatar-feed">{post.avatar}</div>
                    <div>
                      <h4>{post.author}</h4>
                      <span className="post-meta-feed">
                        <Clock size={14} /> {post.timestamp}
                      </span>
                    </div>
                  </div>
                  <span className="category-tag">{post.category}</span>
                </div>

                {/* Post Body */}
                <div className="post-body-feed">
                  <div className="post-emoji">{post.image}</div>
                  <div className="post-content-feed">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="post-tags-feed">
                  {post.tags.map((tag, i) => (
                    <a key={i} href={`?search=${tag}`} className="tag-link">
                      {tag}
                    </a>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="post-stats-feed">
                  <div className="stat-item">
                    <Heart size={16} /> {post.likes}
                  </div>
                  <div className="stat-item">
                    <MessageCircle size={16} /> {post.comments}
                  </div>
                  <div className="stat-item trending">
                    <TrendingUp size={16} /> Trending
                  </div>
                </div>

                {/* Post Actions */}
                <div className="post-actions-feed">
                  <motion.button
                    className={`action-btn-feed ${likedPosts.has(post.id) ? 'liked' : ''}`}
                    onClick={() => handleLike(post.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart size={18} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                    Like
                  </motion.button>
                  <motion.button
                    className="action-btn-feed"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={18} />
                    Comment
                  </motion.button>
                  <motion.button
                    className="action-btn-feed"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 size={18} />
                    Share
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="no-posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No posts found. Try adjusting your filters or search terms.</p>
            </motion.div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="feed-sidebar">
          {/* Create Post */}
          <motion.div
            className="create-post-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Share Your Story</h3>
            <p>Inspire the community with your eco-journey</p>
            <button className="btn-create-post">Create Post</button>
          </motion.div>

          {/* Trending Topics */}
          <motion.div
            className="trending-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>🔥 Trending</h3>
            <div className="trending-list">
              {trendingTopics.map((topic, idx) => (
                <motion.a
                  key={idx}
                  href={`?search=${topic}`}
                  className="trending-item"
                  whileHover={{ x: 5 }}
                >
                  <span className="trend-topic">{topic}</span>
                  <span className="trend-count">↑ {Math.floor(Math.random() * 500) + 100}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Top Contributors */}
          <motion.div
            className="contributors-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>👥 Top Contributors</h3>
            <div className="contributors-list">
              {[
                { name: 'Lisa Eco', posts: 156, impact: '12K' },
                { name: 'Mike Eco', posts: 143, impact: '9.5K' },
                { name: 'Emma Sustainable', posts: 128, impact: '8.7K' }
              ].map((contributor, idx) => (
                <div key={idx} className="contributor-item">
                  <div className="contributor-info">
                    <h4>{contributor.name}</h4>
                    <span>{contributor.posts} posts</span>
                  </div>
                  <span className="impact-badge">+{contributor.impact}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="stats-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>📊 Community Stats</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Members</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2.3M</div>
                <div className="stat-label">Posts</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Tonnes CO₂ Saved</div>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default Feed;

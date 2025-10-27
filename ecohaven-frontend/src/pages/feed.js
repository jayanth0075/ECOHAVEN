import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';
import '../styles/feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({ 
        title: '', 
        content: '', 
        tags: [], 
        media: null,
        mediaPreview: null,
        mediaType: null 
    });
    const [showCreatePost, setShowCreatePost] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await api.get('/community/posts/');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLike = async (postId) => {
        try {
            const response = await api.post(`/community/posts/${postId}/like/`);
            setPosts(posts.map(post =>
                post.id === postId
                    ? { ...post, likes_count: response.data.likes_count, is_liked: response.data.liked }
                    : post
            ));
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check if file is an image or video
        const isImage = file.type.startsWith('image/');
        const isVideo = file.type.startsWith('video/');

        if (isImage || isVideo) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewPost(prev => ({
                    ...prev,
                    media: file,
                    mediaPreview: reader.result,
                    mediaType: isImage ? 'image' : 'video'
                }));
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload only images or videos');
        }
    };

    const handleRemoveMedia = () => {
        setNewPost(prev => ({
            ...prev,
            media: null,
            mediaPreview: null,
            mediaType: null
        }));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', newPost.title);
            formData.append('content', newPost.content);
            if (newPost.tags.length > 0) {
                formData.append('tags', JSON.stringify(newPost.tags));
            }
            if (newPost.media) {
                formData.append('media', newPost.media);
            }

            const response = await api.post('/community/posts/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            
            setPosts([response.data, ...posts]);
            setNewPost({ 
                title: '', 
                content: '', 
                tags: [],
                media: null,
                mediaPreview: null,
                mediaType: null
            });
            setShowCreatePost(false);
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="feed-container">
                <div className="loading-spinner-container">
                    <motion.div
                        className="eco-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        🌱
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="feed-container">
            {/* Header */}
            <motion.header
                className="feed-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1>🌍 EcoHaven Community</h1>
                <motion.button
                    className="create-post-btn"
                    onClick={() => setShowCreatePost(!showCreatePost)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ✨ Share Your Journey
                </motion.button>
            </motion.header>

            {/* Create Post Modal */}
            <AnimatePresence>
                {showCreatePost && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowCreatePost(false)}
                    >
                        <motion.div
                            className="create-post-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3>Share Your Eco Journey</h3>
                            <form onSubmit={handleCreatePost}>
                                <input
                                    type="text"
                                    placeholder="Post title..."
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                    required
                                    className="post-input"
                                />
                                <textarea
                                    placeholder="What's your eco story today?"
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                                    required
                                    className="post-textarea"
                                />
                                
                                <div className="media-upload-section">
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        onChange={handleMediaChange}
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        id="media-upload"
                                    />
                                    <label htmlFor="media-upload" className="media-upload-button">
                                        📸 Add Photo or Video
                                    </label>
                                    
                                    {newPost.mediaPreview && (
                                        <div className="media-preview">
                                            {newPost.mediaType === 'image' ? (
                                                <img 
                                                    src={newPost.mediaPreview} 
                                                    alt="Preview" 
                                                    className="media-preview-content"
                                                />
                                            ) : (
                                                <video 
                                                    src={newPost.mediaPreview} 
                                                    className="media-preview-content"
                                                    controls
                                                />
                                            )}
                                            <button 
                                                type="button"
                                                className="remove-media-button"
                                                onClick={handleRemoveMedia}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                <input
                                    type="text"
                                    placeholder="Add tags (comma separated)"
                                    value={newPost.tags.join(', ')}
                                    onChange={(e) => setNewPost({
                                        ...newPost,
                                        tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                                    })}
                                    className="post-input"
                                />
                                
                                <div className="modal-actions">
                                    <button type="button" onClick={() => setShowCreatePost(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit">Share</button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Posts Feed */}
            <div className="posts-container">
                <AnimatePresence>
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="post-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="post-header">
                                <div className="author-info">
                                    <div className="avatar">
                                        {post.author.avatar ? (
                                            <img src={post.author.avatar} alt={post.author.username} />
                                        ) : (
                                            <div className="avatar-placeholder">
                                                {post.author.username[0].toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4>{post.author.username}</h4>
                                        <p className="eco-score">🌱 {post.author.eco_score} Eco Points</p>
                                    </div>
                                </div>
                                <span className="post-date">
                                    {new Date(post.created_at).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="post-content">
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>

                                {post.tags.length > 0 && (
                                    <div className="post-tags">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="tag">#{tag}</span>
                                        ))}
                                    </div>
                                )}

                                {post.media && (
                                    <div className="post-media">
                                        {post.mediaType === 'image' ? (
                                            <img src={post.media} alt="Post content" className="post-media-content" />
                                        ) : (
                                            <video 
                                                src={post.media} 
                                                className="post-media-content" 
                                                controls
                                                playsInline
                                            />
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="post-actions">
                                <motion.button
                                    className={`like-btn ${post.is_liked ? 'liked' : ''}`}
                                    onClick={() => handleLike(post.id)}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {post.is_liked ? '💚' : '🤍'} {post.likes_count}
                                </motion.button>

                                <button className="comment-btn">
                                    💬 {post.comments.length}
                                </button>

                                <div className="eco-impact">
                                    🌍 Impact Score: {post.eco_impact_score}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Feed;

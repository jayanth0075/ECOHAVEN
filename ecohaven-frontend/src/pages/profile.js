// ecohaven-frontend/src/pages/profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/profile.css'; // This line has been corrected

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token'); // Get the stored token
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/accounts/profile/', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading profile...</div>;
    }

    if (!profile) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="profile-page">
            <h2>My Profile</h2>
            <p><strong>Name:</strong> {profile.username}</p>
            <p><strong>Age:</strong> {profile.age || 'N/A'}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            {/* Add more fields as per your Django user model */}
        </div>
    );
};

export default Profile;
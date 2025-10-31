import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    const location = useLocation();

    if (!token) {
        // Redirect to login with next param so user can be brought back
        const next = encodeURIComponent(location.pathname + location.search);
        return <Navigate to={`/login?next=${next}`} replace />;
    }

    return children;
};

export default RequireAuth;

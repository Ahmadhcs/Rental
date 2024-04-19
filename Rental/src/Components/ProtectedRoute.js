import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('ID'); 

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};


export default ProtectedRoute

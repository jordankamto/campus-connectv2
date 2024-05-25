import React from 'react';
import { Navigate } from 'react-router-dom';

// Fonction pour vérifier si l'utilisateur est authentifié
const isAuthenticated = () => !!localStorage.getItem('token');

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" /> : children;
};

export { ProtectedRoute, PublicRoute };

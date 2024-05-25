import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Defis from './pages/defis';
import Solutions from './pages/solutions';
import Ranking from './pages/ranking';
import Profile from './pages/profile';
import Messages from './pages/messages';
import Notifications from './pages/notifications';
import Layout from './components/layout';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route element={<Layout />}>
          <Route path="/defis" element={<ProtectedRoute><Defis /></ProtectedRoute>} />
          <Route path="/solutions" element={<ProtectedRoute><Solutions /></ProtectedRoute>} />
          <Route path="/ranking" element={<ProtectedRoute><Ranking /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

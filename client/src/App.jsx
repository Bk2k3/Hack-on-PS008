import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Challenges from './pages/Challenges.jsx';
import Courses from './pages/Courses.jsx';
import './App.css';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;

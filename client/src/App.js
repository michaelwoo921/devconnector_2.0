import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import { setAlert } from './actions/alert';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';

function App() {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  return (
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Landing />}
        />
        <Route path="/profiles" element={<Profiles />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Dashboard /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

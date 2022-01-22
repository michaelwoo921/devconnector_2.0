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
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import ProfileForm from './components/profile-forms/ProfileForm';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';

function App() {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  return (
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<Profile />} />
        {isAuthenticated && <Route path="/" element={<Dashboard />} />}
        {isAuthenticated && <Route path="/posts" element={<Posts />} />}
        {isAuthenticated && <Route path="/posts/:id" element={<Post />} />}
        {isAuthenticated && (
          <Route path="/create-profile" element={<ProfileForm />} />
        )}
        {isAuthenticated && (
          <Route path="/edit-profile" element={<ProfileForm />} />
        )}
        {isAuthenticated && (
          <Route path="/add-education" element={<AddEducation />} />
        )}
        {isAuthenticated && (
          <Route path="/add-experience" element={<AddExperience />} />
        )}

        {!isAuthenticated && <Route path="/" element={<Landing />} />}
        {!isAuthenticated && <Route path="/register" element={<Register />} />}
        {!isAuthenticated && <Route path="/login" element={<Login />} />}

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

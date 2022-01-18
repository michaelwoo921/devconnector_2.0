import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';

function App() {
  useEffect(() => {
    axios.get('/api').then((res) => console.log(res.data));
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

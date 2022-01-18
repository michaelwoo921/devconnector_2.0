import './App.css';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
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
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

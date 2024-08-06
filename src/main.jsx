import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import Profile from './Profile';
import Header from './Header';

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

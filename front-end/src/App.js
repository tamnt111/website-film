import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/header/Header';
import Home from './Pages/Home/Home';
import Anime from './Pages/Anime/Anime';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/header/Header';
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import Anime from './Pages/Anime/Anime';
=======
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/anime" element={<Anime />} />
=======
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
        </Routes>
      </Router>
    </>
  );
}

export default App;

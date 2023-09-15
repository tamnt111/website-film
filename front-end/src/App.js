import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import Home from "./Pages/Home/Home";
import Anime from "./Pages/Anime/Anime";
import Phimbo from "./Pages/Phimbo/Phimbo";
import Phimle from "./Pages/Phimle/Phimle";
import Chieurap from "./Pages/Chieurap/Chieurap";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/phimbo" element={<Phimbo />} />
          <Route path="/phimle" element={<Phimle />} />
          <Route path="/phimbo" element={<Phimbo />} />
          <Route path="/chieurap" element={<Chieurap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

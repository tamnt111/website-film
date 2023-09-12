import React from "react";
import "./home.css";
import { Slider } from "../../Components/Slider";
import slides from "../../data/mock.json";
import MovieSlider from "../../Components/MovieSlider";
const Home = () => {
  return (
    <>
      <section className="home " id="home">
        <Slider slides={slides} />
      </section>
      <MovieSlider />
      <MovieSlider />
      <MovieSlider />
    </>
  );
};

export default Home;

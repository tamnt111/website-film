import React from "react";
import "./home.css";
import { Slider } from "../../Components/Slider";
import slides from "../../data/mock.json";
<<<<<<< HEAD
import Content from '../../Components/Contents/Content'
=======
import MovieSlider from "../../Components/MovieSlider";
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
import PopupFilm from "../../Components/PopupFilm";
const Home = () => {
  return (
    <>
      <section className="home " id="home">
        <Slider slides={slides} />
      </section>
<<<<<<< HEAD
        <Content/>
=======
      <MovieSlider />
      {/* <MovieSlider />
      <MovieSlider /> */}
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
      {/* <PopupFilm /> */}
    </>
  );
};

export default Home;

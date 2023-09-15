import React from "react";
import "./home.css";
import { Slider } from "../../Components/Slider";
import slides from "../../data/mock.json";
import Content from '../../Components/Contents/Content'
import PopupFilm from "../../Components/PopupFilm";
const Home = () => {
  return (
    <>
      <section className="home " id="home">
        <Slider slides={slides} />
      </section>
        <Content/>
      {/* <PopupFilm /> */}
    </>
  );
};

export default Home;

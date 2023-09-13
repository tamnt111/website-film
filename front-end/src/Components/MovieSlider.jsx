import React, { useRef } from "react";
import styled from "styled-components";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

import { SmoothHorizontalScrolling } from "../utils/index";
const movies = [
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
  "https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg",
];

const MovieSlider = () => {
  const sliderRef = useRef();
  const movieRef = useRef();

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    console.log(maxScrollLeft);
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  return (
    <Moviecontainer>
      <h1 className="tilte-phim">Phim nổi bật</h1>
      <Movieslider ref={sliderRef}>
        {movies.map((movie, index) => (
          <div className="movie-slider-item" key={index} ref={movieRef}>
            <img src={movie}></img>

            <div className="movie-name">Batman</div>
          </div>
        ))}
      </Movieslider>
      <div className="btnright" onClick={handleScrollRight}>
        <BiSolidRightArrow />
      </div>
      <div className="btnleft" onClick={handleScrollLeft}>
        <BiSolidLeftArrow />
      </div>
    </Moviecontainer>
  );
};

export default MovieSlider;

const Moviecontainer = styled.div`
  padding: 20px 20px 0;
  color: white;
  user-select: none;
  .btnright {
    left: 96.5%;
    position: absolute;
    top: 101%;
    z-index: 40;
    padding: 10px;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 10%;
    width: 2%;
    border-radius: 7px;
    display: flex;
    align-items: center;
    transform: translateY(-35%);
  }
  .btnleft {
    position: absolute;
    top: 101%;
    left: 1.1%;
    z-index: 40;
    padding: 10px;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 10%;
    width: 2%;
    border-radius: 7px;
    display: flex;
    align-items: center;
    transform: translateY(-35%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }
  .btnright {
    position: absolute;
    top: 101%;
    right: 1.6%;
    z-index: 40;
    padding: 10px;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 10%;
    width: 2%;
    border-radius: 7px;
    display: flex;
    align-items: center;
    transform: translateY(-35%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }
`;
const Movieslider = styled.div`
  display: grid;
  grid-template-columns: repeat(${movies.length}, 300px);
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movie-slider-item {
    opacity: 0.5;
  }

  .movie-slider-item {
    transform: scale(1);
    position: relative;
    transition: all 0.3s linear;
    overflow: hidden;
    user-select: none;
    border-radius: 5px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
    .movie-name {
      position: absolute;
      left: 0px;
      bottom: 0px;
      top: 395px;
      color: white;
      padding: 0 120px;
      text-align: center;
      font-weight: 300;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`;

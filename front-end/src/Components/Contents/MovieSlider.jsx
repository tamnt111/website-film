import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { SmoothHorizontalScrolling } from "../../utils/index";
import { FaCircle } from "react-icons/fa";
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

function MovieSlider(props) {
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

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
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
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
    <Moviecontainer draggable="false">
      <h1 className="tilte-phim">Phim nổi bật</h1>
      <Movieslider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {movies.map((movie, index) => (
          <div
            className="movie-slider-item"
            key={index}
            ref={movieRef}
            draggable="false"
          >
            <FaCircle />
            <h2>10</h2>
            <img src={movie} draggable="false" />

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
}

export default MovieSlider;

const Moviecontainer = styled.div`
  padding: 20px 20px 0;
  margin-bottom: -8%;
  color: white;
  user-select: none;
  max-height: 90%;

  .btnleft {
    position: relative;
    top: -310px;
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
    position: relative;
    top: -240px;
    left: 97%;
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

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
      transition: 0.7s;
      svg {
        color: var(--hover);
        position: absolute;
        font-size: 70px;
        top: 20px;
        left: 210px;
        opacity: 1;
      }
      h2 {
        position: absolute;
        font-size: 40px;
        top: 28px;
        left: 224px;
        opacity: 1;
      }
    }
    svg {
      color: var(--hover);
      position: absolute;
      font-size: 70px;
      top: 20px;
      left: 210px;
      opacity: 0;
    }
    h2 {
      position: absolute;
      font-size: 40px;
      top: 28px;
      left: 224px;
      opacity: 0;
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

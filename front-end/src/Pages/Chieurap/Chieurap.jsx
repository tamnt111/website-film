import React from "react";
import "./Chieurap.css";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { HiMiniBookmark } from "react-icons/hi2";
const Chieurap = () => {
  return (
    <div className="Body-container">
      <div className="Content">
        <div className="Content-left">
          <div className="content-left-item">
            <div className="content-left-item-card">
              <div className="episode-card">
                <FaCircle />
                <h1>10</h1>
              </div>
              <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
              <div className="card-text"></div>
              <div className="overlay">
                <BsPlayCircleFill />
              </div>
              <div className="title-card">
                <h1> Batman</h1>
              </div>
            </div>
            <div className="content-left-item-card">
              <div className="episode-card">
                <FaCircle />
                <h1>10</h1>
              </div>
              <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
              <div className="card-text"></div>
              <div className="overlay">
                <BsPlayCircleFill />
              </div>
              <div className="title-card">
                <h1> Batman</h1>
              </div>
            </div>
          </div>

          <div className="header-left">
            <span>Trang đầu</span>

            <Link>1</Link>
            <Link>2</Link>
            <Link>3</Link>
            <Link>4</Link>
            <span>Trang cuối</span>
          </div>
        </div>
        <div className="Content-right">
          <div className="Content-right-item">
            <div className="header-right">
              <div className="header-right-item">
                <div className="header-right">
                  <h1>Bảng xếp hạng</h1>
                  <Link> Hot Tuần</Link>
                  <Link> Hot Tháng</Link>
                  <Link> Hot Năm</Link>
                </div>
                <div className="header-right-item">
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                  <div className="card-right">
                    <h1> #1</h1>
                    <HiMiniBookmark />
                    <img src="https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg" />
                    <h2> Batman</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img className='animeimg' src='https://img.posterstore.com/zoom/wb0038-8batman-downpour50x70-83763-44377.jpg'/> */}
    </div>
  );
};

export default Chieurap;

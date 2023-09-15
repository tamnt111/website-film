import React from "react";
import "./Anime.css";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { HiMiniBookmark } from "react-icons/hi2";
import DropdownMenuGrenres from "../../Components/DropdownMenuGrenres";
import { AiFillStar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
const genres = ["Tâm lý", "Bí ẩn", "Hành động", "Phiêu lưu"];
const Anime = () => {
  return (
    <div className="Body-container">
      <div className="navbar-body">
        <DropdownMenuGrenres genres={genres} />
      </div>
      <div className="Content">
        <div className="Content-left">
          <div className="content-left-item">
            <div className="content-left-item-card">
              <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" />
              <div className="overlay">
                <p className="Name">One Piece</p>
                <p className="Star">10</p>
                <p className="Time">120min</p>
                <div className="icon">
                  <BsPlayCircleFill />
                  <AiFillStar />
                  <AiFillClockCircle />
                </div>
              </div>
            </div>
            <div className="content-left-item-card">
              <img src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" />
              <div className="overlay">
                <p className="Name">Naruto</p>
                <p className="Star">9.9</p>
                <p className="Time">120min</p>
                <div className="icon">
                  <BsPlayCircleFill />
                  <AiFillStar />
                  <AiFillClockCircle />
                </div>
              </div>
            </div>
            <div className="content-left-item-card">
              <img src="https://play-lh.googleusercontent.com/5D1OO_XvY7IqLaStfkisnJ1xCaZWMKtq-5XDH91S4O_iUSe3gwycvvaK7q0Sc6h38oU" />
              <div className="overlay">
                <p className="Name">Dragon Ball</p>
                <p className="Star">9.8</p>
                <p className="Time">120min</p>
                <div className="icon">
                  <BsPlayCircleFill />
                  <AiFillStar />
                  <AiFillClockCircle />
                </div>
              </div>
            </div>
            <div />
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

export default Anime;

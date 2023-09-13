import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser, BiSolidMoviePlay } from "react-icons/bi";
import logo from "../../logo.png";
import Search from "../../Components/Search";
import Dropdownprofile from "../../Components/dropdownprofile";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [openProfile, setopenProfile] = useState(false);

  return (
    <>
      <header>
        <Link className="logo" to="/">
          <BiSolidMoviePlay /> Movies
        </Link>

        <div className="menu-icon">
          <GiHamburgerMenu className="bx" />
        </div>

        <ul className="navbar">
          <li>
            <Link className="active" to="/">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link to="/anime">Amine</Link>
          </li>
          <li>
            <Link to="/quocgia">Phim Bộ</Link>
          </li>
          <li>
            <Link to="/phimle">Phim Lẻ</Link>
          </li>
          <li>
            <Link to="/phimbo">Chiếu Rạp</Link>
          </li>
          <li>
            <Link to="/phimbo">Liên Hệ</Link>
          </li>
        </ul>
        <Link className="btn" onClick={() => setopenProfile((prev) => !prev)}>
          <BiSolidUser />
        </Link>
        {openProfile && <Dropdownprofile />}
      </header>
      {/* <header>
                <div className='container flexSB'>
                    <nav className='flexSB'>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                            <li><Link to='/theloai'>Trang Chủ</Link></li>
                            <li><Link to='/phimbo'>Amine</Link></li>
                            <li><Link to='/quocgia'>
                                Phim Bộ

                            </Link></li>
                            <li><Link to='/phimle'>
                                Phim Lẻ

                            </Link></li>
                            <li><Link to='/phimbo'>Chiếu Rạp</Link></li>
                            <li><Link to='/phimbo'>Liên Hệ</Link></li>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <FaWindowClose /> : <GiHamburgerMenu />}
                        </button>
                    </nav>
                    <div className="account flexSB">
                        <Search />
                        <BiSolidUser />
                    </div>
                </div>
            </header >
            <img src="https://youtu.be/8MgpE2DTTKA?si=sezdfCrmxwMRdjXS" alt="" /> */}
    </>
  );
};

export default Header;

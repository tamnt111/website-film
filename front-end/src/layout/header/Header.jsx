import "./header.css";
<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidMoviePlay, BiSolidUser } from "react-icons/bi";
import { CgMenuCake } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser, BiSolidMoviePlay } from "react-icons/bi";
import logo from "../../logo.png";
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
import Search from "../../Components/Search";
import Dropdownprofile from "../../Components/dropdownprofile";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
<<<<<<< HEAD
  const [navbar, setNavbar] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!Mobile);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <header className={navbar ? 'showdown' : ''}>
=======

  return (
    <>
      <header>
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
        <Link className="logo" to="/">
          <BiSolidMoviePlay /> Movies
        </Link>

<<<<<<< HEAD
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {Mobile ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        <ul className={`navbar ${Mobile ? 'active' : ''}`} >
=======
        <div className="menu-icon">
          <GiHamburgerMenu className="bx" />
        </div>

        <ul className="navbar">
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
          <li>
            <Link className="active" to="/">
              Trang Chủ
            </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/anime">Amine</Link>
=======
            <Link to="/phimbo">Amine</Link>
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
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
<<<<<<< HEAD
        <Search />
=======
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
        <Link className="btn" onClick={() => setopenProfile((prev) => !prev)}>
          <BiSolidUser />
        </Link>
        {openProfile && <Dropdownprofile />}
<<<<<<< HEAD

      </header>

=======
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
>>>>>>> 6306f6cc4c465841c16473d62b8304c24c513fee
    </>
  );
};

export default Header;

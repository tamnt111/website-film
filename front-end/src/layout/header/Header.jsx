import "./header.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidMoviePlay, BiSolidUser } from "react-icons/bi";
import { CgMenuCake } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

import Search from "../../Components/Search";
import Dropdownprofile from "../../Components/dropdownprofile";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
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
        <Link className="logo" to="/">
          <BiSolidMoviePlay /> Movies
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {Mobile ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        <ul className={`navbar ${Mobile ? 'active' : ''}`} >
          <li>
            <Link className="active" to="/">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link to="/anime">Amine</Link>
          </li>
          <li>
            <Link to="/phimbo">Phim Bộ</Link>
          </li>
          <li>
            <Link to="/phimle">Phim Lẻ</Link>
          </li>
          <li>
            <Link to="/chieurap">Chiếu Rạp</Link>
          </li>
          <li>
            <Link to="/lienhe">Liên Hệ</Link>
          </li>
        </ul>
        <Search />
        <Link className="btn" onClick={() => setopenProfile((prev) => !prev)}>
          <BiSolidUser />
        </Link>
        {openProfile && <Dropdownprofile />}

      </header>

    </>
  );
};

export default Header;

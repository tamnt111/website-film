import "./header.css";
import { NavLink, Link } from "react-router-dom";
import React, { useRef, useState } from "react";

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
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={navbar ? "showdown" : ""}>
        <Link className="logo" to="/">
          <BiSolidMoviePlay /> Movies
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {Mobile ? <FaTimes className="clear" /> : <GiHamburgerMenu />}
        </div>

        <ul className={`navbar ${Mobile ? "active" : ""}`}>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/anime">
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/phimbo">
              Phim Bộ
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/phimle">
              Phim Lẻ
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/chieurap">
              Chiếu Rạp
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/lienhe">
              Liên Hệ
            </NavLink>
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

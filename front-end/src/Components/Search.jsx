import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

const Search = () => {
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  const handleIconClick = () => {
    setSearchActive(!searchActive);
  };
  const handleClearClick = () => {
    setSearchActive(false);
  };
  // Lắng nghe sự kiện click toàn bộ document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* <form> */}
      <div ref={searchRef}>
        <div className={`search ${searchActive ? "active-search" : ""}`}>
          <span className="icon">
            <AiOutlineSearch onClick={handleIconClick} />
            <MdClear
              className={`${searchActive ? "active-search" : ""}`}
              onClick={handleClearClick}
            />
          </span>
        </div>
        <div className={`searchBox ${searchActive ? "active-search" : ""}`}>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default Search;

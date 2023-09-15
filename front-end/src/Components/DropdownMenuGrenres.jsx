import React, { useState } from "react";
import "./DropdownMenuGrenres.css";
const DropdownMenuGrenres = ({ genres }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGenreSelect = (genre) => {
    // Xử lý việc lựa chọn thể loại ở đây
    console.log(`Bạn đã chọn thể loại: ${genre}`);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-button" onClick={toggleMenu}>
        Thể loại
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {genres.map((genre, index) => (
            <li key={index} onClick={() => handleGenreSelect(genre)}>
              {genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenuGrenres;

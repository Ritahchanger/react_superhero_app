import React from "react";
import "./index.css";
import { RiSearchLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <a href="#" className="logo">
            super<span>hero</span>
          </a>
        </div>
        <div className="search_box flex">
          <input type="text" placeholder="Search superhero..." />
          <RiSearchLine size={24} color="blue" className="search_icon"/>
        </div>
      </div>
    </header>
  );
};

export default Header;

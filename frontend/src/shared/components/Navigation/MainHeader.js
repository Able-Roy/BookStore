import React from "react";
import { NavLink } from "react-router-dom";

import "./MainHeader.css";
import logo from "../../../images/logo.png";
import phoneIcon from "../../../images/phoneIcon.ico";
import wholesaleIcon from "../../../images/wholesale.ico";
import libraryIcon from "../../../images/library.ico";
import cartIcon from "../../../images/cart.ico";

const MainHeader = (props) => {
  const options = [
    { value: "All", label: "All" },
    { value: "New", label: "New" },
    { value: "Old", label: "Old" },
  ];
  return (
    <header className="main-header">
      <div className="drawer-button" onClick={props.openDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} className="logo" alt="logo" />
      <div className="mobile">
        <img src={phoneIcon} alt="phone" />
        <span>+91-9050111218</span>
      </div>
      <div className="wholesale">
        <img src={wholesaleIcon} alt="wholesale" />
        <span>Wholesale</span>
      </div>
      <div className="library">
        <img src={libraryIcon} alt="smart library" />
        <span>Smart library</span>
      </div>
      <div className="search-section">
        <select className="sel-search">
          <option value="All">All</option>
          <option value="All">Old</option>
          <option value="All">New</option>
        </select>
        <input
          type="text"
          class="txt-search"
          placeholder="Books / Author / ISBN"
        />
        <button>SEARCH</button>
      </div>
      <div className="cart">
        <img src={cartIcon} alt="cart" />
        <span></span>
      </div>
      <NavLink className="login" to="/home">
        Login
      </NavLink>
    </header>
  );
};

export default MainHeader;

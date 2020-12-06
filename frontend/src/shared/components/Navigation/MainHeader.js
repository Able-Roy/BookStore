import React from 'react';

import './MainHeader.css';
import logo from "../../../images/logo.png";
import phoneIcon from "../../../images/phoneIcon.ico";
import wholesaleIcon from "../../../images/wholesale.ico";
import libraryIcon from "../../../images/library.ico";
const MainHeader = () => {
    return (
      <header className="main-header">
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
      </header>
    );
}

export default MainHeader;
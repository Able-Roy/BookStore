import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <MainHeader/>
      <NavLinks className="nav-links"/>
    </React.Fragment>
  );
};

export default MainNavigation;

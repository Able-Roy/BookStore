import React, { useState} from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from '../Navigation/SideDrawer';
import BackDrop from '../UIElements/BackDrop/BackDrop';

const MainNavigation = () => {

  const [isDrawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  }

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  }

  return (
    <React.Fragment>
      <MainHeader openDrawer={openDrawer} />
      {isDrawerIsOpen && <BackDrop closeDrawer={closeDrawer} />}
      <SideDrawer isOpen={isDrawerIsOpen}>
        <NavLinks />
      </SideDrawer>
      <NavLinks className="nav-links" />
    </React.Fragment>
  );
};

export default MainNavigation;

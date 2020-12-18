import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <NavLink to="/">Categories</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/">Deals Store</NavLink>
      </li>
      <li>
        <NavLink to="/">Popular Book Sets</NavLink>
      </li>
      <li>
        <NavLink to="/">99 Store</NavLink>
      </li>
      <li>
        <NavLink to="/">Classic</NavLink>
      </li>
      <li>
        <NavLink to="/">Rare And Collectable</NavLink>
      </li>
      <li>
        <NavLink to="/">Lock The Box</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

import React from "react";
import { NavLink as NavLinkReactRouter } from "react-router-dom";

const StylesActive = (isActive) => {
  return isActive ? "text-secondary-color" : "text-fourth-color";
};

const NavLink = ({ children, to, className, ...props }) => {
  return (
    <NavLinkReactRouter
      to={to}
      className={({ isActive }) => `${StylesActive(isActive)} ${className}`}
      {...props}
    >
      {children}
    </NavLinkReactRouter>
  );
};

export default NavLink;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import mobileContext from "../../context/mobileContext";

const NavButton = ({ setOpenHamburger, setIsOpenSubMenu, to, text }) => {
  const [isMobile] = useContext(mobileContext);

  return (
    <button
      onClick={() => {
        if (isMobile) setOpenHamburger();
        setIsOpenSubMenu(false);
      }}
    >
      <NavLink className={"font-bold text-white text-xl "} to={to}>
        {text}
      </NavLink>
    </button>
  );
};

export default NavButton;

import React, { useContext } from "react";
import NavLink from "./NavLink";
import mobileContext from "../../context/mobileContext";

const NavButton = ({ setOpenHamburger, to, text }) => {
  const [isMobile] = useContext(mobileContext);

  return (
    <button
      onClick={() => {
        if (isMobile) setOpenHamburger();
      }}
    >
      <NavLink className={"font-bold text-xl "} to={to}>
        {text}
      </NavLink>
    </button>
  );
};

export default NavButton;

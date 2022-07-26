import React, { useContext } from "react";
import { Link } from "react-router-dom";
import mobileContext from "../context/mobileContext";

const Logo = ({ setIsOpenHamburger }) => {
  const [isMobile] = useContext(mobileContext);
  return (
    <Link
      className="flex items-center "
      to="/"
      onClick={() => {
        if (isMobile) setIsOpenHamburger(true);
      }}
    >
      <strong className="text-xl">EPET N°6</strong>
    </Link>
  );
};

export default Logo;

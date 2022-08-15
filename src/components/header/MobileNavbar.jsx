import React, { useState } from "react";

import { CgCloseO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavbar = ({ children, setIsOpenUserMenu }) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(true);

  const setOpenHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  const childrenWithProps = () => {
    return React.Children.toArray(children).map((child) =>
      React.cloneElement(child, {
        sectionClass: `fixed flex flex-col items-start gap-4 top-12 left-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%_-_3rem)] ${
          isOpenHamburger ? "translate-x-full" : "translate-x-0"
        }`,
        setIsOpenUserMenu,
        setIsOpenHamburger,
        isOpenHamburger,
        setOpenHamburger,
      })
    );
  };

  return (
    <>
      {childrenWithProps()}
      {isOpenHamburger ? (
        <GiHamburgerMenu
          className=""
          size="40px"
          onClick={() => {
            setOpenHamburger();
            setIsOpenUserMenu(false);
          }}
        />
      ) : (
        <CgCloseO
          className=""
          size="40px"
          onClick={() => {
            setOpenHamburger();
            setIsOpenUserMenu(false);
          }}
        />
      )}
    </>
  );
};

export default MobileNavbar;

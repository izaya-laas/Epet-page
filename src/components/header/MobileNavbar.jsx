import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import Logo from "../Logo";
import DarkMode from "./DarkMode";
import AuthMenu from "./AuthMenu";
import User from "./User";

const MobileNavbar = ({
  isOpenSubMenu,
  setIsOpenSubMenu,
  isOpenUserMenu,
  setIsOpenUserMenu,
}) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(true);

  const setOpenHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };
  return (
    <>
      <NavBar
        setOpenHamburger={setOpenHamburger}
        className="flex w-full justify-between items-center mr-8"
        setIsOpenHamburger={setIsOpenHamburger}
      >
        <Logo
          setIsOpenHamburger={setIsOpenHamburger}
          setIsOpenSubMenu={setIsOpenSubMenu}
        />

        <section
          className={`fixed flex flex-col items-start gap-4 top-12 left-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%_-_3rem)] ${
            isOpenHamburger ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <NavButton
            setOpenHamburger={setOpenHamburger}
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/noticias"
            text="Noticias"
          />
          <NavButton
            setOpenHamburger={setOpenHamburger}
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/cursos"
            text="Alumnos"
          />
          <NavButton
            setOpenHamburger={setOpenHamburger}
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/ingresantes"
            text="Ingresantes"
          />
          <NavMenu
            setOpenHamburger={setOpenHamburger}
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenSubMenu={isOpenSubMenu}
          />
        </section>
        <div className="flex items-center">
          <DarkMode />
          <User
            setIsOpenUserMenu={setIsOpenUserMenu}
            isOpenUserMenu={isOpenUserMenu}
            setIsOpenHamburger={setIsOpenHamburger}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        </div>
        <AuthMenu
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenUserMenu={setIsOpenUserMenu}
        />
      </NavBar>

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

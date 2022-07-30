import { useContext, useState } from "react";
import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import NavBar from "./NavBar";

import { CgCloseO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  let [isMobile] = useContext(mobileContext);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  const [isOpenHamburger, setIsOpenHamburger] = useState(true);

  const setOpenHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full flex justify-between items-center h-12 px-4 z-20 bg-primary-color text-secondary-color`}
    >
      <div
        className={`flex items-center w-full justify-between ${
          !isMobile && "flex-row"
        }`}
      >
        {isMobile ? (
          <MobileNavbar>
            <NavBar
              className={"flex w-full justify-between items-center mr-8"}
              isOpenSubMenu={isOpenSubMenu}
              setIsOpenSubMenu={setIsOpenSubMenu}
              isOpenUserMenu={isOpenUserMenu}
              setIsOpenUserMenu={setIsOpenUserMenu}
              isOpenHamburger={isOpenHamburger}
              setOpenHamburger={setOpenHamburger}
              setIsOpenHamburger={setIsOpenHamburger}
              sectionClass={`fixed flex flex-col items-start gap-4 top-12 left-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%_-_3rem)] ${
                isOpenHamburger ? "translate-x-full" : "translate-x-0"
              }`}
            />
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
          </MobileNavbar>
        ) : (
          <DesktopNavbar>
            <NavBar
              className="flex justify-between w-full"
              isOpenSubMenu={isOpenSubMenu}
              setIsOpenSubMenu={setIsOpenSubMenu}
              isOpenUserMenu={isOpenUserMenu}
              setIsOpenUserMenu={setIsOpenUserMenu}
              sectionClass={"flex items-center justify-center gap-4"}
            />
          </DesktopNavbar>
        )}
      </div>
    </header>
  );
};

export default Header;

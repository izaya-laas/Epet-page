import { useContext, useState } from "react";
import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  let [isMobile] = useContext(mobileContext);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

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
          <MobileNavbar
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenUserMenu={isOpenUserMenu}
            setIsOpenUserMenu={setIsOpenUserMenu}
          />
        ) : (
          <DesktopNavbar
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenUserMenu={isOpenUserMenu}
            setIsOpenUserMenu={setIsOpenUserMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

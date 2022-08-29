import { useContext, useState } from "react";
import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import NavBar from "./NavBar";

const Header = () => {
  let [isMobile] = useContext(mobileContext);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  return (
    <header
      className={`sticky top-0 left-0 w-full flex justify-between items-center h-12 tablet:h-14 px-4 z-20 bg-primary-color text-secondary-color`}
    >
      <div
        className={`flex items-center w-full justify-between ${
          !isMobile && "flex-row"
        }`}
      >
        {isMobile ? (
          <MobileNavbar setIsOpenUserMenu={setIsOpenUserMenu}>
            <NavBar
              className={"flex w-full justify-between items-center mr-8"}
              isOpenUserMenu={isOpenUserMenu}
            />
          </MobileNavbar>
        ) : (
          <DesktopNavbar>
            <NavBar
              className="flex justify-between w-full"
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

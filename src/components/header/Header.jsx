import { useContext } from "react";
import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  let [isMobile] = useContext(mobileContext);

  return (
    <header
      className={`sticky top-0 left-0 w-full flex justify-between items-center h-12 px-4 z-20 bg-primary-color text-secondary-color`}
    >
      <div
        className={`flex items-center w-full justify-between ${
          !isMobile && "flex-row"
        }`}
      >
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </header>
  );
};

export default Header;

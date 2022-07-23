import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import mobileContext from "../../context/mobileContext";

const User = ({
  setIsOpenUserMenu,
  isOpenUserMenu,
  setIsOpenSubMenu,
  setIsOpenHamburger,
}) => {
  const [isMobile] = useContext(mobileContext);

  const handleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
    setIsOpenSubMenu(false);
    if (isMobile) setIsOpenHamburger(true);
  };

  return (
    <FaUserAlt
      onClick={handleUserMenu}
      className="bg-fourth-color p-2 rounded-full"
      size="40px"
    />
  );
};

export default User;

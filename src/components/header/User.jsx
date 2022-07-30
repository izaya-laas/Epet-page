import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import mobileContext from "../../context/mobileContext";

const User = ({
  setIsOpenUserMenu,
  isOpenUserMenu,
  setIsOpenSubMenu,
  setIsOpenHamburger,
  user,
}) => {
  const [isMobile] = useContext(mobileContext);

  const user_avatar = localStorage.getItem("user_avatar") || "";
  const user_name = localStorage.getItem("user_name") || "";

  const handleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
    setIsOpenSubMenu(false);
    if (isMobile) setIsOpenHamburger(true);
  };

  return (
    <>
      {!user ? (
        <FaUserAlt
          onClick={handleUserMenu}
          className="bg-fourth-color p-2 rounded-full"
          size="40px"
        />
      ) : (
        <div
          onClick={handleUserMenu}
          className="bg-fourth-color rounded-full overflow-hidden w-[40px] h-[40px] border"
        >
          <img
            src={user_avatar}
            className="w-[38px] h-[38px] "
            alt={user_name}
          />
        </div>
      )}
    </>
  );
};

export default User;

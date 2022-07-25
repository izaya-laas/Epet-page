import { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import mobileContext from "../../context/mobileContext";

const initialAvatar = localStorage.getItem("user_avatar") || "";
const initialName = localStorage.getItem("user_name") || "";
const initialUser = {
  name: initialName,
  avatar: initialAvatar,
};

const User = ({
  setIsOpenUserMenu,
  isOpenUserMenu,
  setIsOpenSubMenu,
  setIsOpenHamburger,
}) => {
  const [isMobile] = useContext(mobileContext);
  const [user, setUser] = useState(initialUser);

  const handleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
    setIsOpenSubMenu(false);
    if (isMobile) setIsOpenHamburger(true);
  };

  return (
    <>
      {!user.avatar ? (
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
            src={user.avatar}
            className="w-[38px] h-[38px] "
            alt={user.name}
          />
        </div>
      )}
    </>
  );
};

export default User;

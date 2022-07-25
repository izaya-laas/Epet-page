import { singout } from "../services/auth";
import { IoLogOutOutline } from "react-icons/io5";

const ButtonLogout = ({ setIsOpenUserMenu }) => {
  return (
    <button
      onClick={() => {
        singout();
        setIsOpenUserMenu(false);
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_avatar");
        console.log("Borrando");
      }}
      className="flex items-center bg-primary-color py-2 px-8 rounded-lg mx-auto text-fourth-color w-36 text-sm h-8"
    >
      <IoLogOutOutline className="mr-2 scale-125 text-red-500" />
      Logout
    </button>
  );
};

export default ButtonLogout;

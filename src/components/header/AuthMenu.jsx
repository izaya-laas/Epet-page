import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import ButtonGoogle from "../ButtonGoogle";
import ButtonLogout from "../ButtonLogout";

const AuthMenu = ({ isOpenUserMenu, setIsOpenUserMenu }) => {
  const [userData, setUserData] = useState(null);
  const { user, userOnline } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const { user_metadata } = user;
      const { avatar_url, full_name } = user_metadata;

      setUserData({
        fullname: full_name,
        avatar: avatar_url,
      });
    }
  }, [user]);

  return (
    <aside
      className={`absolute min-w-[10rem] w-1/5 pb-6 text-center bg-[#1c2336] text-fourth-color right-0 top-12 rounded-bl-xl transition-transform duration-300 ${
        isOpenUserMenu ? "" : "translate-x-80"
      }`}
    >
      {!userOnline ? (
        <>
          <p className="mt-2 mb-4 pb-1 border-b">Inicia sesión</p>
          <ButtonGoogle />
        </>
      ) : (
        <>
          <p className="mt-2 mb-4 pb-1 border-b">
            {userData && userData.fullname}
          </p>
          <ButtonLogout setIsOpenUserMenu={setIsOpenUserMenu} />
          <Link
            to="/perfil"
            className="bg-primary-color mt-2 w-36 block py-1 px-8 rounded-lg mx-auto text-fourth-color text-sm h-8"
          >
            Ver tu perfil
          </Link>
        </>
      )}
    </aside>
  );
};

export default AuthMenu;

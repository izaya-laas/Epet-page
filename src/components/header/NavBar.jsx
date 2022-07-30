import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import Logo from "../Logo";
import DarkMode from "./DarkMode";
import AuthMenu from "./AuthMenu";
import User from "./User";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NavBar = ({
  className,
  isOpenSubMenu,
  setIsOpenSubMenu,
  isOpenUserMenu,
  setIsOpenUserMenu,
  sectionClass,
  setOpenHamburger,
  setIsOpenHamburger,
}) => {
  const { user, userOnline } = useContext(AuthContext);

  return (
    <nav className={className}>
      <Logo
        setIsOpenHamburger={setIsOpenHamburger}
        setIsOpenSubMenu={setIsOpenSubMenu}
      />
      <section className={sectionClass}>
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
          user={user}
        />
      </div>
      <AuthMenu
        isOpenUserMenu={isOpenUserMenu}
        setIsOpenUserMenu={setIsOpenUserMenu}
        userOnline={userOnline}
      />
    </nav>
  );
};

export default NavBar;

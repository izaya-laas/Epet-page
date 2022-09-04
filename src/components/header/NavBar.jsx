import NavButton from "./NavButton";
import Logo from "../Logo";
import DarkMode from "./DarkMode";
import AuthMenu from "./AuthMenu";
import User from "./User";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NavBar = ({
  className,
  isOpenUserMenu,
  setIsOpenUserMenu,
  sectionClass,
  setOpenHamburger,
  setIsOpenHamburger,
}) => {
  const { user, userOnline } = useContext(AuthContext);

  return (
    <nav className={className}>
      <Logo setIsOpenHamburger={setIsOpenHamburger} />
      <section className={sectionClass}>
        <NavButton
          setOpenHamburger={setOpenHamburger}
          to="/escuela"
          text="Nuestra Escuela"
        />
        <NavButton
          setOpenHamburger={setOpenHamburger}
          to="/cursos"
          text="Alumnos"
        />
        <NavButton
          setOpenHamburger={setOpenHamburger}
          to="/ingresantes"
          text="Ingresantes"
        />

        <NavButton
          setOpenHamburger={setOpenHamburger}
          to="/noticias"
          text="Noticias"
        />
      </section>
      <div className="flex items-center -translate-x items">
        <DarkMode />
        <User
          setIsOpenUserMenu={setIsOpenUserMenu}
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenHamburger={setIsOpenHamburger}
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

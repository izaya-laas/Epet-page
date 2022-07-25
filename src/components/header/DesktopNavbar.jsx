import NavBar from "./NavBar";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import Logo from "../Logo";
import DarkMode from "./DarkMode";
import AuthMenu from "./AuthMenu";
import User from "./User";

const DesktopNavbar = ({
  isOpenSubMenu,
  setIsOpenSubMenu,
  isOpenUserMenu,
  setIsOpenUserMenu,
}) => {
  return (
    <>
      <NavBar className="flex justify-between w-full">
        <Logo setIsOpenSubMenu={setIsOpenSubMenu} />

        <section className="flex items-center justify-center gap-4">
          <NavButton
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/noticias"
            text="Noticias"
          />
          <NavButton
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/cursos"
            text="Alumnos"
          />
          <NavButton
            setIsOpenSubMenu={setIsOpenSubMenu}
            to="/ingresantes"
            text="Ingresantes"
          />
          <NavMenu
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenSubMenu={isOpenSubMenu}
          />
        </section>
        <div className="flex items-center">
          <DarkMode />
          <User
            setIsOpenUserMenu={setIsOpenUserMenu}
            isOpenUserMenu={isOpenUserMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        </div>
        <AuthMenu
          isOpenUserMenu={isOpenUserMenu}
          setIsOpenUserMenu={setIsOpenUserMenu}
        />
      </NavBar>
    </>
  );
};

export default DesktopNavbar;

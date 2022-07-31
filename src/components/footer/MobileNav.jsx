import React from "react";
import { Link } from "react-router-dom";
import ItemLink from "./ItemLink";
import SocialNav from "./SocialNav";

const MobileNav = () => {
  return (
    <div className="text-center tablet:flex desktop:text-lg tablet:border-b tablet:justify-between tablet:items-center">
      <nav>
        <ul className="tablet:flex tablet:gap-2">
          <ItemLink className="before:border before:absolute before:w-[75%] before:-bottom-1 tablet:before:content-none tablet:border-r tablet:pr-2">
            <Link to="/contacto">Contacto</Link>
          </ItemLink>
          <ItemLink className="before:border before:absolute before:w-[50%] before:-bottom-1 tablet:before:content-none tablet:border-r tablet:pr-2">
            <Link to="/noticias">Noticias</Link>
          </ItemLink>
          <ItemLink className="before:border before:absolute before:w-[75%] before:-bottom-1 tablet:before:content-none tablet:border-r tablet:pr-2">
            <Link to="/cursos">Alumnos</Link>
          </ItemLink>
          <ItemLink>
            <Link to="/ingresantes">Ingresantes</Link>
          </ItemLink>
        </ul>
      </nav>
      <SocialNav />
    </div>
  );
};

export default MobileNav;

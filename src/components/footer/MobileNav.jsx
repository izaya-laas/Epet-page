import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="text-center">
      <nav>
        <ul>
          <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[75%] before:-bottom-1">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[50%] before:-bottom-1">
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[75%] before:-bottom-1">
            <Link to="/cursos">Alumnos</Link>
          </li>
          <li className="text-sky-300 font-bold">
            <Link to="/ingresantes">Ingresantes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

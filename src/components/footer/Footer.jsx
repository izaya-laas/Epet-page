import React from "react";
import Subtitle from "../Subtitle";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] mt-8 p-4">
      <div className="text-center">
        <nav>
          <ul>
            <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[75%] before:-bottom-1">
              Contacto
            </li>
            <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[50%] before:-bottom-1">
              Noticias
            </li>
            <li className="text-sky-300 relative flex justify-center font-bold mb-2 before:border before:absolute before:w-[75%] before:-bottom-1">
              Alumnos
            </li>
            <li className="text-sky-300 font-bold">Ingresantes</li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-8">
        <nav className="flex justify-center gap-4 relative font-bold mb-2 before:border before:absolute before:w-[100%] before:-bottom-2 before:border-">
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 ">
            <FaFacebookF />
          </div>
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 ">
            <FaInstagram />
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center mt-4 text-white ">
        <Logo />
        <div className="mt-2">
          <ul>
            <li className="text-center">
              <BsTelephone className="inline mr-2" />
              2302-210818
            </li>
            <li className="text-center">
              <AiOutlineMail className="inline mr-2" />
              epetn6realico@epet6.edu.ar
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

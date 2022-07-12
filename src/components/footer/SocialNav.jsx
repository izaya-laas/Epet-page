import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialNav = () => {
  return (
    <div className="text-center mt-8 text-black ">
      <nav className="flex justify-center gap-4 relative font-bold mb-2 before:border before:absolute before:w-[100%] before:-bottom-2 before:border-">
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 ">
          <FaFacebookF />
        </div>
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 ">
          <FaInstagram />
        </div>
      </nav>
    </div>
  );
};

export default SocialNav;

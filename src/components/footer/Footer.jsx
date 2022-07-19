import React from "react";
import { useContext } from "react";
import darkContext from "../../context/darkContext";

import Contact from "./Contact";
import MobileNav from "./MobileNav";
import SocialNav from "./SocialNav";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] p-4">
      <MobileNav />
      <SocialNav />
      <Contact />
    </footer>
  );
};

export default Footer;

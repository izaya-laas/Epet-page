import React from "react";

import Contact from "./Contact";
import MobileNav from "./MobileNav";
import SocialNav from "./SocialNav";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] mt-8 p-4">
      <MobileNav />
      <SocialNav />
      <Contact />
    </footer>
  );
};

export default Footer;

import React from "react";

import Contact from "./Contact";
import MobileNav from "./MobileNav";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] p-4 tablet:pt-6 tablet:px-[12.5%]">
      <MobileNav />
      <Contact />
    </footer>
  );
};

export default Footer;

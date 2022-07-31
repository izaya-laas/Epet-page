import React from "react";

import Contact from "./Contact";
import MobileNav from "./MobileNav";
import Wave from "./Wave";

const Footer = () => {
  return (
    <>
      <Wave />
      <footer className="bg-[#0f172a] p-4 tablet:pt-6 tablet:py-10 tablet:px-[12.5%]">
        <MobileNav />
        <Contact />
      </footer>
    </>
  );
};

export default Footer;

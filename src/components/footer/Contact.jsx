import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Logo from "../Logo";

const Contact = () => {
  return (
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
  );
};

export default Contact;

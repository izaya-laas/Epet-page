import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 text-white tablet:flex-row tablet:justify-start">
      <Link to="/">
        <strong className="text-xl">EPET N°6</strong>
      </Link>
      <div className="mt-2 text-center tablet:text-start tablet:ml-4 tablet:text-sm">
        <ul>
          <li>
            <a href="tel:+542302210818">
              <BsTelephone className="inline mr-2" />
              2302-210818
            </a>
          </li>
          <li c>
            <a href="mailto:lautaronorielasat@gmail.com">
              <AiOutlineMail className="inline mr-2" />
              epetn6realico@epet6.edu.ar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

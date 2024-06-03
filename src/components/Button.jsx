import React from "react";
import { navLinks } from "../constants";

const Button = ({ styles }) => (
  <a href='#clients'>
     <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Commencer
  </button>
  </a>
 
);

export default Button;

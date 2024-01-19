import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a target='_blank' href='https://unstop.com/hackathons/fill-the-void-redefining-hackathon-iit-jammu-869973'>
      Register
    </a>
  </button>
);

export default Button;

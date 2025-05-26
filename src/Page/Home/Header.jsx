import React from "react";
import { logo } from "../../assets";

const Header = () => {
  return (
    <div className="flex shadow-md h-[70px]  justify-center w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6">
      <div className="flex justify-center gap-2 overflow-hidden  items-center bg-white rounded-xl">
        <img className="w-10 h-10 " src={logo} />
        <span className="p-1">Gu Của Bạn</span>
      </div>
    </div>
  );
};

export default Header;

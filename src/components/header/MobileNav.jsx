"use client";

import React, { useState } from "react";
import Hamburgar from "./Hamburgar";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16  flex items-center justify-center bg-black">
      <div className="w-[calc(100%-24px)]  h-full flex items-center justify-between ">
        <div className="w-1/4  flex items-center justify-start ">
          <Hamburgar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-2/4 h-full  flex items-center justify-center">
          <input
            name="searchbox"
            type="text"
            className="w-[146px] h-[31px] border border-[#CED4DA] pl-2 text-[#8590A6] flex items-center justify-start 
            rounded outline-none focus:border-gray-400"
            placeholder="Gruppe suchen"
          />
        </div>

        <div className="w-1/4 h-full  flex justify-end">
          <div className=" w-[75px] h-[60px] flex items-center justify-end   ">
            <div className="  w-full h-1/2 bg-Logo bg-contain bg-no-repeat "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

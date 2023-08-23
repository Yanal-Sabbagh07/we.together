"use client";

import React, { useState } from "react";
import Hamburgar from "./Hamburgar";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-16  w-full items-center justify-center bg-black">
      <div className="flex  h-full w-[calc(100%-24px)] items-center justify-between ">
        <div className="flex  w-1/4 items-center justify-start ">
          <Hamburgar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex h-full  w-2/4 items-center justify-center">
          <input
            name="searchbox"
            type="text"
            className="flex h-[31px] w-[146px] items-center justify-start rounded border border-[#CED4DA] pl-2 
            text-[#8590A6] outline-none focus:border-gray-400"
            placeholder="Gruppe suchen"
          />
        </div>

        <div className="flex h-full  w-1/4 justify-end">
          <div className=" flex h-[60px] w-[75px] items-center justify-end   ">
            <div className="  h-1/2 w-full bg-Logo bg-contain bg-no-repeat "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 w-[calc(100vw-48px)]  text-base flex items-center justify-between font-base  ">
      <div className="w-[1124px] h-[41px] flex items-center justify-between">
        <div className="h-full flex items-center justify-start gap-8 tracking-wider text-text-primary ">
          <Link className="hover:font-bold" href="/">
            Startseite
          </Link>
          <Link className="hover:font-bold" href="/">
            Gruppen
          </Link>
          <Link className="hover:font-bold" href="/">
            Blog
          </Link>
          <Link className="hover:font-bold" href="/">
            Preisübersicht
          </Link>
          <Link className="hover:font-bold" href="/about">
            Über uns
          </Link>
        </div>
        <div className=" w-[75px] h-[60px] flex items-center justify-center ">
          <div className="  w-full h-1/2 bg-Logo bg-contain bg-no-repeat "></div>
        </div>
        <input
          name="searchbox"
          type="text"
          className="w-[186px] h-[31px] border border-[#CED4DA] pl-2 text-[#8590A6] flex items-center justify-start rounded outline-none focus:border-gray-400"
          placeholder="Gruppe suchen"
        />
      </div>
      <div className="flex items-center justify-between gap-10">
        <Link className="w-[73px] h-6 hover:font-bold" href="/">
          Anmelden
        </Link>
        <Link
          className="w-[115px] h-8 border flex items-center justify-center bg-[#A64D79] text-[#fcfcfc] rounded hover:bg-[#954573]"
          href="/"
        >
          Mitglied werden
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

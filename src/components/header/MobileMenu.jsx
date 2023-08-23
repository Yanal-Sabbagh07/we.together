import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className="absolute right-0 top-16 w-full bg-white duration-300 "
      style={{
        left: isOpen ? "0px" : "-100vw",
        opacity: isOpen ? "1" : "0.5",
      }}
    >
      <ul
        className=" flex min-h-[calc(100svh-64px)] w-full transform flex-col items-center justify-evenly  text-gray-700 "
        onClick={() => setIsOpen(false)}
      >
        <li className="">
          <Link
            href="/"
            className={pathname === "/" ? "active-mobile" : "navlink"}
          >
            Startseite
          </Link>
        </li>
        <li className="">
          <Link
            href="/"
            className={pathname === "/" ? "active-mobile" : "navlink"}
          >
            Gruppen
          </Link>
        </li>
        <li className="">
          <Link
            href="/"
            className={pathname === "/" ? "active-mobile" : "navlink"}
          >
            Blog
          </Link>
        </li>
        <li className="">
          <Link
            href="/"
            className={pathname === "/" ? "active-mobile" : "navlink"}
          >
            Preisübersicht Über uns
          </Link>
        </li>
        <li className="">
          <Link
            href="/about"
            className={pathname === "/" ? "active-mobile" : "navlink"}
          >
            Über uns
          </Link>
        </li>
        <li>
          <Link className="w-[73px] h-6 hover:font-bold" href="/">
            Anmelden
          </Link>
        </li>
        <li>
          <Link
            className="w-[115px] h-8 border flex items-center justify-center bg-[#A64D79] text-[#fcfcfc] rounded hover:bg-[#954573]"
            href="/"
          >
            Mitglied werden
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="w-full h-[292px] flex items-center justify-center border-t ">
      <div className="w-[calc(100%-180px)] flex items-center justify-between">
        <div className="bg-Logo w-[117px] h-[55px] bg-contain bg-no-repeat"></div>

        <div className="flex flex-col gap-2">
          <div className="font-medium text-2xl mb-4 -ml-5">Rechtliches</div>
          <Link href="/about">Über uns</Link>
          <Link href="/">Impressum</Link>
          <Link href="/">Datenschutz</Link>
          <Link href="/">AGB</Link>
          <Link href="/">Wiederufsrecht</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="flex h-[292px]  w-full items-center justify-center border-t bg-black text-white lg:bg-transparent lg:text-text-primary">
      <div className="flex w-[95vw] items-center justify-between lg:w-[calc(100%-180px)]">
        <div className="h-[55px] w-[117px] bg-Logo bg-contain bg-no-repeat"></div>

        <div className="flex flex-col gap-2">
          <div className="-ml-5 mb-4 text-2xl font-medium">Rechtliches</div>
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

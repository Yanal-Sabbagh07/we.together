import Link from "next/link";
import React from "react";

const GroupCard = ({ img, link }) => {
  return (
    <div>
      <div
        className={`${img} mb-4 h-[288px] w-[90vw] bg-cover lg:mb-8 lg:w-[304px]`}
      ></div>
      <div className=" flex w-[90vw] items-center gap-4 lg:w-[304px]">
        <Link href="/">{link}</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="16"
          viewBox="0 0 26 16"
          fill="none"
        >
          <path
            d="M24.8156 8.84456C25.2061 8.45403 25.2061 7.82087 24.8156 7.43034L18.4516 1.06638C18.0611 0.675859 17.428 0.675859 17.0374 1.06638C16.6469 1.45691 16.6469 2.09007 17.0374 2.4806L22.6943 8.13745L17.0374 13.7943C16.6469 14.1848 16.6469 14.818 17.0374 15.2085C17.428 15.599 18.0611 15.599 18.4516 15.2085L24.8156 8.84456ZM0.934692 9.13745H24.1085V7.13745H0.934692V9.13745Z"
            fill="#1E1E1E"
          />
        </svg>
      </div>
    </div>
  );
};

export default GroupCard;

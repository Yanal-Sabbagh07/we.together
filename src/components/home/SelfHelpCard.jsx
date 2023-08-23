import Link from "next/link";
import React from "react";

const GroupCard = ({ img, title, text }) => {
  return (
    <div className="w-[395px]">
      <div
        className={`${img} mb-4 h-[317px] w-full  rounded-lg bg-cover lg:mb-8`}
      ></div>
      <div className=" flex w-[93vw] items-center gap-4 lg:w-[304px]">
        <h4 className="mb-[12px] text-2xl font-bold text-text-primary">
          {title}
        </h4>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default GroupCard;

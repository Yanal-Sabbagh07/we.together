import Link from "next/link";
import React from "react";

const GroupCard = ({ img, title, text }) => {
  return (
    <div className="w-[395px]">
      <div
        className={`${img} bg-cover w-full h-[317px]  mb-8 rounded-lg`}
      ></div>
      <div className=" w-[304px] flex items-center gap-4">
        <h4 className="text-2xl font-bold text-text-primary mb-[12px]">
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

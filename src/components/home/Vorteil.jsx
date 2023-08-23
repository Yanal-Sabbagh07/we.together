import React from "react";

const Vorteil = ({ number, header, content }) => {
  return (
    <div className="flex h-[80px]  w-[400px]  gap-6 lg:h-[120px]">
      <div className="flex h-full w-[74px] items-center justify-center text-[56px] font-bold text-brand-primary lg:text-[56px]">
        {number}
      </div>
      <div className="flex h-full flex-col justify-evenly">
        <h1 className="text-xl font-bold tracking-wider text-text-primary lg:text-2xl">
          {header}
        </h1>
        <p className="text-base text-text-primary">{content}</p>
      </div>
    </div>
  );
};

export default Vorteil;

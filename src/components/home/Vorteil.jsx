import React from "react";

const Vorteil = ({ number, header, content }) => {
  return (
    <div className="w-[400px] h-[120px]  flex gap-6">
      <div className="h-full w-[74px] text-brand-primary text-[56px] flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="h-full flex flex-col justify-evenly">
        <h1 className="text-2xl font-bold tracking-wider text-text-primary">
          {header}
        </h1>
        <p className="text-base text-text-primary">{content}</p>
      </div>
    </div>
  );
};

export default Vorteil;

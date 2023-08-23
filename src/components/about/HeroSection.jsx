import React from "react";
import Mession from "./Mession";

const HeroSection = () => {
  return (
    <div className="pt-10">
      <div className="w-full h-full flex flex-col items-center justify-start">
        <h4 className="text-text-primary text-[64px] text-center w-[700px] leading-[76px] mb-8">
          Wir demokratisieren Selbsthilfegruppen
        </h4>
        <p className="w-[700px] text-center text-xl mb-12">
          Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen
          Lebenssituationen zu unterstützen und haben damit auch eine
          Lebensaufgabe gewählt.
        </p>
        <div className="w-full h-[303px] flex justify-between mb-[88px]">
          <div className="bg-mom-daughter bg-cover rounded-lg w-[320px] h-full"></div>
          <div className="  w-[320px] h-full flex flex-col justify-between">
            <div className="w-full h-[208px] bg-friends-4 bg-cover rounded-lg"></div>
            <div className="w-full h-[83px] bg-light-blue rounded-lg"></div>
          </div>
          <div className=" w-[320px] h-full flex flex-col justify-between">
            <div className="w-full h-[88px] bg-light-yellow rounded-lg"></div>
            <div className="w-full h-[203px] bg-interview bg-cover rounded-lg"></div>
          </div>
          <div className="bg-woman-laptop bg-cover rounded-lg w-[320px] h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

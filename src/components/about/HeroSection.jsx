"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="mt-20 w-full lg:mt-10"
    >
      <div className="flex h-full  flex-col items-center justify-start">
        <h4 className="mb-8 w-[340px] text-center text-[32px] font-bold text-text-primary lg:w-[700px] lg:text-[64px] lg:leading-[76px]">
          Wir demokratisieren Selbsthilfegruppen
        </h4>
        <p className="mb-8 text-center text-xl lg:mb-12  lg:w-[700px]">
          Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen
          Lebenssituationen zu unterstützen und haben damit auch eine
          Lebensaufgabe gewählt.
        </p>
        <div className="mb-16 flex h-[205px] w-full justify-between lg:mb-[88px] lg:h-[303px]">
          <div className="hidden h-full  bg-mom-daughter bg-cover lg:block lg:w-[320px] "></div>
          <div className="  flex h-full w-[38%] flex-col justify-between  lg:w-[320px]  ">
            <div className="h-[160px] w-full rounded bg-friends-4 bg-cover bg-center lg:h-[208px] lg:rounded-lg"></div>
            <div className=" h-[40px] w-full rounded bg-light-blue lg:h-[83px] lg:rounded-lg"></div>
          </div>
          <div className=" flex h-full  w-[60%] flex-col justify-between lg:w-[320px]">
            <div className="h-[50px] w-full rounded bg-light-yellow lg:h-[88px] lg:rounded-lg"></div>
            <div className="h-[150px] w-full rounded bg-interview bg-cover bg-center bg-no-repeat lg:h-[203px] lg:rounded-lg"></div>
          </div>
          <div className="hidden h-full w-[320px] rounded-lg bg-woman-laptop bg-cover lg:block"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

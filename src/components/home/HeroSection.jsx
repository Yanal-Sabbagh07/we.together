"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.75 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="lg:min-h-[calc(100vh-65px)] "
    >
      <div className=" mt-16 flex h-[416px] w-full items-start justify-between  lg:mt-8 lg:h-[614px]">
        <div className="flex  h-full flex-col justify-center gap-10 lg:max-w-[570px]">
          <h1 className="text-center text-[32px] text-text-primary lg:text-left lg:text-[64px]">
            Online <br />
            Selbsthilfegruppen
          </h1>
          <p className="text-center text-xl lg:w-[95%] lg:text-left">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <div className="text-center lg:text-left">
            <button className="h-[30px] w-[107px] rounded bg-brand-primary text-center text-xl text-white">
              Jetzt starten
            </button>
          </div>
        </div>

        <div className="hidden h-[614px] gap-2 lg:flex">
          <div className="flex flex-col gap-3">
            <div className="h-[83px] w-[340px]  rounded-xl bg-light-blue"></div>
            <div className="h-[200px] w-[340px]  bg-hero-woman-1 bg-cover "></div>
            <div className="h-[256.5px] w-[340px]  bg-hero-woman-2 bg-cover"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-[450px] w-[340px] bg-hero-man bg-cover"></div>
            <div className="h-[88px] w-[340px]  rounded-lg bg-light-yellow"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

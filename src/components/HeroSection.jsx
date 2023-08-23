import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-65px)] ">
      <div className="w-full h-[614px] mt-8 flex items-start justify-between">
        <div className="max-w-[570px]  h-full flex flex-col gap-10 justify-center">
          <h1 className="text-[64px] text-text-primary">
            Online <br />
            Selbsthilfegruppen
          </h1>
          <p className="text-xl w-[95%]">
            Tausche Dich mit anderen Betroffenen aus oder starte eine neue
            Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
            Lebenssituation.
          </p>
          <button className="bg-brand-primary w-[107px] h-[30px] text-white text-xl">
            Jetzt starten
          </button>
        </div>

        <div className="flex gap-2 h-[614px] ">
          <div className="flex flex-col gap-3">
            <div className="w-[340px] h-[83px]  bg-light-blue rounded-xl"></div>
            <div className="w-[340px] h-[200px]  bg-hero-woman-1 bg-cover "></div>
            <div className="w-[340px] h-[256.5px]  bg-hero-woman-2 bg-cover"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[340px] h-[450px] bg-hero-man bg-cover"></div>
            <div className="w-[340px] h-[88px]  bg-light-yellow rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

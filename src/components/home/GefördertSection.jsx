import React from "react";
import Vorteil from "./Vorteil";
const Gefördert = () => {
  return (
    <div className="mb-16 w-full lg:mb-0 lg:w-[1312px]">
      <div className=" h-full w-full  lg:mb-[88px] lg:h-[184px]">
        <div>
          <h1 className="text-left text-[22px] font-semibold text-black lg:text-[32px] lg:font-black">
            Gefördert durch
          </h1>
        </div>
        <div className="mb-16 h-[42px] w-full bg-companies bg-contain bg-no-repeat lg:mb-0 lg:h-[94px] lg:w-[1308px]"></div>
      </div>
      <div className="mb-16 flex  w-full items-center justify-center rounded-xl bg-light-blue tracking-wider lg:mb-[88px]">
        <p className="w-95% pb-16 pt-16 text-center text-[20px] font-normal text-[#fcfcfc] lg:w-[670px] lg:text-[32px]">
          In der von Adrian gegründeten Gruppe, spricht Torsten über seine
          Panikattacken und Merve fühlt sich endlich verstanden.
        </p>
      </div>
      <div>
        <div className=" flex w-full flex-col  justify-between   lg:mb-[88px] lg:h-[387px]">
          <h1 className="mb-8 text-left text-[24px] font-black text-black lg:mb-0 lg:text-[32px]">
            Deine Vorteile mit we.together
          </h1>
          <div className=" flex flex-wrap items-start justify-between gap-12 lg:gap-12">
            <Vorteil
              number="01"
              header="Fortlaufende Gruppen"
              content="Tausch Dich regelmäßig mit Menschen aus, die in einer ähnlichen Situation sind wie Du um gemeinsam zu heilen."
            />
            <Vorteil
              number="02"
              header="Anonymität"
              content="Deine Sicherheit liegt uns besonders am Herzen, deshalb achten wir sehr auf Deine Anonymität auf der Plattform."
            />
            <Vorteil
              number="03"
              header="Jederzeit zugänglich"
              content="Alle Gruppen finden online per Video-Call statt. Unabhängig von deinem Wohnort und deiner Lebenssituation."
            />
            <Vorteil
              number="04"
              header="Von Psychologen entwickelt"
              content="Unsere Gruppen-Konzepte werden von Psycholog/innen mit dem Feedback von Betroffenen entwickelt. "
            />
            <Vorteil
              number="05"
              header="Kostenlos ausprobieren"
              content="Um zu schauen, ob dir we.together hilft, hast du die Möglichkeit es kostenlos in 5 Terminen unverbindlich auszuprobieren."
            />
            <Vorteil
              number="06"
              header="Keine Wartezeit"
              content="Auf we.together findest Du zahlreiche Selbsthilfegruppen zu verschiedenen Themen mit täglichen Angeboten."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gefördert;

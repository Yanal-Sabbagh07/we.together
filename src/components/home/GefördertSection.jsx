import React from "react";
import Vorteil from "./Vorteil";
const Gefördert = () => {
  return (
    <div className="w-[1312px]">
      <div className="w-full h-[184px] mb-[88px]">
        <div>
          <h1 className="text-[32px] text-black text-left font-black">
            Gefördert durch
          </h1>
        </div>
        <div className="w-[1308px] h-[94px] bg-companies bg-cover"></div>
      </div>
      <div className="w-full  flex items-center justify-center bg-light-blue tracking-wider rounded-xl mb-[88px]">
        <p className="w-[670px] text-[32px] text-center font-normal text-[#fcfcfc] pt-16 pb-16">
          In der von Adrian gegründeten Gruppe, spricht Torsten über seine
          Panikattacken und Merve fühlt sich endlich verstanden.
        </p>
      </div>
      <div>
        <div className="w-full h-[387px] mb-[88px]  flex flex-col justify-between">
          <h1 className="text-[32px] text-black text-left font-black">
            Deine Vorteile mit we.together
          </h1>
          <div className=" flex flex-wrap justify-between items-start gap-12">
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

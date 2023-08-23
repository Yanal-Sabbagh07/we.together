import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="w-[1312px] bg-light-yellow rounded-lg mb-[88px] pt-10 pb-10 ">
      <div className=" w-full  h-[334px] flex flex-col items-center justify-start ">
        <h4 className="text-2xl font-bold text-text-primary mb-2 ">
          Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
        </h4>
        <p className="w-[640px] text-center text-text-primary mb-8">
          Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95 €
          / Monat an unbegrenzt vielen Gruppen teilnehmen.
        </p>
        <div className="w-[454px] h-[104px] border border-brand-secondary rounded-lg bg-brand-white flex items-center justify-center gap-6 mb-2">
          <div className="h-full  flex items-center justify-evenly">
            <div className="w-[53.5px] h-[53.5px] flex items-center justify-center bg-tree bg-cover bg-light-yellow rounded-full"></div>
          </div>
          <div>
            <h4 className="text-text-primary font-bold text-2xl">
              5 Teilnahmen kostenlos
            </h4>
            <p>Danach 19,95 € / Monat. Jederzeit kündbar</p>
          </div>
        </div>
        <div className="mb-8">
          <p>
            We.together ist kostenlos für Gruppenmoderatoren
            <Link href="/" className="text-brand-primary font-semibold">
              {"  "}- Jetzt mehr erfahren.
            </Link>
          </p>
        </div>
        <div className="">
          <button className="w-[150px] h-10 bg-brand-primary text-brand-white rounded tracking-wide">
            Jetzt testen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

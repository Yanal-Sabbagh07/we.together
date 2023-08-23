import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="mb-16 w-full rounded-lg bg-light-yellow pb-10 pt-10 lg:mb-[88px] lg:w-[1312px]">
      <div className=" flex  h-[334px] w-full flex-col items-center justify-start ">
        <h4 className="mb-2 text-center text-2xl font-bold text-text-primary ">
          Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
        </h4>
        <p className="mb-8 text-center text-text-primary lg:w-[640px]">
          Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95 €
          / Monat an unbegrenzt vielen Gruppen teilnehmen.
        </p>
        <div className="mb-2 flex h-[104px] w-[90%] items-center justify-center gap-6 rounded-lg border border-brand-secondary bg-brand-white lg:w-[454px]">
          <div className="flex  h-full items-center justify-evenly">
            <div className="flex h-[53.5px] w-[53.5px] items-center justify-center rounded-full bg-light-yellow bg-tree bg-cover"></div>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-text-primary">
              5 Teilnahmen kostenlos
            </h4>
            <p>Danach 19,95 € / Monat. Jederzeit kündbar</p>
          </div>
        </div>
        <div className="mb-8">
          <p>
            We.together ist kostenlos für Gruppenmoderatoren
            <Link href="/" className="font-semibold text-brand-primary">
              {"  "}- Jetzt mehr erfahren.
            </Link>
          </p>
        </div>
        <div className="">
          <button className="h-10 w-[150px] rounded bg-brand-primary tracking-wide text-brand-white">
            Jetzt testen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

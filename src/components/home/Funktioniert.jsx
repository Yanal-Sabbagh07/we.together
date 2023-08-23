import React from "react";

const Funktioniert = () => {
  return (
    <div className="mb-[88px] flex flex-col  justify-between lg:h-[905px] lg:w-[1312px]">
      <div>
        <h4 className="mb-10 text-[24px] font-bold tracking-wider text-text-primary lg:mb-0 lg:text-[32px]">
          So funktioniert we.together
        </h4>
      </div>
      <div className="mb-16 flex h-[200px] w-full items-center justify-between gap-4  lg:mb-0 lg:h-[394px] lg:gap-20">
        <div className="h-full w-1/2 rounded-lg bg-old-man bg-cover bg-center"></div>
        <div className="flex h-[200px]  w-1/2 flex-col items-start justify-between">
          <h1 className="text-xl font-bold tracking-wider lg:text-2xl">
            Finde deine Gruppe
          </h1>
          <p className="text-base text-text-primary">
            Finde aus zahlreichen Gruppen, die passende(n) für Dich und tausche
            Dich online, in regelmäßigen Terminen, mit anderen Betroffene aus,
            die in der gleichen Situation sind wie Du.
          </p>
          <button className="h-8 w-[100px] rounded bg-light-blue tracking-wide text-brand-white lg:h-10 lg:w-[150px]">
            Gruppe finden
          </button>
        </div>
      </div>
      <div className="flex h-[290px] w-full items-center justify-between gap-4  lg:h-[394px] lg:gap-20">
        <div className=" flex h-[290px]  w-1/2 flex-col items-start justify-between lg:h-[200px]">
          <h1 className="text-xl font-bold tracking-wider lg:text-2xl">
            Starte neue Gruppen
          </h1>
          <p className="text-base text-text-primary">
            Zu jedem beliebigen Thema hast du die Möglichkeit eine Gruppe zu
            eröffnen und Menschen zusammenzubringen. Erstelle mit unserer Hilfe
            in nur vier Schritten deine Selbsthilfegruppe. We.together ist für
            Gruppen ModeratorInnen komplett kostenlos.
          </p>
          <button className=" h-8 w-[100px] rounded bg-light-blue tracking-wide text-brand-white lg:h-10 lg:w-[150px]">
            Gruppe starten
          </button>
        </div>
        <div className="h-full w-1/2 rounded-lg bg-group bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Funktioniert;

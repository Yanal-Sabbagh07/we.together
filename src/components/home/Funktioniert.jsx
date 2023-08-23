import React from "react";

const Funktioniert = () => {
  return (
    <div className="mb-[88px] w-[1312px] h-[905px]  flex flex-col justify-between">
      <div>
        <h4 className="text-text-primary text-[32px] font-bold tracking-wider">
          So funktioniert we.together
        </h4>
      </div>
      <div className="w-full h-[394px]  flex items-center justify-between gap-20">
        <div className="w-1/2 h-full bg-old-man bg-cover rounded-lg"></div>
        <div className="w-1/2 h-[200px]  flex flex-col justify-between items-start">
          <h1 className="font-bold tracking-wider text-2xl">
            Finde deine Gruppe
          </h1>
          <p className="text-text-primary text-base">
            Finde aus zahlreichen Gruppen, die passende(n) für Dich und tausche
            Dich online, in regelmäßigen Terminen, mit anderen Betroffene aus,
            die in der gleichen Situation sind wie Du.
          </p>
          <button className="w-[150px] h-10 bg-light-blue text-brand-white rounded tracking-wide">
            Gruppe finden
          </button>
        </div>
      </div>
      <div className="w-full h-[394px]  flex items-center justify-between gap-20">
        <div className=" w-1/2 h-[200px]  flex flex-col justify-between items-start">
          <h1 className="font-bold tracking-wider text-2xl">
            Starte neue Gruppen
          </h1>
          <p className="text-base text-text-primary">
            Zu jedem beliebigen Thema hast du die Möglichkeit eine Gruppe zu
            eröffnen und Menschen zusammenzubringen. Erstelle mit unserer Hilfe
            in nur vier Schritten deine Selbsthilfegruppe. We.together ist für
            Gruppen ModeratorInnen komplett kostenlos.
          </p>
          <button className="w-[150px] h-10 bg-light-blue text-brand-white rounded tracking-wide">
            Gruppe starten
          </button>
        </div>
        <div className="w-1/2 h-full bg-group bg-cover rounded-lg"></div>
      </div>
    </div>
  );
};

export default Funktioniert;

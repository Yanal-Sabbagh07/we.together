import React from "react";
import GroupCard from "./GroupCard";

const Group = () => {
  return (
    <div>
      <div className="mb-16 flex w-[90vw] flex-col  justify-start lg:mb-[88px] lg:h-[423px] lg:w-[1312px]">
        <div className="mb-10">
          <h3 className="text-left text-[24px] font-bold text-text-primary lg:text-left lg:text-[28px]">
            Finde Die richtige Gruppe für Dich
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-10 lg:justify-normal lg:gap-4">
          <GroupCard img="bg-chill" link="Depressionsgruppen" />
          <GroupCard img="bg-candel" link="Trauergruppen " />
          <GroupCard img="bg-mom-daughter" link="Gruppen für Angehörige " />
          <GroupCard img="bg-green-plant" link="Alle Gruppen anzeigen" />
        </div>
      </div>
    </div>
  );
};

export default Group;

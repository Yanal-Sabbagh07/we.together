import React from "react";
import GroupCard from "./GroupCard";

const Group = () => {
  return (
    <div>
      <div className="mb-[88px] w-[1312px] h-[423px]  flex flex-col justify-start">
        <div className="mb-10">
          <h3 className="text-text-primary text-[28px] font-bold">
            Finde Die richtige Gruppe für Dich
          </h3>
        </div>
        <div className="flex gap-4">
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

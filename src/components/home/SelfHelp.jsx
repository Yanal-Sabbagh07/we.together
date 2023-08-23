import React from "react";
import SelfHelpCard from "@/components/home/SelfHelpCard";
const Group = () => {
  return (
    <>
      <div className="mb-[88px] w-[1312px] h-[591px]  flex flex-col justify-start ">
        <div className="mb-10">
          <h3 className="text-text-primary text-[28px] font-bold">
            Gemeinsam Selbsthilfe ermöglichen
          </h3>
        </div>
        <div className="flex gap-16">
          <SelfHelpCard
            img="bg-green-plant"
            title="Depressionsgruppen"
            text="Wir wollen mit we.together Deutschlands führende digitale
            Selbsthilfe Plattform schaffen, die jedem den Zugang zu der
            richtigen Selbsthilfegruppe ermöglicht."
          />
          <SelfHelpCard
            img="bg-green-roud"
            title="Unsere Einstellung"
            text="Wir glauben daran, dass jeder Mensch glücklich sein darf und die Lösung, um das zu erreichen, 
            in sich trägt. Wir bieten mit we.together eine Möglichkeit und einen Weg zu dieser Lösung zu kommen."
          />
          <SelfHelpCard
            img="bg-friends-back"
            title="Unser Team"
            text="We.together wird auch bei uns im Team groß geschrieben. Gemeinsam haben wir es uns zur 
            Aufgabe gemacht Menschen in schwierigen Lebenssituationen zu unterstützen und haben damit auch eine Lebensaufgabe gewählt."
          />
        </div>
      </div>
    </>
  );
};

export default Group;

import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 mb-[88px]">
      <div className="w-full h-[343px]  flex justify-between ">
        <div className="w-[620px] h-full bg-pink bg-cover rounded-lg"></div>
        <div className="h-full flex flex-col items-start justify-center w-[calc(100%-620px)] pl-[70px]">
          <h4 className="text-2xl font-bold mb-3">
            Du möchtest Teil des Teams werden?
          </h4>
          <p>
            Schicke uns gerne deine Bewerbungsunterlagen zu an
            bewerbung@hellowetogether.de
          </p>
        </div>
      </div>
      <div className="w-full h-[343px]  flex justify-between mb-[88px]">
        <div className="h-full flex flex-col items-start justify-center w-[calc(100%-620px)] ">
          <h4 className="text-2xl font-bold mb-3">
            Ihr seid ein Unternehmen und wollt mit uns in Kontakt treten?
          </h4>
          <p>Schreibt uns gerne eine Nachricht an info@hellowetogether.de</p>
        </div>
        <div className="w-[620px] h-full bg-hands bg-cover rounded-lg"></div>
      </div>
      <div className="w-[75%]">
        <h3 className="font-bold text-2xl mb-3">Unsere Partner uns Förderer</h3>
        <p className="text-xl">
          Hier findet ihr eine Liste unserer Partner mit denen wir zusammen
          daran arbeiten Menschen miteinander zu verbinden und ihnen Zugang zu
          Selbsthilfegruppen zu ermöglichen.
        </p>
      </div>
    </div>
  );
};

export default Contact;

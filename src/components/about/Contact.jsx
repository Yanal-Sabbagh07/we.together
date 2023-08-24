import React from "react";

const Contact = () => {
  return (
    <div className="mb-16 flex w-full flex-col gap-10 lg:mb-[88px]">
      <div className="flex h-[300px] w-full flex-col  justify-between lg:h-[343px] lg:flex-row">
        <div className="h-[68%] w-full rounded-lg bg-pink bg-cover lg:h-full lg:w-[620px]"></div>
        <div className="flex w-full flex-col items-start justify-center lg:h-full lg:w-[calc(100%-620px)] lg:pl-[70px]">
          <h4 className="mb-3 text-xl font-bold lg:text-2xl">
            Du möchtest Teil des Teams werden?
          </h4>
          <p>
            Schicke uns gerne deine Bewerbungsunterlagen zu an
            bewerbung@hellowetogether.de
          </p>
        </div>
      </div>
      <div className="flex h-[300px] w-full flex-col-reverse justify-between lg:mb-[88px]  lg:h-[343px] lg:flex-row">
        <div className="flex flex-col items-start justify-center lg:h-full lg:w-[calc(100%-620px)] ">
          <h4 className=" mb-3 text-xl font-bold lg:text-2xl">
            Ihr seid ein Unternehmen und wollt mit uns in Kontakt treten?
          </h4>
          <p>Schreibt uns gerne eine Nachricht an info@hellowetogether.de</p>
        </div>
        <div className="h-[68%] w-full rounded-lg bg-hands bg-cover bg-center lg:h-full lg:w-[620px]"></div>
      </div>
      <div className="w-full lg:w-[75%]">
        <h3 className="mb-3 text-xl font-bold lg:text-2xl">
          Unsere Partner uns Förderer
        </h3>
        <p className="lg:text-xl">
          Hier findet ihr eine Liste unserer Partner mit denen wir zusammen
          daran arbeiten Menschen miteinander zu verbinden und ihnen Zugang zu
          Selbsthilfegruppen zu ermöglichen.
        </p>
      </div>
    </div>
  );
};

export default Contact;

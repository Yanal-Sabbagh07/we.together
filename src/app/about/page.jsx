import Contact from "@/components/about/Contact";
import HeroSection from "@/components/about/HeroSection";
import Mession from "@/components/about/Mession";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]  w-full">
      <HeroSection />
      <Mession />
      <Contact />
    </div>
  );
};

export default page;

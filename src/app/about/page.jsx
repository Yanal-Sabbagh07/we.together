import Contact from "@/components/about/Contact";

import HeroSection from "@/components/about/HeroSection";
import Mession from "@/components/about/Mession";

const page = () => {
  return (
    <main className=" flex min-h-[calc(100vh-65px)] flex-col items-center justify-between overflow-x-hidden ">
      <HeroSection />
      <Mession />
      <Contact />
    </main>
  );
};

export default page;

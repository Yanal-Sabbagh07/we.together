import Funktioniert from "@/components/home/Funktioniert";
import Gefördert from "@/components/home/GefördertSection";
import Group from "@/components/home/Group";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import SelfHelp from "@/components/home/SelfHelp";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-between ">
      <HeroSection />
      <Gefördert />
      <Funktioniert />
      <Pricing />
      <Group />
      <SelfHelp />
    </main>
  );
}

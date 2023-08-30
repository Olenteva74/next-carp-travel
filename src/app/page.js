import { TheHeader } from "@/components/TheHeader/TheHeader";
import { TheHero } from "@/components/Hero/TheHero";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Career } from "@/components/Career";

export default function Home() {
  return (
    <main className="text-white">
      <div
        className="w-screen h-full bg-[rgba(2, 15, 8, 0.75)]
    bg-hero md:bg-hero-tablet xl:bg-hero-desktop bg-no-repeat bg-cover"
      >
   
          <TheHeader />
          <TheHero />
        
      </div>
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contact />
    </main>
  );
}

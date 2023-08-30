import { TheHeader } from "@/components/TheHeader/TheHeader";
import { TheHero } from "@/components/TheHero";
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
        <div
          className="w-[320px] md:w-[768px] xl:w-[1280px]
      mx-auto px-5 md:px-8 xl:px-6
      pt-12 pb-14 md:pt-9 md:pb-16 xl:pb-20"
        >
          <TheHeader />
          <TheHero />
        </div>
      </div>
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contact />
    </main>
  );
}

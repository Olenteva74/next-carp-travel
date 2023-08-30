import { TheHeader } from "@/components/TheHeader/TheHeader";
import { TheHero } from "@/components/Hero/TheHero";
import { Contact } from "@/components/Contact/Contact";
import { Gallery } from "@/components/Gallery/Gallery";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Career } from "@/components/Career";
import { Home } from "@/components/Home";

export default function Home() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contact />
    </>
  );
}

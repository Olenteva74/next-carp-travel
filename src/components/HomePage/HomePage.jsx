import { Section } from "../Section";
import { TheHeader } from "../TheHeader";
import { TheHero } from "../Hero";

export const HomePage = () => {
    return (
        <Section name="home">
         <TheHeader/>
         <TheHero/>
        </Section>
    )
}
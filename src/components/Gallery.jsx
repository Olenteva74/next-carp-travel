import Image from "next/image";
import gallery from "../data/gallery.json";
import { Section } from "./Section";
import { Container } from "./Container";
import { Title } from "./Title";
import { Slider } from "./Slider";

export const Gallery = () => {
  return (
    <Section name="gallery">
      <Container>
        <div className="md:text-center xl:text-start">
          <Title title={gallery.titleThin} titleAccent={gallery.titleMedium} />
        </div>
        <ul className="flex flex-col gap-6 md:hidden">
          {gallery.images.map(({ url, alt }) => {
            return (
              <li key={url}>
                <Image src={url} width={280} height={187} alt={alt} />
              </li>
            );
          })}
        </ul>
        <Slider />
      </Container>
    </Section>
  );
};

import gallery from "../../data/gallery.json";
import { Section } from "../Section";
import { Container } from "../Container";
import { Title } from "../Title";
import { Slider } from "./Slider";
import { VerticalSwiper } from "./VerticalSwiper";

export const Gallery = () => {
  return (
    <Section name="gallery">
      <Container>
        <div className="md:text-center xl:text-start mb-6 md:mb-[66px] xl:mb-[15px]">
          <Title title={gallery.titleThin} titleAccent={gallery.titleMedium} />
        </div>
        <VerticalSwiper images={gallery.images} />
        <Slider images={gallery.images} backButton={gallery.backButton} nextButton={gallery.nextButton} />
      </Container>
    </Section>
  );
};

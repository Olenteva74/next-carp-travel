import about from "../../data/about.json";
import { Section } from "../Section";
import { Container } from "../Container";
import { Title } from "../Title";
import { AccentParagraph } from "./AccentParagraph";
import { AccentSubtitle } from "./AccentSubtitle";

export const About = () => {
  return (
    <Section name="about">
      <Container>
        <div className="md:flex md:gap-[76px] xl:gap-6 mb-10  md:mb-0 xl:mb-[72px]">
          <div className="mb-2 md:mb-0">
            <Title title={about.titleThin} titleAccent={about.titleMedium} />
          </div>
          <div className="w-[180px] md:w-[220px] xl:w-[292px]">
            <div className="mb-5 md:mb-4 xl:mb-6">
              <AccentParagraph
                textAccent={about.firstParagraphTextNormal}
                text={about.firstParagraphTextExtralight}
              />
            </div>
            <div>
              <AccentParagraph
                textAccent={about.secondParagraphTextNormal}
                text={about.secondParagraphExtralight}
              />
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="mb-10 md:mb-0  flex justify-end md:justify-start md:relative md:bottom-[72px] xl:static">
            <AccentSubtitle
              firstTitle={about.firstSubtitleNormal}
              secindTitle={about.secondSubtitleNormal}
              text={about.subtitleTextExtralight}
            />
          </div>
          <div className="md:flex md:justify-end xl:justify-start">
            <div className="md:w-[463px] xl:w-[605px]">
              <AccentParagraph
                textAccent={about.thirdParagraphTextNormal}
                text={about.thirdParagraphExtralight}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

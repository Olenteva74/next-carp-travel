import career from "../../data/career.json"
import { Section } from "../Section";
import { Container } from "../Container";
import { Title } from "../Title";
import { Paragraph } from "../Services/Paragraph";
import { CareerSubtitle } from "./CareerSubtitle";
import { FeatureList } from "./FeatureList";
import { Form } from "./Form";

export const Career = () => {
    return (
      <div>
         <Section name="career">
        <Container>
       <div className="md:flex md:justify-between md:mb-3 xl:mb-">
       <div className="mb-6 md:mb-0">
         <Title title={career.titleThin} titleAccent={career.titleMedium}/>
         </div>
         <div className="flex justify-end mb-9 md:mb-0">
         <div className="w-[179px] h-[120px] md:w-[221px] md:h-[80px] xl:w-[293px] xl:h-[96px]">
         <Paragraph text={career.firstParagraph}/>
         </div>
         </div>
       </div>
        <div className="pl-[100px] md:pl-[80px] xl:pl-[140px] mb-9 md:mb-[56px] xl:[45px]">
        <CareerSubtitle subtitle={career.subtitle}/>
        </div>
        <div className="md:flex md:gap-5 xl:gap-6">
        <div className="pr-[99px] md:pr-0 md:w-[225px] xl:basis-1/2">
        <FeatureList list={career.features}/>
        </div>
        <div className="hidden md:block md:grow xl:basis-1/2 relative">
        <div className="flex justify-end md:justify-start mb-6 md:mb-8 xl:absolute xl:top-[-100px]">
         <div className="md:w-[221px] md:h-[60px] xl:w-[234px] xl:h-[72px]">
         <Paragraph text={career.secondParagraph}/>
         </div>
         </div>
         <Form/>
        </div>
        </div>
        </Container>
       </Section>
       <div className="career md:hidden">
        <Container>
        <div className="flex justify-end mb-6">
         <div className="w-[179px] h-[80px]">
         <Paragraph text={career.secondParagraph}/>
         </div>
         </div>
         <Form/>
        </Container>
       </div>
      </div>
    )
}
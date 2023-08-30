import contact from "../data/contact.json";
import { Section } from "../Section";
import { Container } from "../Container";
import { Title } from "../Title";
import { Subtitle } from "./Subtitle";
import { LinkItem } from "./LinkItem";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
 return (
    <Section name="contacts">
      <Container>
        <div className="mb-6 md:mb-[65px] xl:mb-[15px]">
        <Title title={contact.titleThin} titleAccent={contact.titleMedium} />
        </div>
        <div className="xl:flex justify-between">
          <div
            className="md:flex md:gap-x-[90px] md:mb-16 xl:mb-0
        xl:flex-col xl:gap-y-[124px]"
          >
            <div>
              <div className="flex flex-row-reverse gap-x-5 mb-6">
                <div className="w-[81px]">
                  <Subtitle text={contact.labelPhone} />
                </div>
                <ul className="text-end w-[179px] xl:w-[210px]">
                  {contact.phoneNumber.map((number) => {
                    const normalizedNumber = `tel:${number.replace(
                      /[^\+0-9]/g,
                      ""
                    )}`;
                    return (
                      <LinkItem
                        key={number}
                        url={normalizedNumber}
                        text={number}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-row-reverse gap-x-5 mb-[26px] md:mb-0">
                <div className="w-[81px]">
                  <Subtitle text={contact.labelEmail} />
                </div>
                <ul className="text-end w-[179px] xl:w-[210px]">
                  {contact.email.map((mail) => {
                    const normalizedEmail = `mailto:${mail}`;
                    return (
                      <LinkItem key={mail} url={normalizedEmail} text={mail} />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex xl:flex-row-reverse gap-x-5 mb-3 md:mb-0">
              <div className="text-end xl:text-start w-[179px] xl:w-[81px]">
                <Subtitle text={contact.labelSocial} />
              </div>
              <ul className="w-[81px] xl:w-[210px] xl:text-end">
                {contact.social.map((name) => {
                  return (
                    <LinkItem
                      key={name}
                      url="#"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      text={name}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-screen h-full mx-auto bg-[#0A1813]
    bg-no-repeat bg-cover bg-contact md:bg-contact-tablet xl:bg-contact-desktop"
    >
      <div
        className="w-[320px] md:w-[768px] xl:w-[1280px] mx-auto px-5 md:px-8 xl:px-6
      py-14 md:py-16 xl:py-[104px]"
      >
        <h1
          className="text-[40px] leading-[1.4] tracking-[-1.6px] mb-9 xl:mb-[71px]
        md:text-[67px] md:leading-[0.98] md:tracking-[-2.68px]
        xl:text-[98px] xl:leading-[1] xl:tracking-[-3.92px]"
        >
          <span className="font-thin">CONTACT</span>
          <span className="font-medium">US</span>
        </h1>
        <div className="xl:flex justify-between">
          <div
            className="md:flex md:gap-x-[90px] md:mb-16 xl:mb-0
        xl:flex-col xl:gap-y-[124px]"
          >
            <div>
              <div className="flex flex-row-reverse gap-x-5 mb-6">
                <h6 className="w-[81px] text-[12px] leading-[1.67] font-extralight">
                  Phone number
                </h6>
                <ul
                  className="text-end w-[179px] xl:w-[210px] text-[14px] leading-[1.71] font-normal
          md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.33]"
                >
                  <li>
                    <a href="tel:+380981234567">+38 (098) 12 34 567</a>
                  </li>
                  <li>
                    <a href="tel:+380731234567">+38 (073) 12 34 567</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row-reverse gap-x-5 mb-[26px] md:mb-0">
                <h6 className="w-[81px] text-[12px] leading-[1.67] font-extralight">
                  E-mail
                </h6>
                <a
                  href="mailto:support@carptravel.com"
                  className="block text-end w-[179px] xl:w-[210px] text-[14px] leading-[1.71] font-normal
            md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.33]"
                >
                  support@carptravel.com
                </a>
              </div>
            </div>
            <div className="flex xl:flex-row-reverse gap-x-5 mb-3 md:mb-0">
              <h6 className="text-end xl:text-start w-[179px] xl:w-[81px] text-[12px] leading-[1.67] font-extralight">
                Follow us
              </h6>
              <ul
                className="w-[81px] xl:w-[210px] text-[14px] leading-[1.71] font-normal 
          md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.33] xl:text-end"
              >
                <li>
                  <a href="#">facebook</a>
                </li>
                <li>
                  <a href="#">instagram</a>
                </li>
                <li>
                  <a href="#">youtube</a>
                </li>
                <li>
                  <a href="#">tiktok</a>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

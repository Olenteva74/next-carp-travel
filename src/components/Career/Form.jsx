"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const nameRegExp = /^\s*[\S]+(\s[\S]+)+\s*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
  fullName: yup.string().trim().matches(nameRegExp).required(),
  email: yup.string().email().required(),
  position: yup.string(),
  phone: yup.string().trim().matches(phoneRegExp).required(),
  message: yup.string(),
});

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = (values) => {
        console.log(values);
        reset();
      };
      return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-extralight
        md:flex md:flex-col md:gap-4 xl:gap-6"
        >
         <div className="md:flex md:gap-5 xl:gap-6">
         <div className="md:basis-1/2">
            <div>
              <label
                htmlFor="fullName"
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="John Smith"
                {...register("fullName")}
                className="block w-full pl-2 pr-[50px] bg-[rgba(255, 255, 255, 0.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 opacity-20  focus:outline-none text-black"
              />
              {errors.fullName && (
                <p className="flex items-center justify-end text-[12px] leading-[2]  tracking-[2.4px] text-[#FF5757]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
                      stroke="currentColor"
                    />
                  </svg>
                  <span>incorrect name</span>
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                placeholder="johnsmith@email.com"
                {...register("email")}
                className="block w-full pl-2 pr-[50px] bg-[rgba(255, 255, 255, 0.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2]
            mb-1 opacity-20 text-black focus:outline-none"
              />
              {errors.email && (
                <p className="flex items-center justify-end text-[12px] leading-[2]  tracking-[2.4px] text-[#FF5757]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
                      stroke="currentColor"
                    />
                  </svg>
                  <span>invalid email</span>
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                placeholder="Movie maker"
                {...register("position")}
                className="block w-full pl-2 pr-[50px] bg-[rgba(255, 255, 255, 0.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 opacity-20  focus:outline-none text-black"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+ 38 (097) 12 34 567"
                {...register("phone")}
                className="block w-full pl-2 pr-[50px] bg-[rgba(255, 255, 255, 0.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 opacity-20  focus:outline-none text-black"
              />
              {errors.phone && (
                <p className="flex items-center justify-end text-[12px] leading-[2]  tracking-[2.4px] text-[#FF5757]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
                      stroke="currentColor"
                    />
                  </svg>
                  <span>Incorrect phone</span>
                </p>
              )}
            </div>
          </div>
          <div className="md:basis-1/2">
            <label
              htmlFor="message"
              className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="block w-full h-[196px]  xl:h-[268px] py-3 px-4  bg-[rgba(255, 255, 255, 0.05)] 
              opacity-20  focus:outline-none text-black"
            ></textarea>
          </div>
         </div>
          <div className="md:flex md:justify-between">
          <div className="flex gap-2">
          <div className="w-6 h-6">
          <input type="checkbox" name="confirm" id="confirm" />
          </div>
          <label htmlFor="confirm" className="text-[12px] leading-[1.83] xl:leading-[2] md:w-[192px] md:h-[44px]">
                <span className="font-extralight">I confirm my consent to the processing of personal data.</span>
            </label>
          </div>
            <div className="text-end">
              <button className="text-3xl font-medium xl:text-[32px] hover:opacity-40">SEND</button>
            </div>
          </div>
        </form>
      );

}
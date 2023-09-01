"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nanoid } from "nanoid";

const nameRegExp = /^\s*[\S]+(\s[\S]+)+\s*$/;
const schema = yup.object().shape({
  fullName: yup.string().trim().matches(nameRegExp).required(),
  email: yup.string().email().required(),
  message: yup.string(),
});

export const ContactForm = () => {
  const nameId = nanoid();
  const emailId = nanoid();
  const textareaId = nanoid();
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
    md:flex md:gap-x-5
    xl:flex-col"
    >
      <div className="xl:flex xl:gap-x-5">
        <div className="xl:basis-1/2">
          <label
            htmlFor={nameId}
            className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
          >
            Full name
          </label>
          <input
            type="text"
            id={nameId}
            placeholder="John Smith"
            {...register("fullName")}
            className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)] 
        text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:opacity-20"
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
        <div className="xl:basis-1/2">
          <label
            htmlFor={emailId}
            className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
          >
            E-mail
          </label>
          <input
            type="text"
            id={emailId}
            placeholder="johnsmith@email.com"
            {...register("email")}
            className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]
        text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2]
        mb-1 text-white focus:outline-none placeholder:opacity-20"
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
      </div>
      <div className="md:grow">
        <label
          htmlFor={textareaId}
          className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
        >
          Message
        </label>
        <textarea
          id={textareaId}
          {...register("message")}
          className="block w-full h-[193px] md:h-[221px] xl:h-[174px] py-3 px-4 bg-[hsla(0,0%,100%,.05)] 
          mb-4 xl:mb-6 focus:outline-none text-white"
        ></textarea>
        <div className="text-end">
          <button type="submit" className="text-3xl font-medium xl:text-[32px] hover:opacity-40">
            SEND
          </button>
        </div>
      </div>
    </form>
  );
};

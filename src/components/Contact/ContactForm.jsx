"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { ErrorMessage } from "./ErrorMessage";

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
      <div className="xl:flex xl:gap-x-5 xl:mb-[42px]">
        <div className="xl:basis-1/2 mb-[25px] md:mb-[28px] relative">
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
            className="relative block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)] 
        text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
          />
          {errors.fullName && (
            <ErrorMessage message="incorrect name"/>
          )}
        </div>
        <div className="xl:basis-1/2 mb-[25px] relative">
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
            className="relative block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]
        text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2]
        mb-1 text-white focus:outline-none placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
          />
          {errors.email && (
            <ErrorMessage message="invalid email"/>
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

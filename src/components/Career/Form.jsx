"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { ErrorMessage } from "../Contact/ErrorMessage";

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
    const nameId = nanoid();
    const emailId = nanoid();
    const positionId = nanoid();
    const phoneId = nanoid();
    const textareaId = nanoid();
    const checkboxId = nanoid();
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
            <div className="relative mb-4 xl:mb-[26px]">
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
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
              />
              {errors.fullName && (
                <ErrorMessage message="incorrect name"/>
              )}
            </div>
            <div className="relative mb-4 xl:mb-[26px]">
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
            mb-1 text-white focus:outline-none placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
              />
              {errors.email && (
               <ErrorMessage message="invalid email"/>
              )}
            </div>
            <div className="mb-4 xl:mb-[26px]">
              <label
                htmlFor={positionId}
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                Position
              </label>
              <input
                type="text"
                id={positionId}
                placeholder="Movie maker"
                {...register("position")}
                className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]  
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor={phoneId}
                className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id={phoneId}
                placeholder="+ 38 (097) 12 34 567"
                {...register("phone")}
                className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]  
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
              />
              {errors.phone && (
                <ErrorMessage message="Incorrect phone"/>
              )}
            </div>
          </div>
          <div className="md:basis-1/2">
            <label
              htmlFor={textareaId}
              className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
            >
              Message
            </label>
            <textarea
              id={textareaId}
              {...register("message")}
              className="block w-full h-[196px] md:h-[228px]  xl:h-[268px] py-3 px-4 bg-[hsla(0,0%,100%,.05)] 
             focus:outline-none text-white"
            ></textarea>
          </div>
         </div>
          <div className="md:flex md:justify-between">
          <div className="flex gap-2">
          <div className="w-6 h-6">
          <input type="checkbox" name="confirm" id={checkboxId} />
          </div>
          <label htmlFor={checkboxId} className="text-[12px] leading-[1.83] xl:leading-[2] md:w-[192px] md:h-[44px]">
                <span className="font-extralight">I confirm my consent to the processing of personal data.</span>
            </label>
          </div>
            <div className="text-end">
              <button type="submit" className="text-3xl font-medium xl:text-[32px] hover:opacity-40">SEND</button>
            </div>
          </div>
        </form>
      );

}
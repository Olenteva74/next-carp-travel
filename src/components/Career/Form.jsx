"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { ErrorMessage } from "../Contact/ErrorMessage";

const nameRegExp = /^\s*[\S]+(\s[\S]+)+\s*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
  fullName: yup.string().trim().matches(nameRegExp).required(),
  email: yup.string().email().required(),
  position: yup.string(),
  phone: yup.string().trim().matches(phoneRegExp).required(),
  message: yup.string(),
  confirm: yup
    .bool()
    .oneOf(
      [true],
      "Confirm your consent to the processing of personal data is required"
    ),
});
const CAREER_FORM = "careerForm";

export const Form = () => {
  const [confirmed, setConfirmed] = useState(false);
  const handleCheckbox = (event) => {
    const { checked } = event.target;
    setConfirmed(checked);
  };
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
    localStorage.setItem(CAREER_FORM, JSON.stringify(values));
    toast.success(`Your data has been successfully saved`, {
      theme: "light",
      position: toast.POSITION.BOTTOM_CENTER,
    });
    reset();
  };
  return (
    <form
      name={CAREER_FORM}
      onSubmit={handleSubmit(onSubmit)}
      className="font-extralight
        md:flex md:flex-col md:gap-4 xl:gap-6"
    >
      <div className="md:flex md:gap-5 xl:gap-6">
        <div className="md:basis-1/2">
          <div className="relative mb-4 xl:mb-[26px]">
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
              className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
            />
            {errors.fullName && <ErrorMessage message="incorrect name" />}
          </div>
          <div className="relative mb-4 xl:mb-[26px]">
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
              className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)] 
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2]
            mb-1 text-white focus:outline-none placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
            />
            {errors.email && <ErrorMessage message="invalid email" />}
          </div>
          <div className="mb-4 xl:mb-[26px]">
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
              className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]  
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
            />
          </div>
          <div className="relative mb-4 md:mb-0">
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
              className="block w-full pl-2 pr-[50px] bg-[hsla(0,0%,100%,.05)]  
            text-[13px] leading-[1.85] xl:text-[20px] xl:leading-[1.2] mb-1 focus:outline-none text-white placeholder:text-[hsla(0, 0%, 100%, 0.2)]"
            />
            {errors.phone && <ErrorMessage message="Incorrect phone" />}
          </div>
        </div>
        <div className="md:basis-1/2 mb-4 md:mb-0">
          <label
            htmlFor="textarea"
            className="block text-[12px] leading-[2]  tracking-[2.4px] mb-1"
          >
            Message
          </label>
          <textarea
            id="textarea"
            {...register("message")}
            className="block w-full h-[196px] md:h-[228px]  xl:h-[268px] py-3 px-4 bg-[hsla(0,0%,100%,.05)] 
             focus:outline-none text-white"
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <label className="flex gap-2 relative">
          <input
            type="checkbox"
            {...register("confirm")}
            onChange={handleCheckbox}
            className="absolute w-px h-px top-0 left-0"
          />
          <span>
            {!confirmed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="0.5" y="0.5" width="23" height="23" stroke="white" />
                <rect
                  opacity="0.1"
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="0.5" y="0.5" width="21" height="21" stroke="white" />
                <rect x="4" y="4" width="14" height="14" fill="white" />
              </svg>
            )}
          </span>
          <span className="font-extralight">
            I confirm my consent to the processing of personal data.
          </span>
        </label>
        {errors.confirm &&
          !confirmed &&
          toast.error(errors.confirm?.message, {
            theme: "light",
            position: toast.POSITION.BOTTOM_RIGHT,
          })}
        <div className="text-end">
          <button
            type="submit"
            className="text-3xl font-medium xl:text-[32px] hover:opacity-40 focus:opacity-40 hover:transition-all focus:transition-all"
          >
            SEND
          </button>
        </div>
      </div>
    </form>
  );
};

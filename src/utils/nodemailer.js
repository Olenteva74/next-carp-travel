import nodemailer from "nodemailer";

const { META_PASSWORD, META_EMAIL, RECIPIENT_EMAIL } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const transporter = nodemailer.createTransport(config);

export const mailOption = {
  from: META_EMAIL,
  to: RECIPIENT_EMAIL,
};

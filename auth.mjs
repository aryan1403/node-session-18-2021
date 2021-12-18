import * as nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config('.env');

const myemail = process.env.myemail;
const password = process.env.password;

export async function sendMail(email, code) {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: myemail,
      pass: password,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    to: email, // list of receivers
    subject: "Authentication Required", // Subject line
    text: "Hello Aaryan your code is : " + code, // plain text body
  });

  return info.messageId;
}

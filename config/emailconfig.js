import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
    // service : "gmail",
  auth: {
    user: process.env.SMTP_USER  ,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.log("smtp connection failed:", err);
  } else {
    console.log("smtp server ready to send emails");
  }
});

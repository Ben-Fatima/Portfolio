require("dotenv").config();
const nodemailer = require("nodemailer");

export default function (req, res) {
  res.status(200);
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "portfoliomessage3@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "portfoliomessage3@gmail.com",
    to: "fatimazahranit@gmail.com",
    subject: `Subject: ${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    try {
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  });
}

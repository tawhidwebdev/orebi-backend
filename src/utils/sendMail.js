const nodemailer = require('nodemailer')

const sendMail = async (Email_Adress = "tawhidlimon.info@gmail.com") => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.HOST_EMAIL, // sender address
        pass: process.env.HOST_APP_PASSWORD, //App password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.HOST_EMAIL, // sender address
      to: Email_Adress, // list of receivers
      subject: "OREBI", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Orebi Backend</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log("From send mail function :", error);
  }
}

module.exports = {sendMail}
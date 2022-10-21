"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  //Variables con data de los formularios

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("textarea").value;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //si no funciona probar 587
    secure: true, // true for 465, false for other ports
    auth: {
      user: "asociacioncivillosmanantiales@gmail.com", // generated ethereal user
      pass: "Codoacodo123", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '{{nombre}} <{{email}}>', // sender address
//    to: "maernoud@gmail.com", // list of receivers
    to: "csivori1@yahoo.com", // list of receivers
    subject: "Nuevo Mensaje", // Subject line
    text: mensaje, // plain text body
    html: mensaje, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
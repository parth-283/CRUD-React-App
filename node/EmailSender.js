  var nodeMailer = require("nodemailer");
var transport = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "kathiriyaparth283@gmail.com", 
    pass: "parth@2002",
  },
});
var mailOptions = {
  from: "kathiriyaparth283@gmail.com",
  to: "kathiriyaparth283@gmail.com",
  subject: "test nodemailer",
  text: "hii, how are you!!!",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.warn(error);
  } else {
    console.warn("email has been sent", info.response);
  }
});

//I'm working on implementing MVC from this.
const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const port = 3000
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    }
  });

const mailOptions = {
    from: '"mailnoder"<deherreraBrandon@gmail.com>',
    to: <%= user.userName %>,
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
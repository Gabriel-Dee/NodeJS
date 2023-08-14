var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabrieldee77@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'gabrieldee77@gmail.com',
  to: 'gabriel.cscu.2018@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
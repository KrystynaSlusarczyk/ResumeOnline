const express = require('express');
const path = require('path');
const app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/sendMessage', function(req, res) {
  var senderName = req.body.senderName;
  var message = req.body.message;
  var senderAddress = req.body.senderAddress;

  var senderUser = process.env.NODEMAILER_SENDER_USER;
  var receiverUser = process.env.NODEMAILER_RECEIVER_USER;
  var password = process.env.NODEMAILER_PASSWORD;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: senderUser,
      pass: password
    }
  });

  sendEmail(transporter, res, senderUser, receiverUser,
    senderName + ' has sent you a message via your homepage', '<br/>' +
    'Sender: ' + senderName + '<br/>email: ' + senderAddress + '<br/>message: ' + message);
  sendEmail(transporter, res, senderUser, senderAddress, "You've sent a message to Krystyna Ślusarczyk", 'Hello ' + senderName +
   '<br/>' + "You've sent a message to Krystyna Ślusarczyk<br/>Your message was: " + message +
   "<br/><i>This message was created automatically. Please do not respond.</i>");

  res.send({status: 'success'})
});

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');

  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}

app.listen(process.env.PORT || 3050, () => console.log('Listening'));

function sendEmail(transporter, res, sender, receiver, subject, messageText) {
  var mailOptions = {
    from: sender,
    to: receiver,
    subject: subject,
    html: messageText
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('ERROR ' + error);
    } else {

      res.send({status: info.response})
      console.log('Email sent: ' + info.response);
    }
  });

}

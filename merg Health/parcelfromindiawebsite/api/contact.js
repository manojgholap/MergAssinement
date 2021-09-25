var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
  database: '80consult',
  user: 'root',
  password: '10gXWOqeaf',
  host: 'db.80startups.com',
});

var CRUD = require('mysql-crud');
var consultCRUD = CRUD(db, 'contact');

var nodemailer = require('nodemailer');
// var mandrillTransport = require('nodemailer-mandrill-transport');
var mg = require('nodemailer-mailgun-transport');
const auth = {
  auth: {
    api_key: '1401307ece5e9bb499702f7a07050cd8-a2b91229-c2cf820a',
    domain: 'mx.gadgetsinasia.com'
  },
  host: 'api.mailgun.net' // e.g. for EU region
}

const transporter = nodemailer.createTransport(mg(auth));


//-- AWS Mailing --//

let aws = require('aws-sdk');

// configure AWS SDK

aws.config.loadFromPath('config.json');


// create Nodemailer SES transporter



////-----------------CONTACT-----------------
const contactus = async (fullName, email, phoneNumber, subject, message) => {

  console.log("contact Us form- Testing");
  // var fullName = "req.body.first_name + req.body.last_name";
  // var email = req.body.email;
  // var phoneNumber = req.body.phone;
  // var subject = req.body.message;
  // var message = req.body.message;

  // var recipientEmail = 'kapurepavan@gmail.com';
  try {

    let transporter = nodemailer.createTransport({
      host: "api.mailgun.net",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: auth
    });

    var subject = "[Fountaintechies.com] Contact Us enquiry";
    var mailbody = '<table>\
                        <tr>\
                        <td><img src="https://ambitiontours.80startups.com/assets/img/logo.jpg"></td><br>\
                      </tr>\
                      <tr>\
                        <td><h1>Dear Amol C,</td>\
                      </tr>\
                      <tr>\
                      </tr>\
                      <tr>\
                        <td>You have one enquiry from the following client:</td>\
                      </tr>\
                      <tr>\
                        <td>The details are as follow :<br>\
                        <br><strong> Name:   ' + fullName + '</strong><br>\
                        <br><strong> Email:   ' + email + '</strong><br>\
                        <br><strong> Contact Number:   ' + phoneNumber + '</strong><br>\
                        <br><strong>Subject:   ' + subject + '</strong><br>\
                        <br><strong>Message:   ' + message + '</strong><br>\
                      </tr>\
                      <tr>\
                        <td>Best wishes,</td>\
                      </tr>\
                      <tr>\
                        <td><h2>Fountaintechies.com</h2></td>\
                      </tr>\
                      <tr>\
                        <td bgcolor="#000000"><font color ="white">This is a one-time email. Please do not reply to this email.</font></td>\
                      </tr>\
                    </table>';




    // send_mail(recipientEmail, subject, mailbody);
    // var successmsg={status:"success"};
    // console.log(successmsg);
    // res.json(successmsg)


    await transporter.sendMail({
      from: email,
      to: '<admin@mx.gadgetsinasia.com>',
      cc: ["admin@fountainlogistics.com"],
      subject: subject,
      html: mailbody,

    }, (err, info) => {
      console.log(err);
      console.log(info);
      if (info) {
        var successmsg = { status: "success" };
        console.log(successmsg)
        return (successmsg)
      }


    });
  } catch (err) {
    console.log(err)
  }

}

//____________END______________________


function send_mail(usermail, subject, mailbody) {


  let mailOptions = {
    from: 'operations@80startups.com',
    to: 'amolc@fountaintechies.com',
    subject: subject,
    html: mailbody
  };

  // Sending email.
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      throw new Error("Error in sending email");
    }
    console.log("Message sent: " + JSON.stringify(response));
  });

};


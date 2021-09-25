var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
  database: 'parcelfromindia',
  user: 'bigdata',
  password: '10gXWOqeaf',
  host: 'birthdiscovery.com',
});

var CRUD = require('mysql-crud');
var contactusCRUD = CRUD(db, 'contactus');
var bookingCRUD = CRUD(db, 'Bookingform');


const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');





////-----------------APPLY-----------------

exports.simplecontact = function (req, res) {

    console.log("testing");
    console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var business_id = req.body.business_id;
 

  contactusCRUD.create({
    'name': name,
    'email': email,
    'phone': phone,
    'subject':subject,
    'message': message,
    'business_id': business_id
  }, function (err, vals) {

  })

  var recipientEmail = 'admin@fountainlogistics.com';
  var subject = "[Parcelfromindia.com] Contact "+ name ;
  var mailbody = '<table>\
                        <tr>\
                        <td><img src="http://80startups.com/img/80startups_logo.png" style="width:500px;"></td><br>\
                      </tr>\
                      <tr>\
                        <td><h1>Dear Amol Chawathe,</td>\
                      </tr>\
                      <tr>\
                      </tr>\
                      <tr>\
                        <td>You have one investor appointment with the following client:</td>\
                      </tr>\
                      <tr>\
                        <td>The details are as follow : <br><br><strong> Name:   ' + name + ' </strong><br><br><strong> Email:   ' + email + '</strong><br><br><strong> Contact Number:   ' + phone + '</strong><br><br><strong>Subject:   ' + subject + '</strong><br><br><strong>Message:  ' + message + '</strong><br><br></td>\
                      </tr>\
                      <tr>\
                        <td>Best wishes,</td>\
                      </tr>\
                      <tr>\
                        <td><h2>80startups.com</h2></td>\
                      </tr>\
                      <tr>\
                        <td bgcolor="#000000"><font color ="white">This is a one-time email. Please do not reply to this email.</font></td>\
                      </tr>\
                    </table>';

  send_mail(recipientEmail, subject, mailbody);
  console.log(subject);
      res.sendStatus(200);
}

exports.booking = function (req, res) {

  console.log("testing");
  console.log(req.body);
var from_name = req.body.from_name;
var from_country = req.body.from_country;
var from_address = req.body.from_address;
var from_address2 = req.body.from_address2;
var from_postal = req.body.from_postal;
var from_city = req.body.from_city;
var from_state = req.body.from_state;
var from_phone = req.body.from_phone;
var from_email = req.body.from_email;

var to_name = req.body.to_name;
var to_country = req.body.to_country;
var to_address = req.body.to_address;
var to_address2 = req.body.to_address2;
var to_postal = req.body.to_postal;
var to_city = req.body.to_city;
var to_state = req.body.to_state;
var to_phone = req.body.to_phone;
var to_email = req.body.to_email;

var weight = req.body.weight;
var boxess = req.body.boxess;
var packinglist = req.body.packinglist;
console.log('from_name' + from_name);


bookingCRUD.create({
  'from_name': from_name,
  'from_country': from_country,
  'from_address':from_address,
  'from_address2':from_address2,
  'from_postal':from_postal,
  'from_city':from_city,
  'from_state':from_state,
  'from_phone':from_phone,
  'from_email':from_email,
  'to_name': to_name,
  'to_country': to_country,
  'to_address':to_address,
  'to_address2':to_address2,
  'to_postal':to_postal,
  'to_city':to_city,
  'to_state':to_state,
  'to_phone':to_phone,
  'to_email':to_email,
  'weight':weight,
  'boxess':boxess,
  'packinglist':packinglist




}, function (err, vals) {
console.error
})

var recipientEmail = 'kapurepavan@gmail.com';
var subject = "[Parcelfromindia.com] Contact "+ from_name ;
var mailbody = '<table>\
                      <tr>\
                      <td><img src="https://www.parcelfromindia.com/img/parcelfromindia-logo2.png" style="width:500px;"></td><br>\
                    </tr>\
                    <tr>\
                      <td><h1>'+ from_name +',</td>\
                    </tr>\
                    <tr>\
                    </tr>\
                    <tr>\
                      <td>We have received the following booking for parcelfromindia:</td>\
                    </tr>\
                    <tr>\
                      <td>The details are as follow : <br><br><strong> Ship From  <br><br> ' + from_name + ' </strong><br><strong>  ' + from_address + '</strong><strong>   ' + from_address2 + '</strong><strong> ' + from_country + '</strong><strong>  ' + from_city + '</strong><br><strong>  ' + from_state + '</strong><strong>  ' + from_postal + '</strong><br><strong> ' + from_phone + '</strong><br><strong> ' + from_email + '</strong><br><br><strong>To <br><br>  ' + to_name + '</strong><br><strong>  ' + to_address + '</strong><strong>  ' + to_address2 + '</strong><strong>  ' + to_country + '</strong><strong>  ' + to_city + '</strong><br><strong>  ' + to_state + '</strong><strong>  ' + to_postal + '</strong><br><strong>  ' + to_phone + '</strong><br><strong>  ' + to_email + '</strong><br><br><strong>Weight:  ' + weight + '</strong><br><strong>Boxes:  ' + boxess + '</strong><br><br><strong>Packing list:  ' + packinglist + '</strong></td></tr>\
                    <tr>\
                      <td><h2>www.parcelfromindia.com</h2></td>\
                    </tr>\
                    </table>';

send_mail(recipientEmail, subject, mailbody);
console.log(subject);
    res.sendStatus(200);
}

///____________________END______________________

function send_mail(usermail, subject, mailbody) {


  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: 'fbb6c4d4bc368562292c482b90015288-ea44b6dc-3d298f6e',
    domain: 'mg.parcelfromindia.com'
  }
}
 
const nodemailerMailgun = nodemailer.createTransport(mg(auth));
 
  nodemailerMailgun.sendMail({
    from: 'support@parcelfromindia.com',
    to: 'amol.c@fountaintechies.comm,admin@fountainlogistics.com,kapurepavan@gmail.com', // An array if you have multiple recipients.
    subject: subject,
    'h:Reply-To': 'support@parcelfromindia.com',
    //You can use "html:" to send HTML email content. It's magic!
    html: mailbody,
    //You can use "text:" to send plain-text content. It's oldschool!
    text: mailbody
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    } else {
      console.log('Response: ' + info);
      //res.sendStatus(200);

    }
  });
};
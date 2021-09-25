let nodemailer = require('nodemailer');
let aws = require('aws-sdk');

// configure AWS SDK

aws.config.loadFromPath('config.json');


// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

// send some mail
transporter.sendMail({
    from: 'support@80shops.com',
    to: 'amit.k@fountaintechies.com',
    subject: 'Message',
    text: 'I hope this message gets sent!',
    
}, (err, info) => {
    console.log(err);
    console.log(info);
});

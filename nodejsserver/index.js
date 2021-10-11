const express = require("express");
const app = express();
const cors=require('cors');
var path = require('path');
const api=require("./Api/Api.js");
const multer = require("multer");
const webpush=require('web-push');


const publicVapidKey =
'BJ4puJVCm3MVVFZT3RsLjzjNkPwx818esgXS6pOmm_Qf5ER9heW3gAt4lMXbCpB1pwzR2YSDWhhYk9LmLjPXZYM';
const privateVapidKey='Owusldga6jtnxz6ww4Q3dMjv92CX9ktxhLBDhCAejGM';

webpush.setVapidDetails(
  "mailto:manojgholap2021@gmail.com",
  publicVapidKey,
  privateVapidKey
);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
//   res.header("Access-Control-Allow-Credentials", false);
//   next();
// });
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json({ limit: "50mb", extended: true, type: "application/json" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true, type: "application/x-www-form-urlencoding" }));
// app.use(express.json({ type: "application/json" }));
// app.use(express.raw({ limit: "50mb" }));
// app.use(
//   cors()
// )
app.use('/uploads',express.static(__dirname+'/uploads'));

// global.appRoot = path.resolve(__dirname);
app.post('/upload',api.upload);
app.get('/getdata',api.getdata);
app.post('/updateStatus',api.updateStatus);
app.post('/uploadFile',api.uploadFile);
app.get('/getImageData',api.getImageData);
app.post("/subscribe", (req, res) => {
  console.log(req.body);
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Marg Health" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});
app.listen(8100);
console.log('server is started at port 8100');
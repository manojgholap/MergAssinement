var express = require ('express');
var app = express();
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require("body-parser");

var forms = require('./api/forms.js');

// handle cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Credentials", false);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb", extended: true, type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, type: "application/x-www-form-urlencoding" }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw({ limit: "50mb" }));

//app.get('/api/contactus', contact.contactus);
app.post('/api/simplecontact', forms.simplecontact);
app.post('/api/booking', forms.booking);

app.use('/', express.static(__dirname + '/www'));
app.use('/docs', express.static(__dirname + '/apidoc'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/admin', express.static(__dirname + '/admin'));
// app.use('/superadmin', express.static(__dirname + '/superadmin'));

global.appRoot = path.resolve(__dirname);
app.listen(15000);
console.log('server is started at port: 15000');
//module.exports = app
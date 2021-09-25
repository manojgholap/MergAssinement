let express = require("express");
let app = express();
let cors=require('cors');
let api=require("./Api/Api.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header("Access-Control-Allow-Credentials", false);
  next();
});
app.use(
  cors()
  )

app.use(
  express.json({
    limit: "50mb",
    extended: true,
    type: "application/json"
  },)
);

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    type: "application/x-www-form-urlencoding"
  })
);
app.use(
  express.json({
    type: "application/json"
  })
);
app.use(
 express.raw({
    limit: "50mb"
  })
);

app.post('/upload',api.upload);
app.get('/getdata',api.getdata);
app.post('/deletedata',api.deletedata);
app.post('/updateStatus',api.updateStatus)
app.listen(8100);
console.log('server is started at port 8100');
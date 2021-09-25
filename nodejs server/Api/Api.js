const mongoose = require('mongoose');
let mongodb=require('mongodb');
let url = 'mongodb://localhost:27017/assinement'
let projectlistschema = require('./schema.js');
let conn = mongoose.createConnection("mongodb://localhost:27017/assinement", { useNewUrlParser: true, useUnifiedTopology: true })
let healthdatas=conn.collection('healthdatas');

exports.deletedata=(req,res)=>{
    id=req.body.id
    healthdatas.deleteOne({_id:new mongodb.ObjectId(id)},(err,result)=>{
        if (!err) {

            resdata = {
                status: true,
                message: "data deleted",
                data: result
            };
            res.send(resdata);
        }
        else {
            resdata = {
                status: false,
                message: "no data found",
                err: err
            };
            res.send(resdata);
        }
    });
}
exports.getdata=(req,res)=>{
    healthdatas.find({}).toArray( function (err, result) {
        if (!err) {

            resdata = {
                status: true,
                message: "data fetched",
                data: result
            };
            res.send(resdata);
        }
        else {
            resdata = {
                status: false,
                message: "no data found",
                err: err
            };
            res.send(resdata);
        }
    });
}

exports.upload=(req,res)=>{
    const ProjectList = conn.model("healthdatas", projectlistschema)
    const doc = new ProjectList({
        c_name: req.body.c_name,
        c_batch_no: req.body.c_batch_no,
        d_expiry_date: req.body.d_expiry_date,
        n_balance_qty: req.body.n_balance_qty,
        c_packaging: req.body.c_packaging,
        c_unique_code: req.body.c_unique_code,
        n_mrp: req.body.n_mrp,
        c_manufacturer: req.body.c_manufacturer,
        hsn_code: req.body.hsn_code,
    })
     doc.save((err, data) => {
        if (err) {
            resdata = {
                status: false,
                message: "error while creating",
                err: err
            }
            res.send(resdata);
        }
        else {
            resdata = {
                status: true,
                message: " added successfully",
                data: data
            }
            res.send(resdata);
        }
    })
}
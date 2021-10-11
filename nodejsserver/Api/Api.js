const mongoose = require('mongoose');
var base64ToImage = require('base64-to-image');
let mongodb=require('mongodb');
let url = 'mongodb://localhost:27017/assinement'
let {projectlistschema,uploadFileData} = require('./schema.js');
let conn = mongoose.createConnection("mongodb://localhost:27017/assinement", { useNewUrlParser: true, useUnifiedTopology: true })
let healthdatas=conn.collection('healthdatas');
let images=conn.collection('images');

exports.uploadFile=(req,res)=>{
    var base64Str =req.body.image;
    let imageName=req.body.imageName;
    var path="./uploads/";
    var optionalObj = {'fileName':  imageName, 'type':'jpg'};
    base64ToImage(base64Str,path,optionalObj);
    const uploadFile = conn.model("images", uploadFileData);
    const doc = new uploadFile({
        fileName:imageName +".jpg",
        fileData:base64Str
    })
    doc.save((err, data) => {
        if (err) {
            resdata = {
                status: false,
                message: "error while uploading",
                err: err
            }
            res.send(resdata);
        }
        else {
            resdata = {
                status: true,
                message: " uploaded successfully",
                data: data
            }
            res.send(resdata);
        }
    })
}

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
exports.getImageData=(req,res)=>{
    images.find({}).toArray( function (err, result) {
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
exports.updateStatus = (req, res) => {
    var data = req.body;
    var id = data._id;
    healthdatas.updateOne({ _id:new mongodb.ObjectId(id) }, {
            $set: {
                c_name: req.body.c_name,
                c_batch_no: req.body.c_batch_no,
                d_expiry_date: req.body.d_expiry_date,
                n_balance_qty: req.body.n_balance_qty,
                c_packaging: req.body.c_packaging,
                c_unique_code: req.body.c_unique_code,
                n_mrp: req.body.n_mrp,
                c_manufacturer: req.body.c_manufacturer,
                hsn_code: req.body.hsn_code,
            }
        }, ( function (err, result) {

            if (err) {
                resdata = {
                    status: false,
                    message: "unable to update",
                    data: err
                }
              res.send(resdata)
            }
                else {
                    if(result.modifiedCount > 0)
                    {
                    resdata = {
                        status: true,
                        message:"updated",
                        data: result
                    }
                    res.send(resdata)
                }
                    else{
                        resdata = {
                            status: false,
                            message: "unable to update",
                            data: err
                        }
                      res.send(resdata)
                    }
                }
        })
        )
}


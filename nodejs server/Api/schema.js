let mongoose = require('mongoose')
const projectlistschema = new mongoose.Schema({
    c_name: String,
    c_batch_no: String,
    d_expiry_date: Date,
    n_balance_qty: Number,
    c_packaging: String,
    c_unique_code: Number,
    n_mrp: Number,
    c_manufacturer: String,
    hsn_code: Number,
})
module.exports=projectlistschema
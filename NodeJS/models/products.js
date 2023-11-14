const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productsSchema=new mongoose.Schema({
    name: String,
    category: String,
    comments: String,
    quantity: Number,
})

module.exports=new mongoose.model('products',productsSchema);